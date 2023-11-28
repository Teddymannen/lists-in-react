import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import ArtistList from './ArtistList';

export default function App() {

  // maybe each artists should a description and an imageUrl?
  const [favoriteArtists, setFavoriteArtists] = useState([
    { id: 1, firstName: 'Paul', lastName: 'McCartney' },
    { id: 2, firstName: 'Paul', lastName: 'Simon' },
    { id: 3, firstName: 'Paul', lastName: 'Young' },
    { id: 4, bandName: 'The Tallest Man on Earth' }
  ]);

  // you could write some functions here to add, remove, and edit an artist
  // -> the functions to need to create a new array
  // based on the old one, but with changes and then call
  // setFavoriteArtists(newArray)
  // IF YOU DO SEND THEM THROUGH OUTLET CONTEXT TO OTHER COMPONENTS

  return <>
    {/* Maybe we should have a header component here and a nav to 
        a page where you can create a new artist? */}
    <main>
      <Outlet context={{ favoriteArtists, setFavoriteArtists }} />
    </main>
  </>
}