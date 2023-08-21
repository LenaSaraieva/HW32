const imagesFolder = document.getElementById('imagesFolder');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');

const images = ['5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let imageIndex = 0;

function displayImage() {
    imagesFolder.src = './images/' + images[imageIndex];

    if (imageIndex === 0) {
        previousBtn.style.display = "none";
     } else {
        previousBtn.style.display = "block";
     }
     if (imageIndex === images.length - 1) {
        nextBtn.style.display = "none";
     } else {
        nextBtn.style.display = "block";
     } }

     previousBtn.addEventListener('click', () => {
        if (imageIndex > 0) {
            imageIndex--;
            displayImage();
        }
     });

    
nextBtn.addEventListener('click', () => {
    if (imageIndex < images.length - 1) {
        imageIndex++;
        displayImage();
    }
});
displayImage();