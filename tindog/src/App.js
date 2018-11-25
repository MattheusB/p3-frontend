import React, { Component, Fragment } from 'react';
import Dogs from "./data.json";
import DogGallery from "./components/DogCard/DogGallery";
import Footer from "./components/Footer"

class App extends Component {

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

  render() {
    return (
      <Fragment>
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
    <a class="ui item" onClick={this.logoutClick}>
      Logout
    </a>
  </div>
  
</div>
    <DogGallery Dogs={Dogs}/>
    <Element name ='footer'>
          <Footer/>
        </Element>
    </Fragment>
    );
  }
}

export default App;
