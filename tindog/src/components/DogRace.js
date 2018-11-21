import React, {Component} from "react";

export default class DogRace extends Component{
    render(){
        return(
            <div>
                <b>Raça: </b>{this.props.race}
            </div>
        );
    }
}