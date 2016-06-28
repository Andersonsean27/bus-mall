'use strict';
var tally = 0;

function Product (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  productArray.push(this);
}
var productArray = [];

var bag = new Product ('bag', 'images/bag.jpg');
var banana = new Product ('banana', 'images/banana.jpg');
var bathroom = new Product ('bathroom', 'images/bathroom.jpg');
var boots = new Product ('boots', 'images/boots.jpg');
var breakfast = new Product ('breakfast', 'images/breakfast.jpg');
var bubblegum = new Product ('bubblegum', 'images/bubblegum.jpg');
var chair = new Product ('chair', 'images/chair.jpg');
var cthulhu = new Product ('cthulhu', 'images/cthulhu.jpg');
var dogDuck = new Product ('dogDuck', 'images/dogDuck.jpg');
var dragon = new Product ('dragon', 'images/dragon.jpg');
var pen = new Product ('pen', 'images/pen.jpg');
var petSweep = new Product ('petSweep', 'images/petSweep.jpg');
var scissors = new Product ('scissors', 'images/scissors.jpg');
var shark = new Product ('shark', 'images/shark.jpg');
var sweep = new Product ('sweep', 'images/sweep.png');
var tauntaun = new Product ('tauntaun', 'images/tauntaun.jpg');
var unicorn = new Product ('unicorn', 'images/unicorn.jpg');
var usb = new Product ('usb', 'images/usb.gif');
var waterCan = new Product ('waterCan', 'images/waterCan.jpg');
var wineGlass = new Product ('wineGlass', 'images/wineGlass.jpg');

var randomNumber = function () {
  return Math.floor(Math.random() * (20));
};
var selectRandomPicture = function () {
  return productArray[randomNumber()];
};
var newImage = function () {
  return selectRandomPicture().filePath;
};
var picOne = document.getElementById('picOne');
picOne.src = newImage();

var picTwo = document.getElementById('picTwo');
picTwo.src = newImage();

var picThree = document.getElementById('picThree');
picThree.src = newImage();
while (tally < 5) {
  var repeatFunction = function (event) {
    tally++;
    console.log(this.src);
    var currentImagePath = this.src;
    for (var i = 0; i < productArray.length; i++) {
      if ('images' + currentImagePath.split('images')[1] === productArray[i].filePath) {
        productArray[i].timesClicked ++;
        console.log(productArray[i].timesClicked);
      }
    }
    var picOne = document.getElementById('picOne');
    picOne.src = newImage();
    var picTwo = document.getElementById('picTwo');
    picTwo.src = newImage();
    var picThree = document.getElementById('picThree');
    picThree.src = newImage();
  };
}
picOne.addEventListener('click', repeatFunction, false);
picTwo.addEventListener('click', repeatFunction, false);
picThree.addEventListener('click', repeatFunction, false);
