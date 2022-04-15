import React, { useEffect, useState } from 'react'
import api from '../../services/api'

const ListarTodos = () => {
  const [list, setList] = useState([])

  function formataCPF(cpf){
    let strCpf = String(cpf)
    strCpf = strCpf.replace(/[^\d]/g, "");
    return strCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function formataReais(valor){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  useEffect(() => {
    api.get('/employees')
     .then(response => {
       setList(response.data)
       console.log(response.data)
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