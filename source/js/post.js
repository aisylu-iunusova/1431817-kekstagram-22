import { isEscEvent } from './util.js';
import { MAX_COMMENT_COUNT } from './const.js';

const postModal = document.querySelector('.big-picture');
const postModalCloseButton = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentList = postModal.querySelector('.social__comments');
const socialComment = socialCommentList.querySelector('.social__comment');
const visibleCommentsCount = document.querySelector('.visible-comments-count');

let comments = [];

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePostModal();
  }
};

const clearComments = (parent) => {
  for (let i = parent.children.length - 1; i >= 0; i--) {
    const child = parent.children[i];
    socialCommentList.removeChild(child);
  }
};

const updateVisibleCommentsCount = () => {
  visibleCommentsCount.textContent = socialCommentList.getElementsByTagName('li').length;
};

const renderComment = (comment) => {
  const newSocialComment = socialComment.cloneNode(true);
  newSocialComment.querySelector('.social__picture').src = comment.avatar;
  newSocialComment.querySelector('.social__text').textContent = comment.message;
  newSocialComment.querySelector('.social__picture').alt = comment.name;
  socialCommentList.appendChild(newSocialComment);
};

const renderComments = () => {
  if (comments.length <= MAX_COMMENT_COUNT) {
    commentsLoader.classList.add('hidden');
  }
  comments.splice(0, MAX_COMMENT_COUNT).forEach(renderComment);
  updateVisibleCommentsCount();
};

const onRenderComments = () => {
  renderComments();
};

const onClosePostModal = () => {
  closePostModal();
}

const renderPost = (post) => {
  postModal.querySelector('.big-picture__img img').src = post.url;
  postModal.querySelector('.likes-count').textContent = post.likes;
  postModal.querySelector('.comments-count').textContent = post.comments.length;
  postModal.querySelector('.social__caption').textContent = post.description;

  comments = [...post.comments];
  renderComments();
};

const openPostModal = (post) => {
  document.body.classList.add('modal-open');
  postModal.classList.remove('hidden');

  clearComments(socialCommentList);
  renderPost(post);

  commentsLoader.addEventListener('click', onRenderComments);
  postModalCloseButton.addEventListener('click', onClosePostModal);
  document.addEventListener('keydown', onModalEscKeydown);
};

const closePostModal = () => {
  document.body.classList.remove('modal-open');
  postModal.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  commentsLoader.removeEventListener('click', onRenderComments);
  postModalCloseButton.removeEventListener('click', onClosePostModal);
  document.removeEventListener('keydown', onModalEscKeydown);
};

export {
  openPostModal
}