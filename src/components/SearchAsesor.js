import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Colegios from '../data/colegios';
import Asesores from '../data/asesores';


export default function SearchAsesor() {

  const [school, setSchool] = useState({});
  const [asesores, setAsesores] = useState([]);
  const [open, setOpen] = useState(false);

  const handleChange = (event, value) => {
    const found = Colegios.some(colegio => value && value.name && colegio.name === value.name)
    const asesores = Asesores.filter(asesor => asesor.cp === value.cp)
    setSchool(value)
    setAsesores(asesores)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoadSchool = () => {
    if (school.url) window.location = school.url
    else setOpen(true)

  }

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={Colegios}
        getOptionLabel={(option) => option.name}
        style={{ width: '100%', bottomMargin: '20px' }}
        renderInput={(params) => <TextField {...params} label="Selecciona tu centro" />}
        onChange={handleChange}
      />
      {asesores.length !== 0 && asesores.map(asesor => (
        <ul>
          <li>Asesor: {asesor.asesor}</li>
          <li>email: {asesor.email}</li>
          <li>Centro profesorado: {asesor.cp}</li>
        </ul>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Acceso a aeducar</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            El centro seleccionado no está dado de alta en la plataforma.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}

