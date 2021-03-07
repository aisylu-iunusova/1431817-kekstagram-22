'use strict';

import { renderPostGallery } from './post-gallery.js';
import './create-post/create-post.js';
import { getPosts } from './api.js';
import { showErrorMessage } from './util.js'

getPosts((posts) => {
  renderPostGallery(posts);
}, () => {
  showErrorMessage('Произошла ошибка при загрузке данных')
});


