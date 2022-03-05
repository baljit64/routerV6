import { Button, styled } from '@mui/material'
import React from 'react'

export default function Buttons() {
  return (
    <div>
<h5>buttons</h5>
<MyButton>Custom Button</MyButton>
    </div>
  )
}
const MyButton=styled(Button)`
   background:grey;
   color:red; 
   box-shadow:1px 2px 3px #000;
    &:hover{
    background:yellow;
   box-shadow:1px 2px 7px #000;

  }

`