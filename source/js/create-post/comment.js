import { MAX_LENGTH_COMMENT } from '../const.js'

const imageInputComment = document.querySelector('.text__description');
let isFocus = false;

const getInputCommentFocus = () => {
  return isFocus;
};

imageInputComment.addEventListener('focus', () => {
  isFocus = true;
});


imageInputComment.addEventListener('blur', () => {
  isFocus = false;
});

imageInputComment.addEventListener('input', () => {
  if (imageInputComment.value.length >= MAX_LENGTH_COMMENT) {
    imageInputComment.setCustomValidity('Максимальное длина комментария 140 символов');
  } else {
    imageInputComment.setCustomValidity('');
  }

  imageInputComment.reportValidity();
});

export {
  getInputCommentFocus
}