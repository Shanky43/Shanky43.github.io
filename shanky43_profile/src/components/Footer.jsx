import { Box,  Container, Heading,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Container maxW={"100%"} pt="10%" bg="black" pb={"10%"}>
            <Box >
               <Box  width={["90%","80%"]} margin="auto"> 
                <Heading as={"h1"} p={["5","15"]}>
                    SHANKAR S
                </Heading>
                <hr />
                <Text width={["35em","50em"]}  p={["5","15"]} textAlign={["justify","left"]} fontSize={[".6em","2em"]}>
                A focused Full Stack Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                </Text>

                 
               </Box>

            </Box>
            <hr />
            <Footer>© Copyright 2023. Made by Shankar S</Footer>
        </Container>
    </div>
  )
}

export default Footer