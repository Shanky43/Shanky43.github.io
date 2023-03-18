import {
    Box, Center, Container, Grid, GridItem,
    SimpleGrid, Spacer, Text, VStack, Heading, Button,
} from '@chakra-ui/react'
import React from 'react'
import redux from "../images/redux.png"
import materialUI from "../images/materialUI.png"
import mongoDB from "../images/mongoDB.png"
import expressJS from "../images/express.png"
import vsCode from "../images/vsCode.png"
const Skills = () => {
    const colorGrad = "linear-gradient(90deg, rgba(118,0,255,1) 0%, rgba(92,0,255,1) 35%, rgba(72,0,255,1) 100%)"
    return (
        <div>
            <Center bgColor="black"> <Heading as="h1" size={"2xl"} color={"#e4002b"}>SKILLS</Heading></Center>
            <Container pt={"5%"} maxW="100%" bgColor={"black"} pb="10%">
                <Center mb="10"> <Button rounded={"full"} p="7" bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}>
                    <Heading as="h1" size={["md", "xl"]} color={"white"}>TECHNICAL SKILLS</Heading></Button></Center>

                <Center>
                    <SimpleGrid columns={[1, 2, 3, 4]}
                        spacing={10} textAlign="center" alignItems="center" alignContent={"center"} >
                        <Box
                            bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"#fc490b"}
                        >
                            <VStack>  <i class="fa-brands fa-5x fa-html5"></i>
                                <Text>HTML5</Text>
                            </VStack>

                        </Box>
                        <Box
                            bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"#2196f3"}
                        >
                            <VStack>  <i class="fa-brands fa-5x fa-css3-alt"></i>
                                <Text>CSS3</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"#f0db4f"}
                        >
                            <VStack>  <i class="fa-brands fa-5x fa-square-js"></i>
                                <Text>JAVASCRIPT</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"#68d2e5"}
                        >
                            <VStack>  <i class="fa-brands fa-5x fa-react"></i>
                                <Text>REACT</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={4}
                            color={"white"}
                        >
                            <VStack>  <img src={redux} alt="redux" />
                                <Text>REDUX</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}
                            rounded="50"
                            pt={12}
                            color={"#49c8c2"}
                        >
                            <VStack>  <i class="fa-solid fa-5x fa-bolt"></i>
                                <Text pt={5}>CHAKRA UI</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={9}
                            color={"white"}
                        >
                            <VStack>  <Center><img src={materialUI} alt="materialUI" width={"100"} /></Center>
                                <Text>MATERIAL UI</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"#90c53f"}
                        >
                            <VStack>  <i class="fa-brands fa-5x fa-node"></i>
                                <Text pt={5}>NODE JS</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"white"}
                        >
                            <VStack>  <Center><img src={mongoDB} alt="mongoDB" width={"100"} /></Center>
                                <Text>MANGO DB</Text>
                            </VStack>

                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"white"}
                        >
                            <VStack>  <Center>   <img src={expressJS} alt="express" width={"100"} /></Center>
                                <Text>EXPRESS JS</Text>
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"white"}
                        >
                            <VStack>  <i class="fa-brands fa-5x fa-github" style={{ backgroundColor: "black", borderRadius: "100%" }}></i>
                                <Text pt={5}>GIT HUB</Text>
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={12}
                            color={"white"}
                        >

                            <VStack> <Center>   <img src={vsCode} alt="express" width={"100"} /></Center>
                                <Text pt={5}>VS CODE</Text>
                            </VStack>
                        </Box>

                    </SimpleGrid>
                </Center>

            </Container>

            {/* soft skill */}
            <Container pt={"5%"} maxW="100%" bgColor={"black"} pb="10%">
                <Center mb="10"> <Button rounded={"full"} p="7" bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}>
                    <Heading as="h1" size={["md", "xl"]} color={"white"}>SOFT SKILLS</Heading></Button></Center>

                <Center>
                    <SimpleGrid columns={[1, 2, 3, 4]}
                        spacing={10} textAlign="center" alignItems="center" alignContent={"center"} >
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={7}
                            color={"white"}
                        >
                            <VStack>  <img src="https://abhijitnr.github.io/static/media/collabrative.697daf5b0a056e39d2ea.png" alt="COLLABORATION" width={"100"}/>
                                <Text>COLLABORATION</Text>
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={9}
                            color={"white"}
                        >
                            <VStack>  <Center><img src="https://abhijitnr.github.io/static/media/communication.e3384d6ff9fda6414c9a.png" alt="COMMUNICATION SKILLS" width={"100"} /></Center>
                                <Text pt={5}>COMMUNICATION SKILLS</Text>
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={8}
                            color={"white"}
                        >
                            <VStack>  <Center><img src="https://abhijitnr.github.io/static/media/creative_thinking.445675a0a00c2757a1d6.png" alt="CREATIVE THINKING" width={"100"} /></Center>
                                <Text >CREATIVE THINKING</Text>
                            </VStack>

                        </Box>
                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={7}
                            color={"white"}
                        >
                            <VStack>  <Center>   <img src="https://abhijitnr.github.io/static/media/problem_solving.ddf49384f01d0b6de6c0.png" alt="problem solving" width={"100"} /></Center>
                                <Text pt={1}>PROBLEM SOLVING</Text>
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["25vh", "30vh"]}
                            width={"15em"}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={5}
                            color={"white"}
                        >

                            <VStack> <Center>   <img src="https://abhijitnr.github.io/static/media/time_management.4644a4b2b8ed5f538eec.png" alt="time management" width={"100"} /></Center>
                                <Text pt={5}>TIME MANAGEMENT</Text>
                            </VStack>
                        </Box>

                    </SimpleGrid>
                </Center>

            </Container>
        </div>
    )
}

export default Skills