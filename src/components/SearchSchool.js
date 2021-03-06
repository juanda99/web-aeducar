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
export default function SearchSchool() {

  const [disabled, setDisabled] = useState(true);
  const [school, setSchool] = useState({});
  const [open, setOpen] = useState(false);

  const button = useRef(null);
  useEffect(() => {
    button.current.focus();
  }, [school]);

  const handleChange = (event, value) => {
    const found = Colegios.some(colegio => value && value.name && colegio.name === value.name)
    setDisabled(!found)
    setSchool(value)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoadSchool = () => {
    if (typeof window !== 'undefined') {
      if (school.url) window.location = school.url
      else setOpen(true)
    }

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Autocomplete
        id="combo-box-demo"
        options={Colegios}
        getOptionLabel={(option) => option.name}
        style={{ width: '95%', minWidth: '200px', maxWidth: '600px', marginBottom: '20px' }}
        renderInput={(params) => <TextField {...params} label="Selecciona tu centro" />}
        onChange={handleChange}
      />
      <div style={{ width: '100%', height: 0 }}></div>
      <Button variant="contained" style={{ marginTop: 10, flex: '0 0 200px' }} color="primary" disabled={disabled} onClick={handleLoadSchool} ref={button} >
        Entrar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Acceso a aeducar</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            El centro seleccionado está a la espera de ser activado en la plataforma Aeducar.
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

