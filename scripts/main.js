var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/E&S_logo.jpg') {
      myImage.setAttribute ('src','images/E&S_logo2.jpg');
    } else {
      myImage.setAttribute ('src','images/E&S_logo.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Welcome to the official website of E & S, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Welcome to the official website of E & S, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}