import React from 'react';
import Paper from '@material-ui/core/Paper'
import logo from '../images/logo-gobierno-aragon.svg'

export default function Header() {
  return (
    <Paper elevation={7} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px', background: "url('/banda.png') no-repeat" }}>
      <div style={{ position: 'absolute', top: '16px', right: '20px' }}>
        <img alt='Gobierno de Aragón' src={logo} style={{ width: 167, height: 40 }} />
      </div>
    </Paper>
  );
}

