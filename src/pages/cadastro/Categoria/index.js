import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    Descrição: '',
    cor: '',
  }
  const [Categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValue(name, value);
};
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(infosdoEvento) {
        infosdoEvento.preventDefault();
        setCategorias([
          ...Categorias,
          values
        ]);
        setValues(valoresIniciais)


      }}>
        <FormField 
        label="Nome da Categoria"
        type="text"
        name="nome"
          value={values.nome}
          onChange={handleChange}/>

<FormField 
        label="Descrição"
        type="input"
        name="Descrição"
          value={values.Descrição}
          onChange={handleChange}/>

        {/*<div>
          <label>
            Descrição:
           <textarea
              type="text"
              value={values.Descrição}
              name="Descrição"
              onChange={handleChange}
            />
          </label>

        </div>*/}
        <FormField 
        label="Cor da Categoria"
        type="color"
        name="cor"
          value={values.cor}
          onChange={handleChange}/>
        
        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {Categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;