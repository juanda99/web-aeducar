import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
// import { pushRotate as Menu } from 'react-burger-menu'

import { Link } from "gatsby"

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '100% !important'
  },
  bmMenu: {
    background: '#f44336',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#f44336'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  menuItem: {
    display: 'block',
    marginTop: '15px',
    color: 'white',
    fontSize: '23px',
    // textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 300
  }
}


class SidebarMenu extends Component {
  state = {
    menuOpen: false
  }

  closeMenu = () => this.setState({ menuOpen: false })

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  render() {
    const { menuOpen } = this.state
    return (
      <Menu isOpen={menuOpen} onStateChange={(state) => this.handleStateChange(state)} styles={styles} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={false}>
        <Link onClick={this.closeMenu} to="/" style={styles.menuItem}>Inicio</Link>
        <Link onClick={this.closeMenu} to="/solicitud" style={styles.menuItem}>Alta en aeducar</Link>
        <Link onClick={this.closeMenu} to="/asesoria" style={styles.menuItem}>Asesoría</Link>
        <Link onClick={this.closeMenu} to="/repositorio-imagenes" style={styles.menuItem}>Repositorio de imágenes</Link>
        <Link onClick={this.closeMenu} to="/repositorio-cursos" style={styles.menuItem}>Repositorio de cursos</Link>
        <Link onClick={this.closeMenu} to="/noticias" style={styles.menuItem}>Noticias</Link>
        <Link onClick={this.closeMenu} to="/faq" style={styles.menuItem}>Preguntas frecuentes</Link>
      </Menu>
    )
  }
}

export default SidebarMenu
