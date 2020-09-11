import React from 'react'



export default function Asesoria({ }) {
  const myExtScript = require('../data/genially')
  return (

    < div >
      <h1>Guía docente</h1>
      <div class="container-wrapper-genially" style={{ position: 'relative', minHeight: '400px', maxWidth: '100%' }}><video class="loader-genially" autoplay="autoplay" loop="loop" playsinline="playsInline" muted="muted" style={{
        position: 'absolute', top: '45%', left: '50%',
        transform: 'translate(-50%, -50%)', width: '80px', height: '80px', marginBottom: '10%'
      }}><source src="https://static.genial.ly/resources/panel-loader-low.mp4" type="video/mp4" />Your browser does not support the video tag.</video><div id="5f4f488a4459460d91ab4b75" class="genially-embed" style={{ margin: '0px auto', position: 'relative', height: 'auto', width: '100%' }}>

        </div></div>

    </div>

  );
}
