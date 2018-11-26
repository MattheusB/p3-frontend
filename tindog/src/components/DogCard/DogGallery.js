import React, {Component} from "react";
import DogName from "./DogName";
import DogAge from "./DogAge";
import DogRace from "./DogRace";
import LikeButton from "./LikeButton";
import axios from "axios";


export default class DogCard extends Component{

    state = {
        dogCards: []
    }

    componentDidMount(){
        axios.get('http://localhost:3000/user')
        .then(res=>{
            const dogCards = res.data
            this.setState({dogCards});
        })
    }

    render(){
        return(
            <div className="DogGallery">
                {this.state.dogCards.map(dog => {
                    return(
                        <article key={dog.id} className="DogCard">
                         <>
                            <img className="DogImage" src={dog.photo}/>                            
                            <DogName name={dog.name} />
                            <DogAge  age={dog.age} />
                            <DogRace race={dog.race} />
                            <LikeButton ></LikeButton>
                         </>   
                        </article>
                    );
                })}
            </div>
        );
    }
}