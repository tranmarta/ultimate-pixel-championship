export const chooseFighterStep = () => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.innerText = 'Choose fighter';

   return chooseFighterStepWrapper;
};

const route = (event) => {
   event = event || window.event;
   event.preventDefault();
   window.history.pushState({}, '', event.target.href);
   handleLocation();
};

const routes = {
   '/welcome': 'jsscreenswelcome-screen.js',
   '/wizard': 'jsscreenswizard-screen.js',
};

const handleLocation = async () => {
   const path = window.location.pathname;
   const html = await fetch(route).then((data) => data.text());
   document.getElementById('welcome').innerHTML = html;
};

window.route = route;
