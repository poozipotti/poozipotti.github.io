var flowers = [];
var flowerCanvas = null;
var myContext = null;
var maxFlowers = 15;
var scrollCount = 4;
var currentScrollCount = 0;
function startCanvas() {
  flowerCanvas = document.getElementById("flowerCanvas");
  flowerCanvasContainer = document.getElementById("flowerCanvasContainer");
  myContext = flowerCanvas.getContext("2d");
  const tempWidth = flowerCanvasContainer.clientWidth;
  const tempHeight = flowerCanvasContainer.clientHeight;
  myContext.canvas.width = tempWidth;
  myContext.canvas.height = tempHeight;
  window.onresize = function (_e) {
    myContext.canvas.width = tempWidth;
    myContext.canvas.height = tempHeight;
  };
  window.onscroll = function (_e) {
    currentScrollCount++;
    if (currentScrollCount === scrollCount) {
      currentScrollCount = 0;
      updateCanvas();
    }
  };
  updateCanvas();
}

function addFlower(flower) {
  flowers.push(flower);
}
function drawFlower({ x, y, width, height, curveWeight, petalCount, color }) {
  var TO_RADIANS = Math.PI / 180;
  myContext.translate(x, y);
  myContext.fillStyle = "#73ba8d";
  myContext.fillRect(-10, 0, 20, flowerCanvas.height - y);
  for (var j = 0; j < petalCount; j++) {
    myContext.fillStyle = color;
    myContext.beginPath();
    myContext.moveTo(0, 0);
    myContext.quadraticCurveTo(curveWeight * width, height, width, 0);
    myContext.moveTo(0, 0);
    myContext.quadraticCurveTo(curveWeight * width, -1 * height, width, 0);
    myContext.fill();
    myContext.rotate(TO_RADIANS * (360 / petalCount));
  }
  myContext.rotate(TO_RADIANS * (360 - (360 / petalCount) * j));
  myContext.fillStyle = "#fced7e";
  myContext.beginPath();
  myContext.arc(0, 0, 15, 0, 2 * Math.PI);
  myContext.fill();
  myContext.translate(-x, -y);
}
function createRandomFlowers(numberOfFlowers) {
  const flowers = [];
  for (var i = 0; i < numberOfFlowers; i++) {
    const randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    const initialY = flowerCanvas.height -200;
    flowers.push({
      x: Math.random() * flowerCanvas.width, //x
      y: initialY, //y
      width: Math.random() * 200 + 100, //width
      height: Math.random() * 200 + 100, //height
      curveWeight: Math.random() * 2, //curve weight
      petalCount: Math.floor(Math.random() * 30) / 2 + 3, //petalCount
      color: `${randomColor}AA`, //color
      growthRate: Math.random() * 60 + 30, //grow rate
      growthProb: 0.5,
      maxHeight: 200,
    });
  }
  return flowers;
}
function updateCanvas() {
  active = false;
  var primaryColor = "#fdfdf1";
  var secondaryColor = "#3F3931";
  myContext.fillStyle = primaryColor;
  myContext.fillRect(0, 0, flowerCanvas.width, flowerCanvas.height);

  //add more flowers as time passes;
  if (flowers.length < maxFlowers) {
    if (Math.random() < 0.3) {
      flowers.push(createRandomFlowers(1)[0]);
    }
  }
  //update flowers
  flowers.forEach((flower, i) => {
    if (Math.random() < flower.growthProb) {
      flower.y -= flower.growthRate;
    }
    drawFlower(flower);
  });

  flowers = flowers.map((flower) =>
    flower.y >= flower.maxHeight ? flower : createRandomFlowers(1)[0]
  );
  myContext.fillStyle = secondaryColor;
  myContext.fillRect(0, flowerCanvas.height - 10, flowerCanvas.width, 10);
}
window.onload = function () {
  startCanvas();
};
