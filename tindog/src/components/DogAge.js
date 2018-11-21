import React, {Component} from "react";

export default class DogAge extends Component{
    render(){
        return(
            <div>
                <b>Idade: </b>{this.props.age} ano(s)
            </div>
        );
    }
}