import {
    AspectRatio, Video,
    Box, Button, Center, Container, Heading, HStack, Spacer,

} from '@chakra-ui/react'
import React from 'react'
// import { Video,AspectRatioBox } from "@chakra-ui/core";
import FamousFriedFeast from "../videos/fff.mp4"

const Projects = () => {
    return (
        <div>
            <Container bgColor={"black"} maxW="100%" >
                <Center><Button><Heading as="h1" size={"2xl"} >PROJECTS</Heading></Button></Center>
                <Center mt="10%" pb="10%">
                    <HStack border={"2px solid red"} width="90%" height={"80vh"} >
                        <Box border={"2px solid red"} width="40%" height={"60vh"} ml="10" >
                        </Box>
                        <Spacer />
                        <Box border={"2px solid red"} width="50%" height={"60vh"} mr="8">

                            <video
                                src={FamousFriedFeast}
                                autoPlay
                                loop
                                controls={false}
                                style={{
                                    objectFit: "contain",
                                    width: "100%",
                                    height: "100%",
                                    // alignContent:"center",
                                }}
                            />
                        </Box>
                    </HStack>
                </Center>

            </Container>

        </div>
    )
}

export default Projects