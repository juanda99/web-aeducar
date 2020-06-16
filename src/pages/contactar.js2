import React from 'react';
import Container from '@material-ui/core/Container';
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from '@material-ui/core';
import styles from "./contactar.module.css"


export default function App() {
  const { register, errors, handleSubmit, getValues } = useForm(
    {
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {},
    }
  );

  const onSubmit = data => console.log(data);
  return (
    <Container maxWidth="md">
      <h1>Contactar</h1>
      <form onSubmit={handleSubmit(() => { })}>
        <TextField
          label="Your name"
          fullWidth
          variant="outlined"
          type="text"
          name="name"
          margin="normal"
          className={styles.textField}
          error={!!errors.name}
          inputRef={register({ required: true })}
        />
        <TextField
          label="Your email"
          fullWidth
          variant="outlined"
          type="text"
          name="email"
          margin="normal"
          className={styles.TextField}
          error={!!errors.email}
          inputRef={register({ pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ })}
        />

        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          disabled={!!errors.name || !!errors.email}
        >
          Enviar mensaje
        </Button>
        <div>{JSON.stringify(getValues())}</div>
      </form>
    </Container>
  );
}
