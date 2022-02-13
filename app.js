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

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition.bind(key));
});

window.addEventListener("keydown", playSound);
