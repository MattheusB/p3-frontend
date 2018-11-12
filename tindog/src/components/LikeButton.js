import React from "react";
import { Button, Icon } from "semantic-ui-react"

const handleClick = () =>{
    console.log("click on like button")
}

const LikeButton = () =>(
    <div>
    <Button 
      fluid 
      color='blue' 
      animated='vertical'
      onClick={handleClick}>
      <Button.Content hidden>Adicionar ao carrinho</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
)

export default LikeButton;