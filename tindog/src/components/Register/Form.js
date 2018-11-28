import React, {Component} from 'react'
import { Button,Form } from 'semantic-ui-react'

class DogForm extends Component{
    render(){
        return(
  <Form>
    <Form.Field>
      <label>Nome</label>
      <input placeholder='Nome' />
    </Form.Field>
    <Form.Field>
      <label>Idade</label>
      <input placeholder='Idade' />
    </Form.Field>
    <Form.Field>
      <label>Raça</label>
      <input placeholder='Raça' />
    </Form.Field>
    <Form.Field>
      <label>Foto</label>
      <input placeholder='URL da foto' />
    </Form.Field>

    <Button positive type='submit'>Adicionar</Button>
  </Form>
);
}

}
export default DogForm;