let images = ["Tree", "Space", "Office", "Horse", "City"];
let currentImageIndex = 0

const mainImage = document.querySelector('#mainImage')
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const imgDescriptionText = document.querySelector('#imgDescription')

nextButton.addEventListener('click', () => {
    // Checking if we are at the last image of the images list, if yes - set current image to the first one
    currentImageIndex === images.length - 1 ? currentImageIndex = 0 : currentImageIndex++
    mainImage.src = `assets/${images[currentImageIndex]}.jpg`
    imgDescriptionText.innerText = images[currentImageIndex]
})

prevButton.addEventListener('click', () => {
    // Checking if we are at the last image of the images list, if yes - set current image to the first one
    currentImageIndex === 0 ? currentImageIndex = images.length-1 : currentImageIndex--
    mainImage.src = `assets/${images[currentImageIndex]}.jpg`
    imgDescriptionText.innerText = images[currentImageIndex]
})

imgDescriptionText.addEventListener('mouseover', function (){this.style.fontWeight = "bold"})
imgDescriptionText.addEventListener('mouseout', function (){this.style.fontWeight = "normal"})

imgDescriptionText.addEventListener('click', () => {
    const imgName = imgDescriptionText.innerText;
    mainImage.src = `assets/${imgName}.jpg`
})
// Tasks
// a. Display the image with the correct name inside the 'span' tag. V

// b. Ensure the buttons loop through images. When it reaches the last or first image, it cycles through. V

// c. Hovering on the 'span' tag should make the font-weight 'bold'. The font-weight should go back to normal when the mouse is out. V

// d. Clicking the 'span' tag should update the 'img' tag to show the corresponding image (Tree.png, Space.png, etc.). V