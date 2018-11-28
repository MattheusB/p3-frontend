import React, {Component} from "react"
import Register from "../Register/Register";
import { Form } from "../../../node_modules/semantic-ui-react";

class NavBar extends Component {
    perfilClick = () => {
        console.log("Click on perfil button")
    };
    
    chatClick = () =>{
      console.log("Click on chat button")
    };
    
    logoutClick = () =>{
      console.log("Click on logout button")
    }
    
    homeClick = () =>{
      console.log("Click on home button")
    }
    addClick = () =>{
     return <Form/>;
    }
    render() {  
        return (

<div class="ui secondary pointing menu">
  <a class="item active" onClick={this.homeClick}>
    Home
  </a>
  <a class="item" onClick={this.chatClick}>
    Chat
  </a>
  <a class="item" onClick={this.perfilClick}>
    Perfil
  </a>
  <div class="right menu">
  <a>
      <Register/>
    </a>
    <a class="ui item" onClick={this.logoutClick}>
      Logout
    </a>
  </div>
  
</div>
        );
    }
}
export default NavBar;