import React, {Component} from "react";

export default class DogDescription extends Component{
    render(){
        return(
            <div>
                <b>Descrição: </b>{this.props.description}
            </div>
        );
    }
}