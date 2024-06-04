import React from 'react'
import BgToggle from './bgtoggle'
import { Box, Text } from '@chakra-ui/react'
function Home() {
  return (

     <>
            <Box h='100%' >
               <Text textAlign="right"><BgToggle/></Text> 
                <Text fontSize="50px" fontWeight="Bold"textAlign="center">QuizApp</Text>
            </Box>
   
        
     </>
  )
}

export default Home