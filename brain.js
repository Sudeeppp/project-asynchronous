const searchForm = document.querySelector('form');
const inputBox = document.querySelector('.inputbox');
const moviecontainer= document.querySelector('.movie-container')

const getMovieinfo =async(movie) => {
    const myapikey = '6c47840b'
    const url = `https://www.omdbapi.com/?apikey=${myapikey}&t=${movie}`;
    const response = await fetch(url);
    console.log(response);
    const data =await response.json();
    // console.log(data);

    showmoviedata(data);

}

const showmoviedata = (data) => {
    moviecontainer.innerHTML = "";
    moviecontainer.classList.remove("nobackgrd")
    const { Title, imdbRating, Genre, Released, RunTime, Actors, Poster } = data;
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info');
    movieElement.innerHTML = `<h2>${Title}</h2>
                               <p>Rating:${imdbRating}</p>`;
    
    const moviegenrelement = document.createElement('div');
    moviegenrelement.classList.add('movie-genre');
    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerText = element;
        moviegenrelement.appendChild(p);
    }
    )

    movieElement.appendChild(moviegenrelement);

    movieElement.innerHTML += `<p>Released Data:${Released} </p>
    <p>Duration: ${RunTime}</p>
    <p>Cast: ${Actors}`;

    const movieposter = document.createElement('div');
    movieposter.classList.add('movie-poster');
    movieposter.innerHTML = `<img src="${Poster}"/>`
    
    moviecontainer.appendChild(movieElement);
    moviecontainer.appendChild(movieposter);

}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const moviename = inputBox.value.trim();
    
    if (moviename!='') {
        getMovieinfo(moviename)
    }
    // console.log(moviename);
    // const finalmovie = moviename.trim();
    // console.log(finalmovie);
    

})



