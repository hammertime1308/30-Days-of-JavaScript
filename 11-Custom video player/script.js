const [playBtn, prevBtn, skipBtn] = document.querySelectorAll('.player-button')
const videoPlayer = document.querySelector('.player-viewer')
const progressBar = document.querySelector('.completed')

function playContent(e){
    if(videoPlayer.paused){
        // play the content and change icon to ||
        videoPlayer.play()
        playBtn.innerHTML = `⏸️`
    }
    else{
        // pause the content and change icon to triangle
        videoPlayer.pause()
        playBtn.innerHTML = `▶️`
    }
}

function move(e){
    videoPlayer.currentTime = videoPlayer.currentTime + parseInt(this.dataset.skip,10) 
    updateProgressBar()
}

function updateProgressBar(){
    progressBar.style.width = `${videoPlayer.currentTime/videoPlayer.duration *100}%`
    if(progressBar.style.width === '100%'){
        playBtn.innerHTML = `▶️`
    }
}

playBtn.addEventListener('click',playContent)
prevBtn.addEventListener('click',move)
skipBtn.addEventListener('click',move)

setInterval(updateProgressBar,1000)
