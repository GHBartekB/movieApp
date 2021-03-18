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
        const movieTitle = fetchData[0].title;
        const movieRate = fetchData[0].vote_average; 
        const movieOverview = fetchData[0].overview;
        const movieImageSrc = IMG_URL + fetchData[0].poster_path;
        console.log(fetchData);
        console.log(movieTitle);
        console.log(movieRate);
        console.log(movieOverview);
        console.log(movieImageSrc);
        createElement(movieTitle,movieRate,movieOverview,movieImageSrc);
    })
    .catch(error => console.log(error + "something went wrong"))
}

const createElement = (title = 'test', rate = '10', overview ="some text", image) => {
    const movies = document.querySelector('.movies');
    console.log(movies);
    const element = document.createElement('div');
    element.classList.add('movie');
    element.innerHTML = ` 
    <img class="movie__image"
                    src=${image}
                    alt="test photo">
                <div class="movie__info">
                    <p class="movie__title">${title}</p>
                    <span class="movie__rate">${rate}</span>
                </div>
                <p class="movie__description">
                    ${overview}
                </p>
`;
    movies.appendChild(element);
}


const getData = (e) => {
    e.preventDefault();
    const value = input.value;
    createElement();
    fetchData();

    input.value = "";

}


form.addEventListener('submit', getData);

