import React, {Component} from 'react'
import { Button,Icon, Modal } from 'semantic-ui-react'
import Form from "./Form"
import './Register.css';

class Register extends Component{
  constructor(props){
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { modalOpen: false }
  }



  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render(){
    return(
    <Modal trigger={<Button circular size="mini" negative icon   onClick={this.handleOpen}>
      <Icon name='add'/>
    </Button>}
     open={this.state.modalOpen}
     onClose={this.handleClose}
    
    >
    
        <Modal.Content>
          <h1>Digite as informações da sua conta</h1>
          <Form dogCreate = {this.props.dogCreate} closeModal = {this.handleClose}/>
        </Modal.Content>
    </Modal>
    );
  }
}

export default Register;
