import React, { useState } from 'react';

export default function ArtistForm({ submitForm }) {

  const [selectedOption, setSelectedOption] = useState('artist');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return <form onSubmit={submitForm}>
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
};