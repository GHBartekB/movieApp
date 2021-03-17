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
        console.log(fetchData);
    })
    .catch(error => console.log(error + "something went wrong"))
}

const createElement = (title = 'test', rate = '10', overview ="some text") => {
    const movies = document.querySelector('.movies');
    console.log(movies);
    const element = document.createElement('div');
    element.classList.add('movie');
    element.innerHTML = ` 
    <img class="movie__image"
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80"
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

