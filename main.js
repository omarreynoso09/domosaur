// step 1
const biggieSpans = document.querySelector('span.mess-with-me');
biggieSpans.style.fontSize = '3em';
// step2
const paragraph = document.querySelector('p.mess-with-me');
paragraph.style.backgroundColor = 'green';
// step3
const hideMe = document.querySelector('#hide-me-area');
hideMe.style.display = 'none';
// step4
const triceratops = document.querySelector('#triceratops');
triceratops.style.width = '324px';
// event listener step1 
const makeOrange = function() {
  biggieSpans.style.color = 'orange';
}
biggieSpans.addEventListener('click', makeOrange);
// event listener step2 
const firstDino = document.querySelector('#triceratops');
const addRedBorder = function() {
  firstDino.style.border = '1px solid red';
}
firstDino.addEventListener('click', addRedBorder);
//event listener step3 
const feathers = document.querySelector('#feathers');
const lowerOpacity = function() {
  feathers.style.opacity = 0.5;
}
feathers.addEventListener('click', lowerOpacity);
// event listener step 4
const toggleButton = document.querySelector('#toggle');
const dinosaurRow = document.querySelector('#row');
let toggled = false;

const toggleBackgroundColor = function() {
  if (toggled === false) {
    dinosaurRow.style.backgroundColor = 'blue';
    toggled = true;
  } else {
    dinosaurRow.style.backgroundColor = 'white';
    toggled = false;
  }
}
toggleButton.addEventListener('click', toggleBackgroundColor);
//event listener step5  and strech goals 
const biggiesaurus = document.querySelector('#biggify');

const bigpic = function() {
  biggiesaurus.style.width = '300px';
}
biggiesaurus.addEventListener('mouseover', bigpic);

const smallz = function() {
  biggiesaurus.style.width = '110px';
}
biggiesaurus.addEventListener('mouseout', smallz);
