import { MAX_LENGTH_HASHTAG } from './const.js';

const imageHashtagInput = document.querySelector('.text__hashtags');
let isFocus = false;

const getHashtags = () => {
  const value = imageHashtagInput.value;
  const hashtags = value.toUpperCase().split(' ', 5).filter(arrayHashtag => arrayHashtag !== '');

  return hashtags;
};

export const getInputHashtagFocus = () => {
  return isFocus;
};

imageHashtagInput.addEventListener('focus', () => {
  isFocus = true;
});


imageHashtagInput.addEventListener('blur', () => {
  isFocus = false;
});

const checkDuplicateElement = (array) => {
  return array.some((element, index) => array.indexOf(element) !== index);
};


const validateHashtags = (hashtags) => {
  return hashtags.some((hashtag) => !/^[0-9A-Za-z]+$/.test(hashtag.slice(1)))
}

imageHashtagInput.addEventListener('input', () => {
  imageHashtagInput.value = imageHashtagInput.value.replace('  ', ' ');

  const hashtags = getHashtags();

  if (hashtags.length === 5) {
    imageHashtagInput.value = hashtags.join(' ');
    imageHashtagInput.setCustomValidity('Максимальное количество хештегов 5');
  } else if (validateHashtags(hashtags)) {
    imageHashtagInput.setCustomValidity('Хештег должен состоять только из букв и цифр');
  } else {
    imageHashtagInput.setCustomValidity('');
  }

  hashtags.forEach(hashtag => {
    if (hashtag.length >= MAX_LENGTH_HASHTAG) {
      imageHashtagInput.setCustomValidity('Максимальное длина одного хештега 20 символов');
    } else if (hashtag[0] !== '#') {
      imageHashtagInput.setCustomValidity('Хештег начинается с символа #')
    } else if (hashtag === '#') {
      imageHashtagInput.setCustomValidity('Хештег не может состоять только из символа # (решетка)')
    } else if (hashtags.length > 1 && checkDuplicateElement(hashtags)) {
      imageHashtagInput.setCustomValidity('Один и тот же хештег не может быть использован дважды');
    }
  });

  imageHashtagInput.reportValidity();
})

