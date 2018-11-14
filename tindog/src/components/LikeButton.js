import React from "react";
import { Button, Icon } from "semantic-ui-react"

const handleClick = () =>{
    console.log("click on like button")
}

const LikeButton = () =>(
<div class="ui labeled icon" tabindex="0">
  <div class="ui red button">
    <i class="heart icon"></i> Like
  </div>  
</div>

)

export default LikeButton;