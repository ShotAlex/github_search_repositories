import React, {useContext, useState} from 'react'
import {AlertContext} from '../../Context/Alert/AlertContext'
import {GithubContext} from "../../Context/Github/githubContext";

const Search = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') return;

    if (value.trim()) {
      github.search(value.trim())
    } else {
      show('Please Input Name')
    }
  }

  return (
    <div className='form-group'>
      <input
        type="text"
        className='form-control'
        placeholder='Input Repository Name...'
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
};

export default Search;