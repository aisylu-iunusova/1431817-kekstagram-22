import { MIN_SCALE, MAX_SCALE, STEP_SCALE } from './const.js'

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const postImage = document.querySelector('.img-upload__preview');

let scaleValue = 100;

scaleControlSmaller.addEventListener('click', () => {
  if (scaleValue > MIN_SCALE && scaleValue <= MAX_SCALE) {
    scaleValue -= STEP_SCALE;
  }
  scaleControlValue.value = `${scaleValue}%`;
  postImage.style = `transform:scale(${scaleValue / 100})`;
});


scaleControlBigger.addEventListener('click', () => {
  if (scaleValue >= MIN_SCALE && scaleValue < MAX_SCALE) {
    scaleValue += STEP_SCALE;
  }
  scaleControlValue.value = `${scaleValue}%`;
  postImage.style = `transform:scale(${scaleValue / 100})`;
});

