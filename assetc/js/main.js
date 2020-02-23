window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return //if audio element not found than stop code
    audio.currentTime = 0 //assing audio currentTime property intp zero

    audio.play();
   key.classList.add("playing");
});

const keys=document.querySelectorAll(".key");
keys.forEach(function(key){
    key.addEventListener("transitionend",function(e){
        if(e.propertyName!=="transform") return//If not Found Transform Propery
        this.classList.remove("playing");
    })
})