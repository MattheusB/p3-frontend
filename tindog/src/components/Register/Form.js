import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class DogForm extends Component {
  state = {
    name: "",
    age: "",
    race: "",
    photo: "",
    email: "",
    password: "",
    role: ""
  }
  nameChange = event => {
    this.setState({ name: event.target.value });
  }
  ageChange = event => {
    this.setState({ age: event.target.value });
  }
  raceChange = event => {
    this.setState({ race: event.target.value });
  }
  photoChange = event => {
    this.setState({ photo: event.target.value });
  }
  passwordChange = event => {
    this.setState({ password: event.target.value });
  }
  emailChange = event => {
    this.setState({ email: event.target.value });
  }
  roleChange = event => {
    this.setState({ role: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      age: this.state.age,
      race: this.state.race,
      photo: this.state.photo,
      password: this.state.password,
      email: this.state.email,
      role: this.state.role
    };

     this.props.dogCreate({user});
     this.props.closeModal();
      
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <label>Nome</label>
          <input placeholder="Nome" name="name" onChange={this.nameChange} />
        </Form.Field>
        <Form.Field>
          <label>Idade</label>
          <input placeholder="Idade" name="age" onChange={this.ageChange} />
        </Form.Field>
        <Form.Field>
          <label>Raça</label>
          <input placeholder="Raça" name="race" onChange={this.raceChange} />
        </Form.Field>
        <Form.Field>
          <label>Foto</label>
          <input placeholder="URL da foto" name="photo" onChange={this.photoChange} />
        </Form.Field>
        <Form.Field>
          <label>Senha</label>
          <input placeholder="Senha" name="password" onChange={this.passwordChange} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" name="email" onChange={this.emailChange} />
        </Form.Field>
        <Form.Field>
          <label>Role</label>
          <input placeholder="Função (default ou admin)" name="role" onChange={this.roleChange} />
        </Form.Field>
        <Button positive type="submit" >Adicionar</Button>
      </Form>
    );
  }

}
export default DogForm;