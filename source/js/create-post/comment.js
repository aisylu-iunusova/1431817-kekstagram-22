import { MAX_LENGTH_COMMENT } from '../const.js';
import { checkFocusInput } from '../util.js';

const imageInputComment = document.querySelector('.text__description');

const getInputCommentFocus = () => {
  return checkFocusInput.isFocus;
};

const onValidateInputComment = () => {
  if (imageInputComment.value.length >= MAX_LENGTH_COMMENT) {
    imageInputComment.setCustomValidity('Максимальное длина комментария 140 символов');
  } else {
    imageInputComment.setCustomValidity('');
  }

  imageInputComment.reportValidity();
};

const onToggleFocusInputComment = () => {
  if (getInputCommentFocus()) {
    checkFocusInput.inactiveFocus();
  } else {
    checkFocusInput.activeFocus();
  }
};

const addEventsForComment = () => {
  imageInputComment.addEventListener('focus', onToggleFocusInputComment);
  imageInputComment.addEventListener('blur', onToggleFocusInputComment);
  imageInputComment.addEventListener('input', onValidateInputComment);
};

const removeEventsForComment = () => {
  imageInputComment.removeEventListener('focus', onToggleFocusInputComment);
  imageInputComment.removeEventListener('blur', onToggleFocusInputComment);
  imageInputComment.removeEventListener('input', onValidateInputComment);
};

export {
  getInputCommentFocus,
  removeEventsForComment,
  addEventsForComment
}