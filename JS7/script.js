document.addEventListener("DOMContentLoaded", function () {
    const train = document.getElementById("train");
    const startButton = document.getElementById("startButton");

    let isMoving = false;

    startButton.addEventListener("click", function () {
        if (!isMoving) {
            train.style.transform = "translateX(calc(100% + 100px))";
            isMoving = true;
            startButton.textContent = "Stop";
        } else {
            train.style.transform = "translateX(-100px)";
            isMoving = false;
            startButton.textContent = "Start";
        }
    });
});
