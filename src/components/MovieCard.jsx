


function MovieCard({movie,onToggleFavourite}){
    return (
        <div style={{border: '1px solid #ccc', margin:'8px',padding:'8px'}}>
            <span>{movie.name}</span>
            <button onClick={()=> onToggleFavourite(movie.id)}>
                {movie.favourite ? 'Unfavourite' : 'Favourite'}
            </button>
        </div>
    )
}


export default MovieCard;