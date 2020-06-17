import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import VisibilityIcon from '@material-ui/icons/Visibility';


export default function Course({ key, materia, curso, etapa, url, size, visitUrl }) {
  return (
    <Paper elevation={3} key={key} style={{ display: 'flex', flexDirection: 'column', margin: '10px', flex: '1 1 400px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', color: 'white', padding: '10px', minHeight: '80px' }}>
        <Typography color="textSecondary" variant="h6" component="h2" color='inherit' align="center">
          {materia}
        </Typography>
      </div>
      <div style={{ padding: '10px' }}>

        <Typography color="textSecondary" align="center">
          {etapa} - {curso}º
        </Typography>
        <Typography variant="body2" component="p" align="center">
          {size}
        </Typography>

      </div>

      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <a href={url} style={{ padding: '10px', textDecoration: 'none', margin: '0 auto' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudDownloadIcon />}
          >
            Descargar
      </Button>
        </a>
        <a href={visitUrl} target="_blank" style={{ display: 'flex', padding: '10px', textDecoration: 'none', margin: '0 auto' }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<VisibilityIcon />}
          >
            Visualizar
      </Button>
        </a>
      </div>

    </Paper >
  );
}
