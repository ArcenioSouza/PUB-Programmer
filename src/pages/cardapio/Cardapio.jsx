import React from 'react'
import { NavLink } from 'react-router-dom'

const Cardapio = () => {
  return (
    <div>

    <h1>Escolha seu cardapio</h1>
    
    <NavLink to={"/adm/cardapio/comidas"}>
    <button>Comidas</button>
    </NavLink>

    </div>
  )
}

export default Cardapio