let main = document.querySelector('main')
main.style.backgroundColor = '#212121'
main.style.minHeight = '200vh'

// let container = document.createElement('div')
// container.className = 'container'

// let highlightedMovie = document.createElement('div')
// highlightedMovie.className = 'highlightedMovie'

// let highlightedMovieSubContainer = document.createElement('div')

// let highlightedMoviePosterAndTitle = document.createElement('div')

// let highlightedMoviePoster = document.createElement('img')
// highlightedMoviePoster.src = '/Movie-Review-Website/assets/kgf highlight.jpg'

// main.appendChild(container)
// container.appendChild(highlightedMovie)
// highlightedMovie.appendChild(highlightedMovieSubContainer)
// highlightedMovieSubContainer.appendChild(highlightedMoviePosterAndTitle)
// highlightedMoviePosterAndTitle.appendChild(highlightedMoviePoster)

const movieData = {
    id: 1,
    title: 'KGF Chapter-2',
    posterUrl: '/Movie-Review-Website/assets/kgf highlight.jpg',
    plot: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes, while the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy",
    rating: '9/10'
};

function createHighlightedMovie(data) {
    const highlightedMovie = document.createElement('div')
    highlightedMovie.className = 'highlighted-movie'

    highlightedMovie.innerHTML = `
                <div class="highlighted-movie-subcontainer">
                    <div class="highlighted-movie-poster-and-title">
                        <img src="${data.posterUrl}" class="highlighted-movie-poster"
                            alt="${data.title}">

                    </div>

                    <div class="highlighted-movie-explanation">

                        <div class="highlighted-movie-title-and-rating">
                            <span class="highlighted-movie-title">${data.title}</span>

                            <div class="highlighted-movie-rating">
                                <span>${data.rating}</span>
                            </div>
                        </div>
                        <p class="highlighted-movie-explanation-text">
                            ${data.plot}

                        </p>

                        <div class="btn-for-readmore-and-watchlist">
                            <button class="highlighted-movie-explanation-readmore">
                                Read More
                            </button>
    
                            <button class="highlighted-movie-explanation-readmore">
                                Add to watchlist
                            </button>

                        </div>

                    </div>
                
        `
    return highlightedMovie;
}

main.appendChild(createHighlightedMovie(movieData))


