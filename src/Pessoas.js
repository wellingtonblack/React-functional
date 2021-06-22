import React, { useState } from 'react';

import './App.scss'
import Informacao from './components/Informacao';

const Pessoas = () => {
  const [pessoas] = useState([
    {
      nome: 'Wellington',
      idade: '37',
      profissao: 'analista de sistemas'
    },
    {
      nome: 'Tamires',
      idade: '30',
      profissao: 'empresária'
    },
    {
      nome: 'Pedro Henrique',
      idade: '6',
      profissao: 'estudante'
    },
    {
      nome: 'Heitor',
      idade: '1',
      profissao: 'criança de colo'
    },
  ])

  return ( 
    <div className={'container'}>
      <Informacao pessoas={pessoas} />
    </div>
   );
}
 
export default Pessoas;