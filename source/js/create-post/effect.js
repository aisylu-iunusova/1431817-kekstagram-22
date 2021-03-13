import { SLIDER_HIDDEN, SLIDER_VISIBLE } from '../const.js'
import { resetScale } from './scale.js'

const postImage = document.querySelector('.img-upload__preview img');
const effects = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.effect-level__slider');
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

effectLevelSlider.style.display = SLIDER_HIDDEN;

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

const changeEffect = (filterName) => {
  effectLevel.noUiSlider.on('update', (values, handle) => {
    switch (filterName) {
      case
        'chrome': postImage.style.filter = `grayscale(${values[handle]})`;
        break;
      case
        'sepia': postImage.style.filter = `sepia(${values[handle]})`;
        break;
      case
        'marvin': postImage.style.filter = `invert(${values[handle]}%)`;
        break;
      case
        'phobos': postImage.style.filter = `blur(${values[handle]}px)`;
        break;
      case
        'heat': postImage.style.filter = `brightness(${values[handle]})`;
        break;
      default:
        postImage.style.filter = 'none';
    }

    effectLevelSliderValue.setAttribute('value', values[handle]);
  });
};

const resetEffect = () => {
  effectLevelSlider.style.display = SLIDER_HIDDEN;
  effectLevelSliderValue.value = '';
  postImage.removeAttribute('class');
  postImage.removeAttribute('style');
};

const addEffect = (effectName) => {
  effectLevelSlider.style.display = SLIDER_VISIBLE;
  postImage.classList.add(`effects__preview--${effectName}`);

  effectLevel.noUiSlider.updateOptions({
    range: {
      min: sliderOption[effectName].min,
      max: sliderOption[effectName].max,
    },
    start: sliderOption[effectName].start,
    step: sliderOption[effectName].step,
  });

  effectLevel.noUiSlider.set(sliderOption[effectName].max);
};

const changeImageEffect = (effect) => {
  postImage.removeAttribute('class');
  resetScale();

  if (effect.value === 'none') {
    resetEffect()
  } else {
    addEffect(effect.value);
  }

  changeEffect(effect.value);
};

const addEventsForEffects = () => {
  effects.forEach((effect) => {
    effect.addEventListener('change', changeImageEffect.bind(this, effect));
  });
};

const removeEventsForEffects = () => {
  effects.forEach((effect) => {
    effect.removeEventListener('change', changeImageEffect.bind(this, effect));
  });
};

export {
  resetEffect,
  addEventsForEffects,
  removeEventsForEffects
}

