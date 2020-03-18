let searchLink = document.querySelector('.search-link');
let search = document.querySelector('.search');

searchLink.addEventListener('click', () => {
    search.classList.toggle('search__visible');
});
    