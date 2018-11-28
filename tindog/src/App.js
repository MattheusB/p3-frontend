import React, { Component, Fragment } from 'react';
import DogGallery from "./components/DogCard/DogGallery";
import NavBar from "./components/NavBar/navBar"
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.dogCreate = this.dogCreate.bind(this);
    
  }

  state = {
    dogCards: []
  }

dogCreate(dog){
  axios.post("http://localhost:3000/user/", dog).then( (data)=>{
    console.log(data); 
    this.setState(prevState => ({
      dogCards: [...prevState.dogCards, data.data]
    }));
  }
  );

}

componentDidMount(){
    axios.get('http://localhost:3000/user')
    .then(res=>{
        const dogCards = res.data
        this.setState({dogCards});
    })
}

  render() {
    return (
      <Fragment>
        <NavBar dogCreate={this.dogCreate}/>

    <DogGallery dogCards={this.state.dogCards}/>
    </Fragment>
    );
  }
}

export default App;
