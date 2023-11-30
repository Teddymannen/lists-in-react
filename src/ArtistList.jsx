import { Link, useOutletContext } from "react-router-dom";
import { useState } from 'react';
import ArtistDetail from "./ArtistDetail";
import ArtistForm from "./ArtistForm";

export default function ArtistList() {

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
    <ArtistForm submitForm={submitForm} />
  </>;
}