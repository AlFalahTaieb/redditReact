import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';

import SimpleSelect from './Pick.js'
const divStyle = {
  marginLeft: '15px',
  marginTop: '15px'
}


const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) =>
  <form onSubmit={onSubmit}>
    
    <TextField
      id="outlined-search"
      label="Subreddit"
      type="search"
      margin="dense"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
    <SimpleSelect></SimpleSelect>
    <Button
      variant="outlined" 
      color="primary" 
      style={divStyle}
      type='submit'>
      {children}
    </Button>


  </form>

export default Search;