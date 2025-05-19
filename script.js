
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promp t to select a media stream, pass to video element, then play 
async function selectMediaStream(){
    try {
        //Which window you want to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        //When that video has loaded its metadata, call function that is going to play the video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch error
        console.log('error', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Buttom
    button.disabled = true;
    // Start Pic in pic
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//On Load
selectMediaStream();
