const form = document.querySelector('.header__form');
const input = document.querySelector('.header__input');

const API_KEY = '4c17b0f0e8818fa255c7f299e421fe9a';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key${API_KEY}&query="`;

const fetchData = () => {
    fetch(API_URL)
    .then(response => {
        if(response.ok) {
            return response;
        }
        throw Error (response.statusText)
    })
    .then(response => response.json())
    .then(data => {
        const fetchData = data.results;
        createElement(fetchData);
        
    })
    .catch(error => console.log(error + "something went wrong"))
}



const createElement = (moviesData) => {
    const movies = document.querySelector('.movies');
    moviesData.map(movie => {
        const element = document.createElement('div');
        const image = IMG_URL + movie.poster_path;
        element.classList.add('movie');
        element.innerHTML = ` 
        <img class="movie__image"
                        src=${image}
                        alt=${movie.title}>
                    <div class="movie__info">
                        <p class="movie__title">${movie.title}</p>
                        <span class="movie__rate">${movie.rate}</span>
                    </div>
                    <p class="movie__description">
                        ${movie.overview}
                    </p>
    `;
        movies.appendChild(element);
    })
   
}


const getData = (e) => {
    e.preventDefault();
    const value = input.value;
    fetchData();

    input.value = "";

}


form.addEventListener('submit', getData);

