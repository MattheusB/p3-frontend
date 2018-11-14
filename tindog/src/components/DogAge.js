import React, {Component} from "react";

export default class DogAge extends Component{
    render(){
        return(
            <div>
                {this.props.age}
            </div>
        );
    }
}