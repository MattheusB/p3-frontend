import React, { Component, Fragment } from 'react';
import Perfil from "./Perfil";
import Chat from "./Chat";
import Dogs from "./data.json";
import DogGallery from "./components/DogGallery";

class App extends Component {

  render() {
    return (
      <Fragment>
      <div className="c-muted-2 order-1-s order-2-ns ml-auto ml0-m mv3-s mv0-ns">
      <div className="mh5 dib pointer">
        <Perfil />
      </div>
      <div className="mh5 dib pointer">
        <Chat />
      </div>
    </div>
    <DogGallery Dogs={Dogs}/>
    </Fragment>
    );
  }
}

export default App;
