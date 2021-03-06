'use strict';
var tally = 0;
var button = document.getElementById('results');
document.getElementById('results').hidden = true;
var previousDisplayArray = [];
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

if (localStorage.data) {
  var myData = JSON.parse(localStorage.data);
  var myViews = JSON.parse(localStorage.views);
  for (var i = 0; i < productArray.length; i++) {
    productArray[i].timesClicked = myData[i];
    productArray[i].timesShown = myViews[i];

  }
} else {
}
var randomNumber = function () {
  return Math.floor(Math.random() * (productArray.length));
};
var newImage = function () {
  return productArray[randomNumber()];
};

var getPictures = function () {
  var picOne = document.getElementById('picOne');
  var productOne = newImage();
  picOne.src = productOne.filePath;

  var picTwo = document.getElementById('picTwo');
  var productTwo = newImage();
  picTwo.src = productTwo.filePath;

  var picThree = document.getElementById('picThree');
  var productThree = newImage();
  picThree.src = productThree.filePath;
  while (picOne.src === picTwo.src || picOne.src === picThree.src || picTwo.src === picThree.src) {
    for (var i = 0; i < previousDisplayArray.length; i++) {
      if (picOne.src === previousDisplayArray[i] || picTwo.src === previousDisplayArray[i] || picThree.src === previousDisplayArray[i]) {
        productOne = newImage();
        picOne.src = productOne.filePath;
        productTwo = newImage();
        picTwo.src = productTwo.filePath;
        productThree = newImage();
        picThree.src = productThree.filePath;
      }
    }
    productOne = newImage();
    picOne.src = productOne.filePath;
    productTwo = newImage();
    picTwo.src = productTwo.filePath;
    productThree = newImage();
    picThree.src = productThree.filePath;

   //This code is not doing exactly what I am wanting it to do, but it is functional enough to move forward.
  }
  productOne.timesShown++;
  productTwo.timesShown++;
  productThree.timesShown++;

  previousDisplayArray = [picOne.src, picTwo.src, picThree.src];
};
getPictures();

var repeatFunction = function (event) {
  tally++;
  if (tally < 25) {
    var currentImagePath = this.src;
    for (var i = 0; i < productArray.length; i++) {
      if ('images' + currentImagePath.split('images')[1] === productArray[i].filePath) {
        productArray[i].timesClicked ++;
      }
    }
    getPictures();
  }
  else {
    document.getElementById('results').hidden = false;
  }
};

picOne.addEventListener('click', repeatFunction, false);
picTwo.addEventListener('click', repeatFunction, false);
picThree.addEventListener('click', repeatFunction, false);

var productNames = function () {
  var namesArray = [];
  for (var i = 0; i < productArray.length; i++) {
    namesArray.push(productArray[i].imageName);
  }
  return namesArray;
};
var setNamestoLocalStorage = function () {
  var names = productNames();

  localStorage.setItem('names', JSON.stringify(names));
};
var getProductClicks = function () {
  var clicksArray = [];
  for(var i = 0; i < productArray.length; i++) {
    clicksArray.push(productArray[i].timesClicked);
  }
  return clicksArray;
};
setNamestoLocalStorage();

var getProductViews = function () {
  var viewsArray = [];
  for(var i = 0; i < productArray.length; i++) {
    viewsArray.push(productArray[i].timesShown);
  }
  return viewsArray;
};

var getPercentages = function () {
  var percentageArray = [];
  for (var i = 0; i < productArray.length; i++) {
    var percentage = getProductClicks()[i] / getProductViews()[i] * 100;
    percentageArray.push(percentage);
  }
  return percentageArray;
};

var setDatatoLocalStorage = function () {
  var data = getProductClicks();
  var views = getProductViews();
  var percentage = getPercentages();

  localStorage.setItem('data', JSON.stringify(data));
  localStorage.setItem('views', JSON.stringify(views));
};

var makeAChart = function () {
  var chartData = {
    labels: productNames(),
    datasets: [{
      label: 'Product Clicks',
      data: getProductClicks(),
      backgroundColor: '#ccf5ff'
    },
    ]
  };

  var results = document.getElementById('chart').getContext('2d');
  new Chart.Bar(results, {
    data: chartData,
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};

var makeAChart2 = function () {
  var chartData = {
    labels: productNames(),
    datasets: [{
      label: 'Product Clicks Out of Times Shown',
      data: getPercentages(),
      backgroundColor: '#1a1a1a'
    },
    ]
  };

  var results = document.getElementById('chart2').getContext('2d');
  new Chart.Bar(results, {
    data: chartData,
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};

var makeCharts = function() {
  makeAChart();
  makeAChart2();
};

picOne.addEventListener('click', setDatatoLocalStorage , false);
picTwo.addEventListener('click', setDatatoLocalStorage, false);
picThree.addEventListener('click', setDatatoLocalStorage, false);

button.addEventListener('click', makeCharts, false);
