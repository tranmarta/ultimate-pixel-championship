import { initWizard } from '../wizard/wizard.js';

export const wizardScreen = () => {
   const wizardScreenWrapper = document.createElement('div');
   const wizard = initWizard();
   wizardScreenWrapper.append(wizard);
   return wizardScreenWrapper;
};

const svgNS = './assets/choose.svg';
const svg = document.createElementNS(svgNS, 'svg');

function createButton() {
   const chooseButton = document.createElement('button');
   const chooseFighter = document.innerText('Choose');
   svg.appendChild(chooseButton && chooseFighter);
   document.body.appendChild(svg);
   return chooseButton && chooseFighter;
}

createButton();

function chooseYourFighter() {
   const h3Text = document.createElement('h3');
   h3Text.innerText = 'Choose your fighter';
   document.body.append(h3Text);
   return h3Text;
}

chooseYourFighter();
