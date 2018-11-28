import React, {Component} from 'react'
import { Button,Icon, Modal } from 'semantic-ui-react'
import Form from "./Form"
import './Register.css';

class Register extends Component{
  render(){
    return(
    <Modal trigger={<Button circular size="mini" negative icon>
      <Icon name='add' />
    </Button>}>
        <Modal.Content>
          <h1>Digite as informações da sua conta</h1>
          <Form></Form>
        </Modal.Content>
    </Modal>
    );
  }
}

export default Register;
