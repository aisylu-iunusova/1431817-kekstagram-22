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

const onZoomInImage = () => {
  if (scaleValue >= MIN_SCALE && scaleValue < MAX_SCALE) {
    scaleValue += STEP_SCALE;
  }
  scalingImage(scaleValue);
};

const onZoomOutImage = () => {
  if (scaleValue > MIN_SCALE && scaleValue <= MAX_SCALE) {
    scaleValue -= STEP_SCALE;
  }
  scalingImage(scaleValue);
};

const addEventsForScale = () => {
  scaleControlSmaller.addEventListener('click', onZoomOutImage);
  scaleControlBigger.addEventListener('click', onZoomInImage);
};

const removeEventsForScale = () => {
  scaleControlSmaller.removeEventListener('click', onZoomOutImage);
  scaleControlBigger.removeEventListener('click', onZoomInImage);
};

export {
  resetScale,
  addEventsForScale,
  removeEventsForScale
}
