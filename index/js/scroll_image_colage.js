document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.getElementsByClassName("scrolling_image_element");
    const amountImages = 4;

    let imageTicker = 1;

    setInterval( () => {
        if (imageTicker == 0) {
            imageElements[amountImages - 1].style.opacity = "0%";
        } else {
            imageElements[imageTicker - 1].style.opacity = "0%";
        };
        imageElements[imageTicker].style.opacity = "100%";

        console.log(imageTicker);

        imageTicker += 1;
        if (imageTicker >= amountImages) {
            imageTicker = 0;
        };
    }, 6000);
});