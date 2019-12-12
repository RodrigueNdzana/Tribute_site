// Storing the source of all images in an array
var images = [
  "Images/Nelson mandel.jpg",
  "Images/Nelson Mandela2.jpg",
  "Images/Nelson Mandela3.jpg",
  "Images/Nelson mandela6.jpg",
  "Images/Nelson mandela7.jpg",
  "Images/Nelson mandela56.jpg"
];
// Getting image tag from the DOM
let imgElement = document.getElementById("images");
// imgCounter will be used as an incremental value everytime the button is clicked (or the function is called)
let imgCounter = 0;
// Changing the src attribute of the image tag to the first value of the array. The first image will be displayed in the DOM
imgElement.src = images[imgCounter];
// Whenever the button is click the src attribute will be replaced by the next item in the images array
function clicked() {
  // Checking if there are images in the array. If false, keep imgCounter at 0
  if (imgCounter > images.length) {
    imgCounter = 0;
  } else {
    // If there are values in the images array increment imgCounter everytime the button is clicked
    imgCounter++;
    // When imgCounter is less than the length of the images array imgCounter will keep incrementing when the button is clicked
    // When imgCounter becomes more than the length of the images array imgCounter will stop incrementing when the button is clicked
    if (imgCounter < images.length) {
      imgElement.src = images[imgCounter];
    }
  }
  
}



