import { MIN_SCALE, MAX_SCALE, STEP_SCALE } from '../const.js'

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const postImage = document.querySelector('.img-upload__preview img');

let scaleValue = MAX_SCALE;

const scalingImage = (scale) => {
  scaleControlValue.setAttribute('value', `${scale}%`);
  postImage.style.transform = `scale(${scale / MAX_SCALE})`;
};

const resetScale = () => {
  scalingImage(MAX_SCALE);
  scaleValue = MAX_SCALE;
};

const zoomInImage = () => {
  if (scaleValue >= MIN_SCALE && scaleValue < MAX_SCALE) {
    scaleValue += STEP_SCALE;
  }
  scalingImage(scaleValue);
};

const zoomOutImage = () => {
  if (scaleValue > MIN_SCALE && scaleValue <= MAX_SCALE) {
    scaleValue -= STEP_SCALE;
  }
  scalingImage(scaleValue);
};

const addEventsForScale = () => {
  scaleControlSmaller.addEventListener('click', zoomOutImage);
  scaleControlBigger.addEventListener('click', zoomInImage);
};

const removeEventsForScale = () => {
  scaleControlSmaller.removeEventListener('click', zoomOutImage);
  scaleControlBigger.removeEventListener('click', zoomInImage);
};

export {
  resetScale,
  addEventsForScale,
  removeEventsForScale
}
