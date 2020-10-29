import React, {Component} from "react"
import Radio from '@material-ui/core/Radio'
import ReactPlayer from 'react-player/lazy'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Container from '@material-ui/core/Container'

const playListDocentes='PLSGVDAOE4jAv-QqFG5BsqzFf0AE4A3y-P'
const playListAlumnos='PLSGVDAOE4jAuesrjaxu2l8KF_PhJkCeqU'
const key='AIzaSyDdZLsC5fs-KSvHKUHrygZV8DS_RiHPzWg'

const filterData = (data, type) => 
  data.items.map(item => 
      ({type, title: item.snippet.title, desc: item.snippet.description, url: item.snippet.resourceId.videoId}))

class Tutoriales extends Component {

  state = {
    videos: [],
    type: 'alumnos'
  }

  handleChange = (event) => {
    this.setState({type: event.target.value})
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    let responseDocentes = fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListDocentes}&key=${key}&part=snippet&maxResults=50`);
    let responseAlumnos = fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListAlumnos}&key=${key}&part=snippet&maxResults=50`);
    const finalResult = await Promise.all ([responseDocentes, responseAlumnos]);
    const data = await Promise.all ([finalResult[0].json(), finalResult[1].json()])
    const datosDocentes = filterData(data[0], 'docentes')
    const datosAlumnos = filterData(data[1], 'alumnos')
    this.setState({videos: [...datosDocentes, ...datosAlumnos]})
  }


  
  render() {
    const { type, videos } = this.state
    const visibleVideos = videos.filter(video => video.type === type)
    return (
      <Container maxWidth="lg">
        <h1>Tutoriales</h1>
        <FormControl component="fieldset">
          <FormLabel component="legend">Selecciona tu perfil en Aeducar</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={type} onChange={this.handleChange}>
            <FormControlLabel value="alumnos" control={<Radio />} label="Alumno/Familia" />
            <FormControlLabel value="docentes" control={<Radio />} label="Docente" />
          </RadioGroup>
        </FormControl>
        {type==='alumnos' ? 
          <p>Se han encontrado {visibleVideos.length} tutoriales para alumnado y familias sobre Aeducar en el canal de YouTube de Formación del Profesorado.</p>
          : <p>Se han encontrado {visibleVideos.length} tutoriales para docentes sobre Aeducar en el canal de YouTube de Formación del Profesorado.</p>

        }


        <ul>
          {visibleVideos.map(tutorial => (
            <li key={tutorial.url}>
              <h2>{tutorial.title}</h2>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${tutorial.url}`} />
            </li>
          ))}
        </ul>
      </Container>
    )
  }
}

export default Tutoriales
