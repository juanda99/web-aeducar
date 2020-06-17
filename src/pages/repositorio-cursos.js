import React, { useState } from 'react'
import cursos from '../data/cursos.json'
import Chip from '@material-ui/core/Chip'
import Course from '../components/Course'

const EP = "Educación Primaria"
const ES = "Educación Secundaria"
const BA = "Bachillerato"
const etapas = [EP, ES, BA]


export default function RepositorioCursos({ }) {

  const [etapa, setEtapa] = useState(EP);
  const [curso, setCurso] = useState(null);
  const changeEtapa = (value) => {
    setEtapa(value);
    setCurso(null);
  }
  const changeCurso = (value) => setCurso(value);

  let filteredCursos
  if (curso) filteredCursos = cursos.filter(item => item.etapa === etapa).filter(item => item.curso === curso)
  else filteredCursos = cursos.filter(curso => curso.etapa === etapa)

  return (
    <div>
      <h1>Repositorio de cursos</h1>
      <p>Puedes filtrar los resultados utilizando seleccionando de las siguientes etiquetas:</p>
      <p>Etapa educativa:
      {etapas.map(tag => (
        <Chip
          key={tag}
          label={tag}
          style={etapa === tag ? { backgroundColor: 'red', margin: '5px' } : { backgroundColor: 'white', margin: '5px' }}
          onClick={() => changeEtapa(tag)}
          variant="outlined"
        />
      ))}
      </p>
      <p> Curso:
      {etapa === EP && [1, 2, 3, 4, 5, 6].map(tag => (
        <Chip
          key={`${etapa}-${tag}`}
          label={tag}
          style={curso === tag ? { backgroundColor: 'red', margin: '5px' } : { backgroundColor: 'white', margin: '5px' }}
          onClick={() => changeCurso(tag)}
          variant="outlined"
        />
      ))}
        {etapa === ES && [1, 2, 3, 4].map(tag => (
          <Chip
            key={`${etapa}-${tag}`}
            label={tag}
            style={curso === tag ? { backgroundColor: 'red', margin: '5px' } : { backgroundColor: 'white', margin: '5px' }}
            onClick={() => changeCurso(tag)}
            variant="outlined"
          />
        ))}
        {etapa === BA && [1, 2].map(tag => (
          <Chip
            key={`${etapa}-${tag}`}
            label={tag}
            style={curso === tag ? { backgroundColor: 'red', margin: '5px' } : { backgroundColor: 'white', margin: '5px' }}
            onClick={() => changeCurso(tag)}
            variant="outlined"
          />
        ))}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredCursos.map(curso => (
          <Course
            key={curso.mbz_name}
            materia={curso.fullname}
            etapa={curso.etapa}
            curso={curso.curso}
            size={curso.size}
            url={curso.shareable_link}
            visitUrl={curso.url_invitado}
          />
        ))}
      </div>
    </div>

  );
}
