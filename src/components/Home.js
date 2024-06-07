import React, { useState } from 'react'
import BgToggle from './bgtoggle'
import bgquiz from '../Images/bg-quiz.jpeg'
import CreateQuiz from './createQuiz'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, DarkMode, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
function Home() {
   const [Quiz,setQuiz]=useState(false);
  return (
   
     <>
            <Box h='100%' p='5'>
               <Text textAlign="right"><BgToggle/></Text> 

                
               <Center>
                  {Quiz?<CreateQuiz/>:
                  <DarkMode>
               <Card maxH='m' maxW='sm' >
                  {/* <Heading size='xl' fontWeight="Bold"textAlign="center">QuizApp</Heading> */}
               <CardBody>
                  <Image
                     src={bgquiz}
                     alt=''
                     borderRadius='sm' 
                  />
                  <Stack mt='6' spacing='3'>
                     <Heading size='md'> Create Your Test</Heading>
                     
                  </Stack>
               </CardBody>
               <Divider />
               <CardFooter>
                  <ButtonGroup spacing='2'>
                     <Button variant='solid' colorScheme='blue'>
                     Take Quiz
                     </Button>
                     <Button variant='solid' colorScheme='blue' onClick={()=>setQuiz(true)}>
                     Create Quiz
                     </Button>
                  </ButtonGroup>
               </CardFooter>
               </Card>
               </DarkMode>
               }
               </Center>
            </Box>
   
        
     </>
  )
}

export default Home