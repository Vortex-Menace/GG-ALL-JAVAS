// Get references to the HTML elements
const optionOneButton = document.querySelector('.option-one');
const optionTwoButton = document.querySelector('.option-two');
const optionOneScreen = document.querySelector('.option-one-screen');
const optionTwoScreen = document.querySelector('.option-two-screen');
const optionOneEnd = document.querySelector('.option-one-end');
const optionTwoEnd = document.querySelector('.option-two-end');

// Add event listeners to the buttons to show the appropriate screen when clicked
optionOneButton.addEventListener('click', function() {
optionOneScreen.style.display = 'block';
});

optionTwoButton.addEventListener('click', function() {
optionTwoScreen.style.display = 'block';
});

// Add event listeners to the screens to show the appropriate end screen when finished
optionOneScreen.addEventListener('click', function() {
optionOneScreen.style.display = 'none';
optionOneEnd.style.display = 'block';
});

optionTwoScreen.addEventListener('click', function() {
optionTwoScreen.style.display = 'none';
optionTwoEnd.style.display = 'block';
});