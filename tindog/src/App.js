import React, { Component, Fragment } from 'react';
import DogGallery from "./components/DogCard/DogGallery";
import NavBar from "./components/NavBar/navBar"

class App extends Component {


  render() {
    return (
      <Fragment>
        <NavBar/>

    <DogGallery/>
    </Fragment>
    );
  }
}

export default App;
