const slider = document.querySelector('.slider input');
const img = document.querySelector('.images .image__after');
const dragline = document.querySelector('.slider .drag-line');
slider.oninput = () => {
    let sliderVal = slider.value;
    dragline.style.left = sliderVal + "%"
    img.style.width = sliderVal + "%"
}
