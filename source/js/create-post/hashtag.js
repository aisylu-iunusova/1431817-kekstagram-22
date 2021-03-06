import { MAX_LENGTH_HASHTAG } from '../const.js';
import { checkFocusInput } from '../util.js';

const imageHashtagInput = document.querySelector('.text__hashtags');

const checkDuplicateElement = (array) => {
  return array.some((element, index) => array.lastIndexOf(element) !== index);
};

const getHashtags = () => {
  const value = imageHashtagInput.value;
  const hashtags = value.toUpperCase().split(' ').filter(arrayHashtag => arrayHashtag !== '');

  return hashtags;
};

const getInputHashtagFocus = () => {
  return checkFocusInput.isFocus;
};

const onValidateHashtagInput = () => {
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
    }

    imageHashtagInput.setCustomValidity('');
    return false;
  });

  imageHashtagInput.reportValidity();
};

const onToggleFocusInputHashtag = () => {
  if (getInputHashtagFocus()) {
    checkFocusInput.inactiveFocus();
  } else {
    checkFocusInput.activeFocus();
  }
};

const addEventsForHashtag = () => {
  imageHashtagInput.addEventListener('focus', onToggleFocusInputHashtag);
  imageHashtagInput.addEventListener('blur', onToggleFocusInputHashtag);
  imageHashtagInput.addEventListener('input', onValidateHashtagInput);
};

const removeEventsForHashtag = () => {
  imageHashtagInput.removeEventListener('focus', onToggleFocusInputHashtag);
  imageHashtagInput.removeEventListener('blur', onToggleFocusInputHashtag);
  imageHashtagInput.removeEventListener('input', onValidateHashtagInput);
};

export {
  getInputHashtagFocus,
  addEventsForHashtag,
  removeEventsForHashtag
}