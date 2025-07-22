import MovieCard from "./MovieCard";

function MovieList({movies, onToggleFavourite}){
    return (
        <div>
            <h2>All Movies</h2>
            {movies.length === 0 ? (
                <p>No Movie Found.</p>
            ):(
                movies.map(movie => (
                    <MovieCard key={movie.id}
                    movie={movie}
                    onToggleFavourite={onToggleFavourite}
                    />
                ))
            )} 
        </div>
    )
}


export default MovieList;