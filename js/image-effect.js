import { SLIDER_HIDDEN, SLIDER_VISIBLE } from './const.js'

const postImage = document.querySelector('.img-upload__preview');
const effects = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.effect-level__slider')
const effectLevelSlider = document.querySelector('.img-upload__effect-level');
const effectLevelSliderValue = document.querySelector('.effect-level__value');

const sliderOption = {
  chrome: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    min: 0,
    max: 100,
    step: 1,
  },
  phobos: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  heat: {
    min: 0,
    max: 3,
    step: 0.1,
  },
};

effectLevelSlider.setAttribute('style', SLIDER_HIDDEN);

window.noUiSlider.create(effectLevel, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const changeImage = (filterName) => {
  effectLevel.noUiSlider.on('update', (values, handle) => {

    switch (filterName) {
      case
        'chrome': postImage.setAttribute('style', `filter: grayscale(${values[handle]})`);
        break;
      case
        'sepia': postImage.setAttribute('style', `filter: sepia(${values[handle]})`);
        break;
      case
        'marvin': postImage.setAttribute('style', `filter: invert(${values[handle]}%)`);
        break;
      case
        'phobos': postImage.setAttribute('style', `filter: blur(${values[handle]}px)`);
        break;
      case
        'heat': postImage.setAttribute('style', `filter: brightness(${values[handle]})`);
        break;
      default:
        postImage.removeAttribute('style');
    }

    effectLevelSliderValue.value = values[handle];
  });
};

export const resetEffect = () => {
  effectLevelSlider.setAttribute('style', SLIDER_HIDDEN);
  effectLevelSliderValue.value = '';
  postImage.setAttribute('class', 'img-upload__preview');
  postImage.removeAttribute('style');
}

const addEffect = (effectName) => {
  effectLevelSlider.setAttribute('style', SLIDER_VISIBLE)
  postImage.classList.add(`effects__preview--${effectName}`);

  effectLevel.noUiSlider.updateOptions(
    {
      range: {
        min: sliderOption[effectName].min,
        max: sliderOption[effectName].max,

      },
      start: sliderOption[effectName].start,
      step: sliderOption[effectName].step,

    },
  );
  effectLevel.noUiSlider.set(sliderOption[effectName].max);
};

effects.forEach((effect) => {

  effect.addEventListener('change', () => {
    postImage.setAttribute('class', 'img-upload__preview');

    if (effect.value === 'none') {
      resetEffect()
    } else {
      addEffect(effect.value);
    }
    changeImage(effect.value);
  });

});




