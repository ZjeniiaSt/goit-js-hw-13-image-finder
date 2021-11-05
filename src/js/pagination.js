import ImgApiServise from './api-service';
import imagesMarkup from '../templates/images_markup.hbs';
import getRefs from './getRefs';

const refs = getRefs();
const imgApiServise = new ImgApiServise();

refs.searchForm.addEventListener('input', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  imgApiServise.searchQuery = event.currentTarget.elements.query.value;
  imgApiServise.resetPage();
  imgApiServise.fetchArticles().then(hits => {
    clearArticlesContainer();
    appendArticlesleMarkup(hits);
  });
}

function onLoadMore() {
  imgApiServise.fetchArticles();
}

function appendArticlesleMarkup(hits) {
  refs.cardContainer.insertAdjacentHTML('beforeend', imagesMarkup(hits));
}

function clearArticlesContainer() {
  refs.cardContainer.innerHTML = '';
}
