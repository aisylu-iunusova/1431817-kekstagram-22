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

effectLevelSlider.style = 'display:none;'

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


const changeImage = function (filterName) {
  effectLevel.noUiSlider.on('update', (values, handle) => {

    switch (filterName) {
      case
        'chrome': postImage.style = `filter: grayscale(${values[handle]})`;
        break;
      case
        'sepia': postImage.style = `filter: sepia(${values[handle]})`;
        break;
      case
        'marvin': postImage.style = `filter: invert(${values[handle]}%)`;
        break;
      case
        'phobos': postImage.style = `filter: blur(${values[handle]}px)`;
        break;
      case
        'heat': postImage.style = `filter: brightness(${values[handle]})`;
        break;
    }

    effectLevelSliderValue.value = values[handle];
  });
};


effects.forEach((effect) => {

  effect.addEventListener('change', function () {
    postImage.setAttribute('class', 'img-upload__preview');

    if (this.value === 'none') {
      effectLevelSlider.style = 'display:none;';
    }
    else {
      effectLevelSlider.style = 'display:block;'
      postImage.classList.add(`effects__preview--${this.value}`);

      effectLevel.noUiSlider.updateOptions(
        {
          range: {
            min: sliderOption[this.value].min,
            max: sliderOption[this.value].max,

          },
          start: sliderOption[this.value].start,
          step: sliderOption[this.value].step,

        },
      );
      effectLevel.noUiSlider.set(sliderOption[this.value].max);
      changeImage(this.value);
    }

  });

});



