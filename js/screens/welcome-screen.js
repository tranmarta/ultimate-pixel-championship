export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.innerText = 'Welcome screen';
   return welcomeStepWrapper;
};

const svgNS =
   'https://www.figma.com/file/ld6OY4JTIGDX7GGglSFRVk/Pixel-Championships-x-Nerdbord?type=design&node-id=54600-26265&mode=dev';
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
   const orangeLine = document.createElement('div');
   orangeLine = src('./components/orangeLine.svg');
   return orangeLine;
}

function margins(marginHeader, marginFooter) {
   const marginHeader = document.createElement('div');
   marginHeader = src('./components/marginHeader.svg');
   const marginFooter = document.createElement('div');
   marginFooter = src('./components/marginFooter.svg');
   return marginHeader && marginFooter;
}

function addSwords() {}

orangeButton();
margins(marginHeader, marginFooter);
lineBelowUPC(orangeLine);
createButton(chooseButton, contentButton);
