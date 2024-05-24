let playing = false;

const playVideo = () =>{
    let video = document.getElementById('video');
    if(!playing){
        video.play();
        playing = true;
    }else{
        alert("El video s'esta reproduint!");
    }

}

const pauseVideo = () =>{
    let video = document.getElementById('video');
    if(playing){
        video.pause();
        playing = false;
    }else{
        alert("El video esta pausat");
    }
}

