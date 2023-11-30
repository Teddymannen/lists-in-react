import { Link, useOutletContext } from "react-router-dom";
import { useState } from 'react';
import ArtistForm from "./ArtistForm";

export default function ArtistList() {

  const [currentEdit, setCurrentEdit] = useState(-1);

  let { favoriteArtists, addArtist, editArtist, removeArtist } = useOutletContext();

  function submitForm(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let newArtist = Object.fromEntries(formData);
    addArtist(newArtist);
    form.reset();
  }

  function submitEditForm(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let newArtist = Object.fromEntries(formData);
    editArtist(currentEdit, newArtist);
    setCurrentEdit(-1);
    form.reset();
  }

  function onRemoveClick(id) {
    if (currentEdit === id) { setCurrentEdit(-1); }
    removeArtist(id);
  }

  return <>
    {/* Add artist form */}
    <ArtistForm submitForm={submitForm} submitButtonText={'Add'} />
    <h2>Favorite artists {currentEdit}</h2>
    {favoriteArtists.map(({ id, firstName, lastName, bandName, description, imgUrl }) =>
      <div key={id} className={`${bandName ? 'band' : 'artist'}${id === currentEdit ? ' edit' : ''}`} >
        <button onClick={() => { setCurrentEdit(id) }} >Edit</button>
        <button onClick={() => { onRemoveClick(id) }}>Remove</button>
        {
          id === currentEdit ?
            <ArtistForm submitForm={submitEditForm} submitButtonText={'Save'} defaultValues={{ bandName, firstName, lastName, description, imgUrl }} /> :
            bandName ?
              <Link to={'/artist-detail/' + id}><p>{bandName}</p></Link> :
              <Link to={'/artist-detail/' + id}><p>{firstName} {lastName}</p></Link>
        }
      </div>
    )}
  </>;
}