import React, {useContext} from 'react';
import {AlertContext} from '../../Context/Alert/AlertContext'

const Search = () => {
  const {show} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key === 'Enter') {
      show('This is alert after Enter')
    }
  }

  return (
    <div className='form-group'>
      <input
        type="text"
        className='form-control'
        placeholder='Input Repository Name...'
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;