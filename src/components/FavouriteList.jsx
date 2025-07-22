import MovieCard from './MovieCard'

function FavouriteList({ movies, onToggleFavourite }) {
  const favourites = movies.filter(m => m.favourite)
  return (
    <div>
      <h2>Favourite Movies</h2>
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        favourites.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleFavourite={onToggleFavourite}
          />
        ))
      )}
    </div>
  )
}

export default FavouriteList