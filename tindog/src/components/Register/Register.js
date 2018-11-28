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
        <Form/>
    </Modal>
    );
  }
}

export default Register;
