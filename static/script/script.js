const backgroundSound = new Audio('/static/music/sound.mp3');


function breathe5(){

    document.getElementById('img').className ='breathe5';
    document.getElementById("inhale").style.visibility = "visible";
    document.getElementById("exhale").style.visibility = "visible";

    document.getElementById('inhale').className ='inhale5';
    document.getElementById('exhale').className ='exhale5';



}
function breathe10(){
    document.getElementById('img').className ='breathe10';

}
function breathe15(){
    document.getElementById('img').className ='breathe15';

}

window.onload = function() {
    
    backgroundSound.play();

}

function  soundOff(){
    var img1 = "/static/images/mute.png";
    var img2 = "/static/images/volume.png";
    var imgElement = document.getElementById('sound-off');

    if(imgElement.src === img1){
        imgElement.src = img2;
        backgroundSound.pause();
    
    }
    if(imgElement.src === img2){
        imgElement.src = img1;
        backgroundSound.play();
    
    }
}
function blabla(){
    var img1 = "/static/images/mute.png";
    
    var img2 = "/static/images/volume.png";
    
    var imgElement = document.getElementById('sound-off');
    var buff = imgElement.src;
    buff = buff.substr(21);
    if(buff.localeCompare(img2) === 0){
        imgElement.src = img1;
        console.log(imgElement);
        backgroundSound.pause();

    }
    if(buff === img1){
        imgElement.src = img2;
        console.log(imgElement);
        backgroundSound.play();

    }



}

