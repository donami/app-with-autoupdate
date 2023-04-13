import image from './src/images/my-image.png';
import image2 from './src/images/dog.jpg';

console.log('1.0.16');

import('./dynamic-chunk').then((module) => {
  console.log('module', module);
});

const wrapper = document.createElement('div');

const imgEl = document.createElement('img');
const imgEl2 = document.createElement('img');

imgEl.src = image;
imgEl2.src = image2;

wrapper.appendChild(imgEl);
wrapper.appendChild(imgEl2);
document.body.appendChild(wrapper);
