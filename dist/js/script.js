const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
document.body.style.backgroundImage =
    "url('/dist/img/background.jpg')";
breatheAnimation();

//"classic" breathing exercise by Brad Traversy
function breatheAnimation() {
    text.innerHTML = "Breathe in!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerHTML = "Hold";

        setTimeout(() => {
            text.innerHTML = "Breathe Out !";
            container.className = "container shrink";
        }, holdTime);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime);