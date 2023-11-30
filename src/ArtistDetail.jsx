import { Link, useOutletContext, useParams } from "react-router-dom";

export default function ArtistDetail() {

  let { id } = useParams();
  let { favoriteArtists } = useOutletContext();

  let artistToDisplay = favoriteArtists.find(artist => artist.id === +id);

  let { firstName, lastName, bandName, description, imgUrl } = artistToDisplay || {};

  let name = bandName ? bandName : firstName + ' ' + lastName;

  return <>
    {!artistToDisplay ?
      <p>Artist not found...</p> :
      <>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={imgUrl} alt={name} width={'20%'} />
      </>
    }
    <br />
    <Link to={'/'}><button>Go Home</button></Link>
  </>;
}