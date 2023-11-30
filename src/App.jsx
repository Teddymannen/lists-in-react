import { useState } from 'react';
import { Outlet } from 'react-router-dom';


export default function App() {

  // maybe each artists should have a description and an imageUrl?
  const [favoriteArtists, setFavoriteArtists] = useState([
    { id: 1, firstName: 'Paul', lastName: 'McCartney', description: 'Paul McCartney', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Paul_McCartney_2021_%28cropped%29.jpg/220px-Paul_McCartney_2021_%28cropped%29.jpg' },
    { id: 2, firstName: 'Paul', lastName: 'Simon', description: 'Paul Simon', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Paul_Simon_at_the_9-30_Club_%28b%29.jpg/220px-Paul_Simon_at_the_9-30_Club_%28b%29.jpg' },
    { id: 3, firstName: 'Paul', lastName: 'Young', description: 'Paul Young', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/PAUL_YOUNG_new.jpg/220px-PAUL_YOUNG_new.jpg' },
    { id: 4, bandName: 'The Tallest Man on Earth', description: 'The Tallest Man on Earth', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tallest_Man_On_Earth_Newport_2015.jpg/220px-Tallest_Man_On_Earth_Newport_2015.jpg' }
  ]);

  function addArtist(artist) {
    artist.id = favoriteArtists[favoriteArtists.length - 1].id + 1;
    setFavoriteArtists([...favoriteArtists, artist]);
  }
  function editArtist(id, artist) {
    artist.id = id; // just in case
    let otherArtists = favoriteArtists.filter(artist => artist.id !== id);
    setFavoriteArtists([...otherArtists, artist].sort((a, b) => a.id - b.id));
  }
  function removeArtist(id) {
    let otherArtists = favoriteArtists.filter(artist => artist.id !== id);
    setFavoriteArtists(otherArtists);
  }
  // you could write some functions here to add, remove, and edit an artist
  // -> the functions to need to create a new array
  // based on the old one, but with changes and then call
  // setFavoriteArtists(newArray)
  // IF YOU DO SEND THEM THROUGH OUTLET CONTEXT TO OTHER COMPONENTS

  return <>
    {/* Maybe we should have a header component here and a nav to 
        a page where you can create a new artist? */}
    <main>
      <Outlet context={{ favoriteArtists, setFavoriteArtists, addArtist, editArtist, removeArtist }} />
    </main>
  </>
}