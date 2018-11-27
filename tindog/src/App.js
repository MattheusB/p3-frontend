import React, { Component, Fragment } from 'react';
import DogGallery from "./components/DogCard/DogGallery";
import NavBar from "./components/NavBar/navBar"
import Register from "./components/Register/Register"

class App extends Component {


  render() {
    return (
      <Fragment>
        <NavBar/>

    <DogGallery/>
  <Register/>
    </Fragment>
    );
  }
}

export default App;
