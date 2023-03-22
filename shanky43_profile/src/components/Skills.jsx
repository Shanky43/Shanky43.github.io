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
import "../Styles/Skills.css"

const style = {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
}
const Skills = () => {
    const colorGrad = "linear-gradient(90deg, rgba(118,0,255,1) 0%, rgba(92,0,255,1) 35%, rgba(72,0,255,1) 100%)"
    return (
        <div>
            <Center bgColor="black"> <Heading as="h1" size={"2xl"} color={"#e4002b"}>SKILLS</Heading></Center>
            <Container pt={"5%"} maxW="100%" bgColor={"black"} pb="10%">
                <Center mb="10"> <Button rounded={"full"} p="7" bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}>
                    <Heading as="h1" size={["md", "xl"]} color={"white"}>TECHNICAL SKILLS</Heading></Button></Center>

                <Center>
                    <SimpleGrid columns={[2, 2, 3, 4]}
                        spacing={[5, 10]} textAlign="center" alignItems="center" alignContent={"center"} >
                        <Box
                            bg='#e000e5'
                            height={["15vh", "17vh","17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            _hover={{
                                backgroundColor: "black"
                            }}
                            rounded={["25", "50"]}
                            pt={12}
                            color={"#fc490b"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style} >  <i class={`fa-brands fa-html5`}></i>
                                <Text fontSize={[".2em", ".5em"]}  >HTML5</Text >
                            </VStack>

                        </Box>
                        <Box
                            bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={12}
                            color={"#2196f3"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style} >    <i class="fa-brands  fa-css3-alt"></i>
                                <Text fontSize={[".2em", ".5em"]} >CSS3</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={12}
                            color={"#f0db4f"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style} >    <i class="fa-brands  fa-square-js"></i>
                                <Text fontSize={[".2em", ".5em"]} >JAVASCRIPT</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={12}
                            color={"#68d2e5"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style} >    <i class="fa-brands  fa-react"></i>
                                <Text fontSize={[".2em", ".5em"]}  >REACT</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={4}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} style={style} >    <img src={redux} alt="redux" width="75%" />
                                <Text fontSize={[".2em", ".5em"]} color="#734abc">REDUX</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={12}
                            color={"#49c8c2"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style} >    <i class="fa-solid  fa-bolt"></i>
                                <Text fontSize={[".2em", ".5em"]} pt={5}>CHAKRA UI</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={9}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} pt={[0, 6]} style={style} >    <Center><img src={materialUI} alt="materialUI" width={["50", "100"]} /></Center>
                                <Text fontSize={[".2em", ".5em"]} color="#007fff" >MATERIAL UI</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={12}
                            color={"#90c53f"}
                        >
                            <VStack fontSize={["2em", "3em"]}>  <i class="fa-brands  fa-node"></i>
                                <Text fontSize={[".2em", ".5em"]} pt={[2, 5]} >NODE JS</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={12}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} style={style} >    <Center><img src={mongoDB} alt="mongoDB" width={["50", "100"]} /></Center>
                                <Text fontSize={[".2em", ".5em"]} color="#6cac48">MANGO DB</Text >
                            </VStack>

                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={12}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} style={style} >    <Center>   <img src={expressJS} alt="express" width={["50", "100"]} /></Center>
                                <Text fontSize={[".2em", ".5em"]} color="#c4443f">EXPRESS JS</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={12}
                            color={"white"}
                        >
                            <VStack fontSize={["2em", "3em"]}>  <i class="fa-brands  fa-github" style={{ backgroundColor: "black", borderRadius: "100%" }}></i>
                                <Text fontSize={[".2em", ".5em"]} pt={[0, 1]} color="#000000">GIT HUB</Text >
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={12}
                            color={"white"}
                        >

                            <VStack fontSize={["1em", "3em"]} style={style} >   <Center>   <img src={vsCode} alt="express" width={["50", "100"]} /></Center>
                                <Text fontSize={[".2em", ".5em"]} pt={[2, 3]} color="#4ca9f4">VS CODE</Text >
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
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={7}
                            color={"white"}
                        >
                            <VStack  >  <img src="https://abhijitnr.github.io/static/media/collabrative.697daf5b0a056e39d2ea.png" alt="COLLABORATION" width={["70", "100"]} />
                                <Text fontSize={[".2em", "1em"]} pt={[1,3]} >COLLABORATION</Text >
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={9}
                            color={"white"}
                        >
                            <VStack style={style}>  <Center><img src="https://abhijitnr.github.io/static/media/communication.e3384d6ff9fda6414c9a.png" alt="COMMUNICATION SKILLS" width={["70", "100"]} /></Center>
                                <Text fontSize={[".2em", "1em"]} pt={5}>COMMUNICATION SKILLS</Text >
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={8}
                            color={"white"}
                        >
                            <VStack style={style}>  <Center><img src="https://abhijitnr.github.io/static/media/creative_thinking.445675a0a00c2757a1d6.png" alt="CREATIVE THINKING" width={["70", "100"]} /></Center>
                                <Text fontSize={[".2em", "1em"]}  pt={[2,1]} >CREATIVE THINKING</Text >
                            </VStack>

                        </Box>
                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={7}
                            color={"white"}
                        >
                            <VStack style={style}>  <Center>   <img src="https://abhijitnr.github.io/static/media/problem_solving.ddf49384f01d0b6de6c0.png" alt="problem solving" width={["70", "100"]} /></Center>
                                <Text fontSize={[".2em", "1em"]} pt={[0,2]}>PROBLEM SOLVING</Text >
                            </VStack>
                        </Box>

                        <Box bg='#e000e5'
                            height={["15vh",  "17vh","17vh","24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded="50"
                            pt={5}
                            color={"white"}
                        >

                            <VStack style={style}> <Center>   <img src="https://abhijitnr.github.io/static/media/time_management.4644a4b2b8ed5f538eec.png" alt="time management" width={["70", "100"]} /></Center>
                                <Text fontSize={[".2em", "1em"]} pt={[0,5]}>TIME MANAGEMENT</Text>
                            </VStack>
                        </Box>

                    </SimpleGrid>
                </Center>

            </Container>
        </div>
    )
}

export default Skills