import { MAX_LENGTH_COMMENT } from '../const.js';
import { checkFocusInput } from '../util.js';

const imageInputComment = document.querySelector('.text__description');

const getInputCommentFocus = () => {
  return checkFocusInput.isFocus;
};

const validateInputComment = () => {
  if (imageInputComment.value.length >= MAX_LENGTH_COMMENT) {
    imageInputComment.setCustomValidity('Максимальное длина комментария 140 символов');
  } else {
    imageInputComment.setCustomValidity('');
  }

  imageInputComment.reportValidity();
};

const addEventsForComment = () => {
  imageInputComment.addEventListener('focus', checkFocusInput.activeFocus);
  imageInputComment.addEventListener('blur', checkFocusInput.inactiveFocus);
  imageInputComment.addEventListener('input', validateInputComment);
};

const removeEventsForComment = () => {
  imageInputComment.removeEventListener('focus', checkFocusInput.activeFocus);
  imageInputComment.removeEventListener('blur', checkFocusInput.inactiveFocus);
  imageInputComment.removeEventListener('input', validateInputComment);
};

export {
  getInputCommentFocus,
  removeEventsForComment,
  addEventsForComment
}