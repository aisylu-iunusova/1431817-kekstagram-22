import { MIN_SCALE, MAX_SCALE, STEP_SCALE } from '../const.js'

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const postImage = document.querySelector('.img-upload__preview img');

let scaleValue = 100;

const scalingImage = (scale) => {
  scaleControlValue.value = `${scale}%`;
  postImage.style = `transform:scale(${scale / 100})`;
};

scaleControlSmaller.addEventListener('click', () => {
  if (scaleValue > MIN_SCALE && scaleValue <= MAX_SCALE) {
    scaleValue -= STEP_SCALE;
  }
  scalingImage(scaleValue);
});


scaleControlBigger.addEventListener('click', () => {
  if (scaleValue >= MIN_SCALE && scaleValue < MAX_SCALE) {
    scaleValue += STEP_SCALE;
  }
  scalingImage(scaleValue);
});

const resetScale = () => {
  scalingImage(100);
  scaleValue = 100;
};

export {
  resetScale
}
