import React from 'react'
import Container from './StyledButton'

const Button = ({id, text, onClick}) => {
  return (
    <Container id={id} onClick={onClick}>
       {text}
    </Container>
  )
}

export default Button