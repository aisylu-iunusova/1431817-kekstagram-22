import { isEscEvent } from './util.js';
import './image-scale.js';
import './image-effect.js';

const uploadFileInput = document.querySelector('#upload-file');
const imgEditForm = document.querySelector('.img-upload__overlay');
const creatPostCloseButton = document.querySelector('#upload-cancel');

const closeCreatPost = function () {
  imgEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCreatPostEscKeydown);
  uploadFileInput.value = '';
}

const onCreatPostEscKeydown = function (evt) {
  if (isEscEvent(evt)) {
    closeCreatPost();
  }
};

uploadFileInput.addEventListener('change', function () {
  imgEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCreatPostEscKeydown)
});

creatPostCloseButton.addEventListener('click', function () {
  closeCreatPost();
});







