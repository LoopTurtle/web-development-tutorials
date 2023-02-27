const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */
const imageAltText = ["baby eye", "stone", "flowers", "egyptian", "butterfly"]

/* Looping through images */

for (let i = 0; i < 5; i++) {
    // Populate thumbBar
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/"+imageFilenames[i]);
    newImage.setAttribute('alt', imageAltText[i]);
    thumbBar.appendChild(newImage);

    // Select image for main display
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', "images/" + imageFilenames[i]);
        displayedImage.setAttribute('alt', imageAltText[i]);
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    //window.alert("Bananas!");
    //   btn.onclick = function () {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
    
