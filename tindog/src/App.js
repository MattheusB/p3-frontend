import React, { Component, Fragment } from 'react';
import Dogs from "./data.json";
import DogGallery from "./components/DogCard/DogGallery";
import NavBar from "./components/NavBar/navBar"

class App extends Component {


  render() {
    return (
      <Fragment>
        <NavBar></NavBar>

    <DogGallery/>
    </Fragment>
    );
  }
}

export default App;
