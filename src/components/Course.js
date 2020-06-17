import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: '1 1 400px',
    margin: '20px',
    flexDirection: 'column'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Course({ key, materia, curso, etapa, url, size, visitUrl }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper elevation={3} key={key} className={classes.root}>
      <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', height: '30px' }}>
        <Typography className={classes.pos} color="textSecondary">
          {materia}
        </Typography>
      </div>
      <div style={{ padding: '10px' }}>

        <Typography className={classes.pos} color="textSecondary">
          {etapa} - {curso}º
        </Typography>
        <Typography variant="body2" component="p">
          {size}
        </Typography>

      </div>

      <div style={{ display: 'flex', padding: '10px' }}>
        <a href={url} style={{ margin: '10px' }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CloudDownloadIcon />}
          >
            Descargar
      </Button>
        </a>
        <a href={visitUrl} style={{ display: 'flex', padding: '10px' }}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<VisibilityIcon />}
          >
            Visualizar
      </Button>
        </a>
      </div>

    </Paper>
  );
}
