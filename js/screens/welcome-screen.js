export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.innerText = 'Welcome screen';
   return welcomeStepWrapper;
};

const svgNS = './assets/choose.svg';
const svg = document.createElementNS(svgNS, 'svg');

function createButton() {
   const chooseButton = document.createElement('button');
   const contentButton = document.innerText('Choose');
   svg.appendChild(chooseButton && contentButton);
   document.body.appendChild(svg);
   return chooseButton && contentButton;
}

image.onClick = function choose() {
   image.src = './components/choose.svg';
   return image.src;
};

function ultimatePixel() {
   const h1UltimatePixel = document.createElement('h1');
   h1UltimatePixel.innerText = 'Ultimate Pixel';
   document.body.append(h1UltimatePixel);
   return h1UltimatePixel;
}

function championships() {
   const h1Championships = document.createElement('h1');
   h1Championships.innerText = 'Championships';
   document.body.append(h1Championships);
   return h1Championships;
}

ultimatePixel();
championships();

function lineBelowUPC(orangeLine) {
   const svgLine = 'assets/orangeLine.svg';
   const svgL = document.createElementNS(svgLine, 'svg');
   document.body.append(svgL);
   return svgLine;
}

const svgTopMargin = 'assets/marginTop.svg';
const svgBottomMargin = 'assets/marginBottom.svg';

function margins() {
   const svgMarginTop = document.createElementNS(svgTopMargin, 'svg');
   const svgMarginBottom = document.createElementNS(svgBottomMargin, 'svg');
   document.body.append(svgMarginTop && svgMarginBottom);
   return svgMarginTop && svgMarginBottom;
}

const svgLeftSword = 'assets/leftSword.svg';
const svgRightSword = 'assets/rightSword.svg';

function addSwords() {
   const svgLSword = document.createElementNS(svgLeftSword, 'svg');
   const svgRSword = document.createElementNS(svgRightSword, 'svg');
   document.body.appendChild(svgLSword && svgRSword);
   return svgLSword && svgRSword;
}

orangeButton();
margins();
lineBelowUPC();
createButton();
addSwords();
