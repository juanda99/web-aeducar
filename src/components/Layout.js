import React from "react"
import Container from '@material-ui/core/Container';
import Header from './Header'
import Footer from './Footer'
import SidebarMenu from './SidebarMenu'
import ChatBot from './ChatBot'
import './Layout.css'

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
          <Footer />
        </div>
        {typeof window !== 'undefined' && <ChatBot />}
      </div>


    </div >
  )
}