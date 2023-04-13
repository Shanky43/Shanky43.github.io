import { Center, Container, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
// import bgImage from "../images/backgroundimage.jpg"
// let imageurl = "https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80"

const AboutMe = () => {
  const wordSpacing = useBreakpointValue({ base: ".1em", md: "normal" })

  return (
    <div id="about" class="about section">
      <Container maxW={"100%"} h={["50%", "80%", "80%", "100%"]}
        backgroundRepeat="no-repeat"
        backgroundSize="100% 150%"
        bgColor="black"
        pb="10%"
        margin={["auto", "auto", "auto", "auto"]}

      >
        <Center pt="15%" margin={["auto", "auto", "auto", "auto"]}>
          <Heading as={"h1"} size={"2xl"} color="#e4002b" ><Text as="span" id="about">ABOUT ME</Text></Heading></Center>
        <Center >
          <Text w={"80%"} mt="10%"
            ml={["auto", "auto", "auto", "auto"]}
            mr={["auto", "auto", "auto", "auto"]}
            fontSize={"1.5em"}
            color="white"
            textAlign={"justify"}
            size={["md", "2xl"]}
            wordSpacing={wordSpacing}
          >
            <Text as="span" id="user-detail-intro" >
              As a professional full stack web developer, I possess a wealth of knowledge and experience in both front-end and back-end development, utilizing a range of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. My passion lies in creating sleek, responsive interfaces that are tightly integrated with powerful back-end systems, and I am constantly staying up-to-date with the latest trends and practices to deliver optimal results. With a keen eye for detail and a commitment to excellence, I am dedicated to delivering top-tier web solutions that exceed expectations
            </Text>
          </Text>
        </Center>
      </Container>
    </div>

  )
}

export default AboutMe
