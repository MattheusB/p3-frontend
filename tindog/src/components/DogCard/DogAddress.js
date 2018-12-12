import React, {Component} from "react";

export default class DogAddress extends Component{
    render(){
        return(
            <div>
                <b>Endereço: </b>{this.props.address}
            </div>
        );
    }
}