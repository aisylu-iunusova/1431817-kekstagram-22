import { MAX_LENGTH_HASHTAG } from '../const.js';

const imageHashtagInput = document.querySelector('.text__hashtags');
let isFocus = false;

const getHashtags = () => {
  const value = imageHashtagInput.value;
  const hashtags = value.toUpperCase().split(' ').filter(arrayHashtag => arrayHashtag !== '');

  return hashtags;
};

const getInputHashtagFocus = () => {
  return isFocus;
};

imageHashtagInput.addEventListener('focus', () => {
  isFocus = true;
});

imageHashtagInput.addEventListener('blur', () => {
  isFocus = false;
});

const checkDuplicateElement = (array) => {
  return array.some((element, index) => array.lastIndexOf(element) !== index);
};


imageHashtagInput.addEventListener('input', () => {
  imageHashtagInput.value = imageHashtagInput.value.replace('  ', ' ');

  const hashtags = getHashtags();

  if (hashtags.length > 5) {
    imageHashtagInput.setCustomValidity('Максимальное количество хештегов 5');
    return;
  } else if (hashtags.length === 0) {
    imageHashtagInput.setCustomValidity('');
    return;
  }

  hashtags.reverse().find(hashtag => {
    if (hashtag.length >= MAX_LENGTH_HASHTAG) {
      imageHashtagInput.setCustomValidity('Максимальное длина одного хештега 20 символов');
      return true;
    } else if (hashtag[0] !== '#') {
      imageHashtagInput.setCustomValidity('Хештег начинается с символа #');
      return true;
    } else if (hashtag === '#') {
      imageHashtagInput.setCustomValidity('Хештег не может состоять только из символа # (решетка)');
      return true;
    } else if (hashtags.length > 1 && checkDuplicateElement(hashtags)) {
      imageHashtagInput.setCustomValidity('Один и тот же хештег не может быть использован дважды');
      return true;
    } else if (!/^[0-9A-Za-z]+$/.test(hashtag.slice(1))) {
      imageHashtagInput.setCustomValidity('Хештег должен состоять только из букв и цифр');
      return true;
    } else {
      imageHashtagInput.setCustomValidity('');
      return false;
    }
  });

  imageHashtagInput.reportValidity();

})

export {
  getInputHashtagFocus
}