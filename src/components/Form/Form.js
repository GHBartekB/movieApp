const form = document.querySelector('.header__form');
const input = document.querySelector('.header__input');

const API_KEY = '4c17b0f0e8818fa255c7f299e421fe9a';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key${API_KEY}&query="`;


const getData = (e) => {
    e.preventDefault();
    const value = input.value;
    console.log(value);
    input.value = "";

}

form.addEventListener('submit', getData);

console.log(API_URL)
