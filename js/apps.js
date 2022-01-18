'use strict';

let container = document.getElementById('select');
let resultList = document.getElementById('result');
let submit = document.getElementById('button');

let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');

let itemArray = [];
let counter = 0;
let maxCount = 25;

function Item(name){
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.src = `images/${name}.jpg`;
  itemArray.push(this);
}

function randomNum() {
  let nArray = [];
  let item1 = nArray[0];
  let item2 = nArray[1];
  let item3 = nArray[2];
  for( let i=0;i<3;i++){
    nArray.push(Math.floor(Math.random() * itemArray.length));
  }
  return nArray;
}
randomNum();

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

image1.src = itemArray[item1].src;
image2.src = nArray[1].src;
image3.src = nArray[3].src;
