const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const postImage = document.querySelector('.img-upload__preview');

let scaleValue = 100;

scaleControlSmaller.addEventListener('click', function () {
  if (scaleValue > 25 && scaleValue <= 100) {
    scaleValue -= 25;
  }
  scaleControlValue.value = `${scaleValue}%`;
  postImage.style = `transform:scale(${scaleValue / 100})`;
});


scaleControlBigger.addEventListener('click', function () {
  if (scaleValue >= 25 && scaleValue < 100) {
    scaleValue += 25;
  }
  scaleControlValue.value = `${scaleValue}%`;
  postImage.style = `transform:scale(${scaleValue / 100})`;
});

