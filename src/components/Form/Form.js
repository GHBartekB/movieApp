import {API_URL, IMG_URL, SEARCH_URL} from '../../tools/data.js';

const form = document.querySelector('.header__form');
const input = document.querySelector('.header__input');

const fetchData = (URL) => {
    fetch(URL)
    .then(response => {
        if(response.ok) {
            return response;
        }
        throw Error (response.statusText)
    })
    .then(response => response.json())
    .then(data => {
        const moviesData = data.results;
        createElement(moviesData);
        
    })
    .catch(error => console.log(error + " something went wrong"))
}

fetchData(API_URL);


const createElement = (moviesData) => {
    const movies = document.querySelector('.movies');
    movies.innerHTML = '';
    const movieEl = moviesData.filter(movieEl => movieEl.vote_average > 0 && movieEl.poster_path);
    movieEl.map(movie => {
        const element = document.createElement('div');
        const image = IMG_URL + movie.poster_path;
        const {title,vote_average, overview} = movie;
        element.classList.add('movie');
        element.innerHTML = ` 
        <img class="movie__image"
                        src=${image}
                        alt=${title}>
                    <div class="movie__info">
                        <p class="movie__title">${title}</p>
                        <span class="movie__rate">${vote_average}</span>
                    </div>
                    <p class="movie__description">
                        ${overview}
                    </p>
    `;
        movies.appendChild(element);
    })
   
}


const getData = (e) => {
    e.preventDefault();
    const value = input.value;
    const URL = SEARCH_URL + value;
    fetchData(URL);

    input.value = "";

}


form.addEventListener('submit', getData);

