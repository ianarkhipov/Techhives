// Get references to the image element and the container element with class "hueContainer"
const runningImage = document.getElementById('runningImage');
const hueContainer = document.querySelector('.hueContainer');

// Define sensitivity and translation factors to control the animation behavior
const sensitivityFactor = 0.1; // Adjust this value to make the movement less sensitive (e.g., reduce it to 0.1)
const translationFactor = 1.00; // Adjust this value to reduce the amplitude (e.g., set it to 0.33)

// Variables to store the previous cursor position for adding momentum
let prevMouseX = 0;
let prevMouseY = 0;

// Function to update the image position based on the cursor's position
function updateImagePosition(event) {
    // Get the bounding rectangle of the container to calculate the cursor position relative to it
    const containerRect = hueContainer.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    // Calculate the change in cursor position since the last update
    const deltaX = mouseX - prevMouseX;
    const deltaY = mouseY - prevMouseY;

    // Apply momentum by adding the movement from the previous update
    const imageX = (containerRect.width / 2500 - mouseX + deltaX) * sensitivityFactor;
    const imageY = (containerRect.height / 2500 - mouseY + deltaY) * sensitivityFactor;

    // Update the position of the image using CSS translate
    runningImage.style.transform = `translate(${imageX * translationFactor}px, ${imageY * translationFactor}px)`;

    // Update the previous cursor position for the next update
    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

// Add event listener to track the cursor movement within the "hueContainer"
window.addEventListener('mousemove', updateImagePosition);
