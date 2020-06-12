import React from "react"
import Container from '@material-ui/core/Container';
import Header from './Header'
import SidebarMenu from './SidebarMenu'
import ChatBot from 'react-simple-chatbot'
export default function Layout({ children }) {
  return (
    <div id="outer-container">
      <SidebarMenu />
      <div id="page-wrap">
        <Header />
        <Container maxWidth="md">
          {children}
        </Container>
      </div>
      <ChatBot
        headerTitle="Soporte aeducar"
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
            message: 'Hola {previousValue}, encantado. Para comenzar, necesito que me digas cual es tu perfil en aeducar.',
            trigger: '4',
          },

          {
            id: '4',
            options: [
              { value: 1, label: 'Profesor', trigger: '5' },
              { value: 2, label: 'Padre o alumno', trigger: '5' },
            ]
          },
          {
            id: '5',
            message: 'Debes hablar con el gestor de aeducar en tu centro para que te ayude. ¿Quieres que tramite yo la incidencia?',
            trigger: '21',
          },
          {
            id: '21',
            options: [
              { value: 1, label: 'Si', trigger: '23' },
              { value: 2, label: 'No', trigger: '22' },
            ]
          },
          {
            id: '22',
            message: 'Bueno, espero haberte ayudado.',
            end: true
          },
          {
            id: '23',
            message: 'Perfecto, necesitaré que me proporciones unos datos. ¡Vamos a ello!',
            end: true,
          },
        ]}
        floating={true}
        recognitionEnable={true}
        recognitionLang='es'
      />
    </div>
  )
}