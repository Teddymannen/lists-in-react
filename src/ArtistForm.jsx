import { useState } from 'react';



export default function ArtistForm({ submitForm, submitButtonText, defaultValues }) {
  if (!defaultValues) { defaultValues = { firstName: '', lastName: '', bandName: '', description: '', imgUrl: '' } }
  const [selectedOption, setSelectedOption] = useState(defaultValues.bandName ? 'band' : 'artist');
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
          <input name='bandName' type="text" defaultValue={defaultValues.bandName} placeholder="Band name" />
        </label>
      </> :
      <>
        <label>
          <input name='firstName' type="text" defaultValue={defaultValues.firstName} placeholder="First name" />
        </label>
        <label>
          <input name='lastName' type="text" defaultValue={defaultValues.lastName} placeholder="Last name" />
        </label>
      </>
    }
    <label>
      <input name='description' type="text" defaultValue={defaultValues.description} placeholder="Description" />
    </label>
    <label>
      <input name='imgUrl' type="text" defaultValue={defaultValues.imgUrl} placeholder="Image URL" />
    </label>
    <button type='submit'>{submitButtonText}</button>
  </form>
}