import { Link, useOutletContext } from "react-router-dom";
import { useState } from 'react';
import ArtistDetail from "./ArtistDetail";

export default function ArtistList() {

  const [selectedOption, setSelectedOption] = useState('artist');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let { favoriteArtists, addArtist } = useOutletContext();

  function submitForm(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let newArtist = Object.fromEntries(formData);
    addArtist(newArtist);
    form.reset();
  }

  return <>
    <h2>Favorite artists</h2>
    {favoriteArtists.map(({ id, firstName, lastName, bandName }) =>
      <Link key={id} className={bandName ? 'band' : 'artist'} to={'/artist-detail/' + id}>
        <button>Edit</button>
        <button>Remove</button>
        {bandName ?
          <p>{bandName}</p> :
          <p>{firstName} {lastName}</p>
        }
      </Link>
    )}
    {/* Add artist form */}
    <form onSubmit={submitForm}>
      <label>
        {/* dropdown menu */}
        <select className='bandOrArtist' value={selectedOption} onChange={handleChange}>
          <option value="artist">Artist</option>
          <option value="band">Band</option>
        </select>
      </label>
      {selectedOption === 'band' ?
        <>
          <label>
            <input name='bandName' type="text" placeholder="Band name" />
          </label>
        </> :
        <>
          <label>
            <input name='firstName' type="text" placeholder="First name" />
          </label>
          <label>
            <input name='lastName' type="text" placeholder="Last name" />
          </label>
        </>
      }
      <label>
        <input name='description' type="text" placeholder="Description" />
      </label>
      <label>
        <input name='imgUrl' type="text" placeholder="Image URL" />
      </label>
      <button type='submit'>Add</button>
    </form>
  </>;
}