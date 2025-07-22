import {useState} from 'react';

const AddMovieForm =({onAddMovie})=>{

    const [name,setName]=useState('');

    const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      onAddMovie(name)
      setName('')
    }
  }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Movie Name' value={name} onChange={e=>setName(e.target.value)}/>

            <button type='submit'>Add Movie</button>
        </form>
    )

}

export default AddMovieForm;