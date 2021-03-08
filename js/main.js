'use strict';

import { renderGallery } from './gallery.js';
import './create-post/create-post.js';
import { getPosts } from './api.js';
import { showErrorMessage } from './util.js'
import { renderFilter } from './filter.js';

getPosts((posts) => {
  renderGallery(posts);
  renderFilter(posts);
}, () => {
  showErrorMessage('Произошла ошибка при загрузке данных')
});
