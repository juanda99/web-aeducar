import React from "react"
import { ThemeProvider } from 'styled-components';
import Container from '@material-ui/core/Container';
import Header from './Header'
import SidebarMenu from './SidebarMenu'
import ChatBot from 'react-simple-chatbot'
import './Layout.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',

  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export default function Layout({ children }) {
  return (
    <div>
      <div id="outer-container">
        <SidebarMenu />
        <div id="page-wrap">
          <Header />
          <Container maxWidth="lg" id="siteContent">
            {children}
          </Container>
          <footer>
            <p>Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar Footer sin especificar  </p>
          </footer>
        </div>
        {typeof window !== 'undefined' && (
          <ThemeProvider theme={theme}>
            <ChatBot
              headerTitle="Soporte Aeducar"
              recognitionEnable={true}
              // speechSynthesis={{ enable: true, lang: 'es' }}
              steps={[
                {
                  id: '1',
                  message: '¡Buenos días! Voy a intentar ayudarte. ¿Cómo te llamas?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  validator: (value) => {
                    if (/^[a-zA-Z]+$/.test(value)) return true
                    return 'Venga, ¡dime tu nombre!'
                  },
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hola {previousValue}, encantada. Para comenzar, necesito que me digas cual es tu perfil en Aeducar.',
                  trigger: '4',
                },

                {
                  id: '4',
                  options: [
                    { value: 1, label: 'Alumno', trigger: '101' },
                    { value: 2, label: 'Profesor', trigger: '201' },
                    { value: 3, label: 'Padre', trigger: '301' },
                    { value: 4, label: 'Gestor', trigger: '401' },

                  ]
                },
                {
                  id: '101',
                  message: 'Elige tu tipo de consulta',
                  trigger: '102',
                },
                {
                  id: '102',
                  options: [
                    { value: 1, label: 'Problemas de acceso', trigger: '103' },
                    { value: 2, label: 'Otro problema', trigger: '114' }
                  ]
                },
                {
                  id: '103',
                  message: 'Si tienes problemas de acceso, consulta la siguiente url:',
                  trigger: '104',
                },
                {
                  id: '104',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '196'
                },
                {
                  id: '114',
                  message: 'Lo mejor en este caso es que te pongas en contacto con tu tutor.',
                  trigger: '196',
                },
                {
                  id: '196',
                  message: '¿Te puedo ayudar en algo más?',
                  trigger: '197',
                },
                {
                  id: '197',
                  options: [
                    { value: 1, label: 'Si', trigger: '101' },
                    { value: 2, label: 'No', trigger: '199' }
                  ]
                },
                {
                  id: '199',
                  message: 'Ha sido un placer atenderte. ¡Adios!',
                  end: true,
                },



                {
                  id: '201',
                  message: 'Elige tu tipo de consulta',
                  trigger: '202',
                },
                {
                  id: '202',
                  options: [
                    { value: 1, label: 'Problemas de acceso', trigger: '203' },
                    { value: 2, label: 'No aparezco como profesor en alguna de mis materias', trigger: '211' },
                    { value: 3, label: 'No tengo matriculado a alguno de mis alumnos', trigger: '221' },
                    { value: 4, label: 'Otra consulta', trigger: '201' }
                  ]
                },

                {
                  id: '203',
                  message: 'Si tienes problemas de acceso, consulta la siguiente url:',
                  trigger: '204',
                },
                {
                  id: '204',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '296'
                },

                {
                  id: '211',
                  message: 'Ponte en contacto con el gestor de Aeducar en tu centro educativo.',
                  trigger: '296'
                },

                {
                  id: '221',
                  message: 'Ponte en contacto con el gestor de Aeducar de tu centro educativo.',
                  trigger: '396',
                },


                {
                  id: '231',
                  message: 'Contacta con el asesor de tu red de formación. Puedes obtener sus datos de contacto en la siguiente URL:',
                  trigger: '232',
                },
                {
                  id: '232',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '396'
                },
                {
                  id: '296',
                  message: '¿Te puedo ayudar en algo más?',
                  trigger: '297',
                },
                {
                  id: '297',
                  options: [
                    { value: 1, label: 'Si', trigger: '201' },
                    { value: 2, label: 'No', trigger: '299' }
                  ]
                },
                {
                  id: '299',
                  message: 'Ha sido un placer atenderte. ¡Adios!',
                  end: true,
                },

                {
                  id: '301',
                  message: 'Elige tu tipo de consulta',
                  trigger: '302',
                },
                {
                  id: '302',
                  options: [
                    { value: 1, label: 'Problemas de acceso a mi cuenta', trigger: '303' },
                    { value: 2, label: 'No tengo vinculado a alguno de mis hijos', trigger: '311' },
                    { value: 3, label: 'Otra consulta', trigger: '321' }
                  ]
                },
                {
                  id: '303',
                  message: 'Si tienes problemas de acceso, consulta la siguiente url:',
                  trigger: '104',
                },
                {
                  id: '304',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '396'
                },

                {
                  id: '311',
                  message: 'Ponte en contacto con el gestor de Aeducar de tu centro educativo.',
                  trigger: '396',
                },

                {
                  id: '321',
                  message: 'Ponte en contacto con el tutor o tutora de tu hijo.',
                  trigger: '396',
                },


                {
                  id: '396',
                  message: '¿Te puedo ayudar en algo más?',
                  trigger: '397',
                },
                {
                  id: '397',
                  options: [
                    { value: 1, label: 'Si', trigger: '301' },
                    { value: 2, label: 'No', trigger: '399' }
                  ]
                },
                {
                  id: '399',
                  message: 'Ha sido un placer atenderte. ¡Adios!',
                  end: true,
                },

                {
                  id: '401',
                  message: 'Elige tu tipo de consulta',
                  trigger: '402',
                },
                {
                  id: '402',
                  options: [
                    { value: 1, label: 'Problemas de acceso', trigger: '403' },
                    { value: 2, label: 'Quiero matricular alumnos de forma masiva en cursos', trigger: '411' },
                    { value: 3, label: 'Quiero reiniciar todos los cursos de Aeducar para un nuevo curso escolar', trigger: '421' },
                    { value: 4, label: 'Otro problema', trigger: '431' }
                  ]
                },


                {
                  id: '403',
                  message: 'Si tienes problemas de acceso, consulta la siguiente url:',
                  trigger: '404',
                },
                {
                  id: '404',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '496'
                },

                {
                  id: '411',
                  message: 'Para matricular alumnos de forma masiva, consulta la siguiente url:',
                  trigger: '412',
                },
                {
                  id: '412',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '496'
                },


                {
                  id: '421',
                  message: 'Para reiniciar cursos, consulta la siguiente url:',
                  trigger: '422',
                },
                {
                  id: '422',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '496'
                },

                {
                  id: '431',
                  message: 'Contacta con el asesor de tu red de formación. Puedes obtener sus datos de contacto en la siguiente URL:',
                  trigger: '432',
                },
                {
                  id: '432',
                  component: (
                    <a href="www.marca.es">Web del marca</a>
                  ),
                  trigger: '496'
                },
                {
                  id: '496',
                  message: '¿Te puedo ayudar en algo más?',
                  trigger: '497',
                },
                {
                  id: '497',
                  options: [
                    { value: 1, label: 'Si', trigger: '401' },
                    { value: 2, label: 'No', trigger: '499' }
                  ]
                },
                {
                  id: '499',
                  message: 'Ha sido un placer atenderte. ¡Adios!',
                  end: true,
                },








              ]}
              floating={true}
              recognitionEnable={true}
              recognitionLang='es'
              placeholder='Escribe tu mensaje...'
              userDelay='500'
            />
          </ThemeProvider>
        )}
      </div>


    </div >
  )
}