import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

function Form() {
  return (
    <FormControl>
    <FormLabel>Email address</FormLabel>
    <Input type='email' />
    <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  )
}

export default Form