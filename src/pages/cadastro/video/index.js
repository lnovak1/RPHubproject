import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({


  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>


      <form onSubmit={(event) => {
        event.preventDefault()
        //alert('Video cadastrado com sucesso!');

        history.push('/');
      }}>

      <FormField
          label="Titulo do video"
          
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          />


      <FormField
          label="URL"
          
          name="url"
          value={values.url}
          onChange={handleChange}
          />
          </form>


          <Button type="submit">
          Cadastrar
        </Button>

      <Link to="/cadastro/categoria">
        Cadastrar Cartegoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
