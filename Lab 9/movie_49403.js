$(document).ready(function () {
    $.ajax({
        url: "https://yts.mx/api/v2/movie_details.json?movie_id=49403",
        type: "GET",
        success: function (res) {
            console.log(res);
            $("main").append(
                `<div class="movie">
                  <img src="${res.data.movie.medium_cover_image}" alt="${res.data.movie.title}">
                  </div>
                  <div class="movie-info">
                  <h3>${res.data.movie.title}</h3>
                  <p>${res.data.movie.year}</p>
                  <p>${res.data.movie.description_full}</p>
                  <p>Rating: ${res.data.movie.rating}</p>
                    <p>Runtime: ${res.data.movie.runtime} minutes</p>
                    <p>Genres: ${res.data.movie.genres}</p>
                    <p>Language: ${res.data.movie.language}</p>
                    <p>Country: ${res.data.movie.country}</p>
                    <p>Cast: ${res.data.movie.cast}</p>
                    <p>Directors: ${res.data.movie.directors}</p>
                    <p>Writers: ${res.data.movie.writers}</p>
                    <p>IMDB Code: ${res.data.movie.imdb_code}</p>
                    <p>IMDB Rating: ${res.data.movie.imdb_rating}</p>
                    <p>IMDB Votes: ${res.data.movie.imdb_votes}</p>
                    <p>Youtube Trailer: ${res.data.movie.yt_trailer_code}</p>
                    <p>Download: ${res.data.movie.torrents}</p>
                  </div>`
            );
        }
    });
});