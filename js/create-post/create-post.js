import { isEscEvent } from '../util.js';
import './scale.js';
import { resetEffect } from './effect.js';
import { getInputHashtagFocus } from './hashtag.js';
import { getInputCommentFocus } from './comment.js';

const uploadFileInput = document.querySelector('#upload-file');
const imgEditForm = document.querySelector('.img-upload__overlay');
const creatPostCloseButton = document.querySelector('#upload-cancel');

const closeCreatePost = () => {
  imgEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCreatPostEscKeydown);
  uploadFileInput.value = '';
  document.querySelector('.img-upload__form').reset();
}

const onCreatPostEscKeydown = (evt) => {

  if (isEscEvent(evt) && !getInputHashtagFocus() && !getInputCommentFocus()) {
    closeCreatePost();
  }
};

uploadFileInput.addEventListener('change', function () {
  imgEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCreatPostEscKeydown)
});

creatPostCloseButton.addEventListener('click', function () {
  closeCreatePost();
  resetEffect();
});









