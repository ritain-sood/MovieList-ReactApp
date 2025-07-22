import { useState } from 'react'
import MovieList from './components/MovieList'
import AddMovieForm from './components/AddMovieForm'
import FavouriteList from './components/FavouriteList'

const initialMovies = [
  { id: 1, name: 'Inception', favourite: false },
  { id: 2, name: 'Interstellar', favourite: false },
  { id: 3, name: 'The Dark Knight', favourite: false },
]

function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [search, setSearch] = useState('')

  const handleAddMovie = (name) => {
    setMovies([
      ...movies,
      { id: Date.now(), name, favourite: false }
    ])
  }

  const handleToggleFavourite = (id) => {
    setMovies(movies =>
      movies.map(m =>
        m.id === id ? { ...m, favourite: !m.favourite } : m
      )
    )
  }

  const filteredMovies = movies.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>My Movie List</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: 16, width: '100%' }}
      />
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} onToggleFavourite={handleToggleFavourite} />
      <FavouriteList movies={movies} onToggleFavourite={handleToggleFavourite} />
    </div>
  )
}

export default App