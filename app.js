function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keyDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audio || !keyDiv) return;

    keyDiv.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
}

function onKeyClick(event){
    let keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    this.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", onKeyClick);
});

window.addEventListener("keydown", playSound);

