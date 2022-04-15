import React, { useEffect, useState } from 'react'
import { formataCPF, formataReais } from '../../../services/formatacaoDeDados.js'
import api from '../../../services/api'

const ListarTodos = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    api.get('/employees')
     .then(response => {
       setList(response.data)
      })
  }, [])

  return (
    <div className="listaFuncionarios">
    {
      list.map((item, index) => {
        let valorEmReais = formataReais(item.wage)
        let mascaraCpf = formataCPF(item.cpf)
        return(
          <ul key={index}>
            <li><b>Id:</b> {item._id}</li>
            <li><b>Nome:</b> {item.name}</li>
            <li><b>Cargo:</b> {item.job}</li>
            <li><b>Salário:</b> {valorEmReais}</li>
            <li><b>CPF:</b> {mascaraCpf}</li>
            <li>-------------------------------------</li>
          </ul>
        )
      })
    }
    </div>
  )
}

export default ListarTodos