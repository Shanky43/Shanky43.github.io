import { Box, Container, Heading, Text, Center, Divider, Button } from '@chakra-ui/react'
import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div id='footer'>
      <Container maxW={"100%"} pt="10%" bg="black" pb={"1%"}>
        <Box >
          <Box width={["90%", "80%"]} margin="auto">
            <Heading as={"h1"} p={["5", "15"]} textAlign={["center", "center", "left", "left"]}>
              <Text color={"#e4002b"} as="span">S</Text><Text as="span" letterSpacing={"2px"}>HANKAR.</Text> <Text as="span" color={"#e4002b"} >S</Text>
            </Heading>
            <Divider />
            <Center>
              <Text width={["35em", "50em"]} p={["5", "15"]} textAlign={["justify", "justify", "justify", "center"]} fontSize={[".6em", "2em"]}>
                A focused <Text as="span" color='#e4002b'>Full Stack Web Developer</Text> building the Frontend of Websites and Web Applications that leads to the success of the overall product
              </Text>
            </Center>
          </Box>
        </Box>
        <hr />
        <Center p="10"> <p><Text as="span" color='#e4002b'>©</Text> Copyright 2023. Made by Shankar <Text as="span" color='#e4002b'>S</Text></p></Center>
      </Container>
      <div>
        <Box style={{ position: 'fixed', bottom: 50, right: 50 }}>
          <Button bgColor={"#e4002b"} _hover={{ color: "#e4002b", bgColor: "white" }}><Link to={"home"} spy={true} smooth={true} offset={50} duration={500}><BsFillArrowUpCircleFill /></Link></Button>
        </Box>
      </div>
    </div>
  )
}

export default Footer