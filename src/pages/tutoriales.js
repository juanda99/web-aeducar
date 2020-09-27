import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import tutoriales from '../data/tutoriales.json'



export default function Tutoriales({ }) {


  return (
    <div>
      <h1>Tutoriales</h1>
      <p>Estos son los tutoriales para alumnado y familias sobre Aeducar en el canal de YouTube de Formación del Profesorado.</p>

      <ul>
        {tutoriales.map(tutorial => (
          <li key={tutorial.url}>
            <h2>{tutorial.title}</h2>
            <ReactPlayer url={tutorial.url} />
          </li>
        ))}
      </ul>
    </div >

  );
}
