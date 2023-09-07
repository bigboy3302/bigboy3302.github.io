document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelectorAll(".slider-image");
    let index = 0;

    function changeImage() {
        sliderImages[index].classList.remove("active");
        index = (index + 1) % sliderImages.length;
        sliderImages[index].classList.add("active");
    }

    sliderImages[0].classList.add("active"); // Show the first image initially
    setInterval(changeImage, 2000); // Change image every 2 seconds
});
