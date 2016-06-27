'use strict';

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
var cthulhu = new Product ('cthulhu', 'images/chair.jpg');
var dogDuck = new Product ('docDuck', 'images/dogDuck.jpg');
var dragon = new Product ('dragon', 'images/dragon.jpg');
var pen = new Product ('pen', 'images/pen.jpg');
var petSweep = new Product ('petSweep', 'images/petSweep.jpg');
var scissors = new Product ('scissors', 'images/scissors.jpg');
var shark = new Product ('shark', 'images/shark.jpg');
var sweep = new Product ('sweep', 'images/sweep.jpg');
var tauntaun = new Product ('tauntaun', 'images/tauntaun.jpg');
var unicorn = new Product ('unicorn', 'images/unicorn.jpg');
var usb = new Product ('usb', 'images/usb.gif');
var waterCan = new Product ('waterCan', 'images/waterCan.jpg');
var wineGlass = new Product ('wineGlass', 'images/wineGlass.jpg');
