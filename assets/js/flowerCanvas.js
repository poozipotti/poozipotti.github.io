var flowers = [];
var addFlowerCount = 50;
var flowerCanvas = null;
var myContext = null;
function startCanvas() {
  flowerCanvas = document.getElementById("flowerCanvas");
  myContext = flowerCanvas.getContext("2d");
  myContext.fillRect(0, 0, flowerCanvas.width, flowerCanvas.height);
  var theHeader = document.getElementById("header");
  myContext.canvas.width = window.innerWidth;
  myContext.canvas.height = 200;
  addRandomFlowers(5, myContext);
  setInterval(function() {
    updateCanvas();
  }, 100);
  window.onresize = function(event) {
    myContext.canvas.width = window.innerWidth;
    myContext.canvas.height = 200;
  };
}

function addFlower(x, y, width, height, curveWeight, number, color, growRate) {
  flowers.push([x, y, width, height, curveWeight, number, color, growRate]);
}
function drawFlower(x, y, width, height, curveWeight, number, color) {
  var TO_RADIANS = Math.PI / 180;
  myContext.translate(x, y);
  myContext.fillStyle = "#42f495";
  myContext.fillRect(-2.5, 0, 5, flowerCanvas.height - y);
  var rotation = 0;
  for (var j = 0; j < number; j++) {
    myContext.fillStyle = color;
    myContext.beginPath();
    myContext.moveTo(0, 0);
    myContext.quadraticCurveTo(curveWeight * width, height, width, 0);
    myContext.moveTo(0, 0);
    myContext.quadraticCurveTo(curveWeight * width, -1 * height, width, 0);
    myContext.fill();
    myContext.rotate(TO_RADIANS * (360 / number));
  }
  myContext.rotate(TO_RADIANS * (360 - (360 / number) * j));
  myContext.fillStyle = "#fced7e";
  myContext.beginPath();
  myContext.arc(0, 0, 10, 0, 2 * Math.PI);
  myContext.fill();
  myContext.translate(-x, -y);
}
function addRandomFlowers(numberOfFlowers) {
  for (var i = 0; i < numberOfFlowers; i++) {
    var randomColor = "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    });
    addFlower(
      Math.random() * flowerCanvas.width, //x
      flowerCanvas.height - (flowerCanvas.height * 0.1), //y
      (Math.random() * 30 + 10), //width
      (Math.random() * 30 + 10), //height
      Math.random() * 2, //curve weight
      Math.floor(Math.random() * 30) / 2 + 3, //number
      randomColor + "AA",//color
      Math.random() * 0.5 + 0.5//grow rate
    );
  }
}
function updateCanvas() {
  var primaryColor = "#26212C";
  var secondaryColor = "#3F3931";
  myContext.fillStyle = primaryColor;
  myContext.fillRect(0, 0, flowerCanvas.width, flowerCanvas.height);
  //add more flowers as time passes;
  if (addFlowerCount <= 0) {
    addFlowerCount = 100 + Math.floor(Math.random() * 100);
    addRandomFlowers(1);
  } else {
    addFlowerCount--;
  }
  //update flowers
  for (var k = 0; k < flowers.length; k++) {
    if (flowers[k][1] >= flowerCanvas.height / 2) {
      flowers[k][1] = flowers[k][1] - flowers[k][7];
      drawFlower(
        flowers[k][0],
        flowers[k][1],
        flowers[k][2],
        flowers[k][3],
        flowers[k][4],
        flowers[k][5],
        flowers[k][6]
      );
    } else {
      flowers.splice(k, 1);
      addRandomFlowers(1);
    }
  }
  myContext.fillStyle = secondaryColor;
  myContext.fillRect(
    0,
    flowerCanvas.height - 10,
    flowerCanvas.width,
    10
  );
}
window.onload = function() {
  startCanvas();
};
