import React from 'react';
import '../components/tiendatecnologia.css';
import '../components/card.css';
import Tiendacomidas from '../components/tiendatecnologia';
import Card from '../components/card';
import Header from '../components/headertecnologia';
import '../components/headertecnologia.css';




function pagina1() {
  return (
    <div >
      
      < Header />
      <Tiendacomidas />
      <Card />
      
      
    </div>
  )
}

export default pagina1;