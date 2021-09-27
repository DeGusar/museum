const pictureInnerContainer = document.querySelector('.picture__inner-container');


let images = ['/app/images/galery/galery1.jpg', '/app/images/galery/galery2.jpg', '/app/images/galery/galery3.jpg', '/app/images/galery/galery4.jpg', '/app/images/galery/galery5.jpg', '/app/images/galery/galery6.jpg', '/app/images/galery/galery7.jpg', '/app/images/galery/galery8.jpg', '/app/images/galery/galery9.jpg', '/app/images/galery/galery10.jpg', '/app/images/galery/galery11.jpg', '/app/images/galery/galery12.jpg', '/app/images/galery/galery13.jpg', '/app/images/galery/galery14.jpg', '/app/images/galery/galery15.jpg']


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(images);
let count = 1;
picturesInnerContainer = images.map(function (currentValue, index) {
    
    const img = document.createElement('img');
    img.classList.add(`gallery-img`);
    
    img.classList.add(`img${count}`);
img.src = `${currentValue}`;
    img.alt = `galery${index}`;
    img.width = '456'
    pictureInnerContainer.append(img);
    count++;
})


const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');
const img7 = document.querySelector('.img7');
const img8 = document.querySelector('.img8');
const img9 = document.querySelector('.img9');
const img10 = document.querySelector('.img10');
const img11 = document.querySelector('.img11');
const img12 = document.querySelector('.img12');
const img13 = document.querySelector('.img13');
const img14 = document.querySelector('.img14');
const img15 = document.querySelector('.img15');
let imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
let sum = 0;
imgs.map(function (currentValue) {
   
    if (currentValue.naturalHeight == "580") {
        currentValue.classList.add(`imgHigh`);
    } else if(currentValue.naturalHeight == "464") {
        currentValue.classList.add(`imgMedium`);
    } else {
        currentValue.classList.add(`imgLow`);
    }
    
})

    
   