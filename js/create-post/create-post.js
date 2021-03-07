import { isEscEvent } from '../util.js';
import {scaleReset} from './scale.js';
import { resetEffect } from './effect.js';
import { getInputHashtagFocus } from './hashtag.js';
import { getInputCommentFocus } from './comment.js';
import { sendPost } from '../api.js';

const uploadFileInput = document.querySelector('#upload-file');
const imgEditForm = document.querySelector('.img-upload__overlay');
const creatPostCloseButton = document.querySelector('#upload-cancel');
const creatPostForm = document.querySelector('.img-upload__form');
const mainTag = document.querySelector('main')
const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const successMessageCloseButton = successMessageTemplate.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const errorMessageCloseButton = errorMessageTemplate.querySelector('.error__button');

const closeCreatePost = () => {
  imgEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCreatPostEscKeydown);
  uploadFileInput.value = '';
  document.querySelector('.img-upload__form').reset();
  resetEffect();
  scaleReset();
}

const onCreatPostEscKeydown = (evt) => {

  if (isEscEvent(evt) && !getInputHashtagFocus() && !getInputCommentFocus()) {
    closeCreatePost();
  }
};

uploadFileInput.addEventListener('change', () => {
  imgEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCreatPostEscKeydown)
});

creatPostCloseButton.addEventListener('click', () => {
  closeCreatePost();
});

creatPostForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendPost(() => {
    creatPostForm.reset();
    closeCreatePost();
    showSuccessMessage();
  }, () => {
    showErrorMessage();
    closeCreatePost();
  }, new FormData(evt.target))
})

const showSuccessMessage = () => {
  mainTag.appendChild(successMessageTemplate);
  document.addEventListener('keydown', successMessageEscKeydown);
};

const closeSuccessMessage = () => {
  mainTag.removeChild(successMessageTemplate);
  document.removeEventListener('keydown', successMessageEscKeydown);
};

successMessageCloseButton.addEventListener('click', () => {
  closeSuccessMessage();
});

const successMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

successMessageTemplate.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target != successMessageTemplate) { return; }
  closeSuccessMessage();
});

const showErrorMessage = () => {
  mainTag.appendChild(errorMessageTemplate);
  document.addEventListener('keydown', errorMessageEscKeydown);
};

const closeErrorMessage = () => {
  mainTag.removeChild(errorMessageTemplate);
  document.removeEventListener('keydown', errorMessageEscKeydown);
};

errorMessageCloseButton.addEventListener('click', () => {
  closeErrorMessage();
});

const errorMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

errorMessageTemplate.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target != errorMessageTemplate) { return; }
  closeErrorMessage();
});
