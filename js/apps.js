'use strict';

const container = document.getElementById('select');
const submit = document.getElementById('button');

let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');

let itemArray = [];
let index = [];
let counter = 0;
let maxCount = 25;

function Item(name) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.src = `images/${name}.jpg`;
  itemArray.push(this);
}

function getRandom() {
  return Math.floor(Math.random() * itemArray.length);
}

function renderItem() {
  while (index.length < 6) {
    let number = getRandom();
    if (!index.includes(number)) {
      index.push(number);
    }
  }
  let item1 = index.shift();
  let item2 = index.shift();
  let item3 = index.shift();

  image1.src = itemArray[item1].src;
  image1.alt = itemArray[item1].name;
  image2.src = itemArray[item2].src;
  image2.alt = itemArray[item2].name;
  image3.src = itemArray[item3].src;
  image3.alt = itemArray[item3].name;

  itemArray[item1].views++;
  itemArray[item2].views++;
  itemArray[item3].views++;

}
function handelClicks(event) {
  counter++;
  let itemClicked = event.target.alt;
  for (let i = 0; i < itemArray.length; i++) {
    if (itemClicked === itemArray[i].name) {
      itemArray[i].clicks++;
      break;
    }
  }
  if (counter === maxCount) {
    container.removeEventListener('click', handelClicks);
    submit.className = 'clicks-allowed';
    submit.addEventListener('click', buttonClick);
  }
  renderItem();
}
function buttonClick(event) {
  if (counter === maxCount) {
    renderResult();
  }
}
function renderResult() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < itemArray.length; i++) {
    let message = `${itemArray[i].name} had ${itemArray[i].views} views and was clicked on ${itemArray[i].clicks} times.`;
    let li = document.createElement('li');
    li.textContent = message;
    ul.appendChild(li);
  }

}
new Item('bag');
new Item('banana');
new Item('bathroom');
new Item('boots');
new Item('breakfast');
new Item('bubblegum');
new Item('chair');
new Item('cthulhu');
new Item('dog-duck');
new Item('dragon');
new Item('pen');
new Item('pet-sweep');
new Item('scissors');
new Item('shark');
new Item('sweep');
new Item('tauntaun');
new Item('unicorn');
new Item('water-can');
new Item('wine-glass');

renderItem();

container.addEventListener('click', handelClicks);
