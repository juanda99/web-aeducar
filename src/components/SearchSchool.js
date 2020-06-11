import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Colegios from '../data/colegios';
export default function SearchSchool() {

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={Colegios}
        getOptionLabel={(option) => option.name}
        style={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label="Selecciona tu centro" />}
      />
    </div>

  );
}

