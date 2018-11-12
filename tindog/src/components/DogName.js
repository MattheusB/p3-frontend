import React, {Component} from "react";

export default class DogName extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.dogName}</h3>
            </div>
        );
    }
}