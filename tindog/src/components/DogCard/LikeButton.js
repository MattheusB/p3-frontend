import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react/../../../../Library/Caches/typescript/2.9/node_modules/@types/react/../../../../Library/Caches/typescript/2.9/node_modules/@types/react/../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
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