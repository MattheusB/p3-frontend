import React, {Component} from "react";
import DogName from "./DogName";
import DogAge from "./DogAge";
import DogRace from "./DogRace";
import LikeButton from "./LikeButton";

export default class DogCard extends Component{
    render(){
        return(
            <div className="DogGallery">
                {this.props.Dogs.map(dog => {
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