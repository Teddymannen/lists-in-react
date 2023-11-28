import { Link, useOutletContext } from "react-router-dom";

export default function ArtistList() {

  let { favoriteArtists } = useOutletContext();

  return <>
    <h2>Favorite artists</h2>
    {favoriteArtists.map(({ id, firstName, lastName, bandName }) => <Link
      key={id}
      className={bandName ? 'band' : 'artist'}
      to={'/artist-detail/' + id}
    >
      <button>Edit</button>
      <button>Remove</button>
      {bandName ?
        <p>{bandName}</p> :
        <p>{firstName} {lastName}</p>
      }
    </Link>)}
  </>;
}