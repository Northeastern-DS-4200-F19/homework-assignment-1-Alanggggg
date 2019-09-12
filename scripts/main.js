let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/firefox2.png');
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
};


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// called when button is clicked
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'This is Mozilla! Hi , ' + myName;
    }
}

//pop up when the page load
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is Mozilla! Hi , ' + storedName;
}




myButton.onclick = function() {
    setUserName();
}





// let mySecondHeading = document.querySelector('h2');
//
// mySecondHeading.textContent = 'testing JS querySelector';


// alert('Testing alert');


// document.querySelector('html').onclick = function() {
//     alert('Oops');

