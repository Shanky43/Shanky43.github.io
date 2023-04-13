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
        <div id="skills">
            <Center bgColor="black"> <Heading as="h1" size={"2xl"} color={"#e4002b"}>SKILLS</Heading></Center>
            <Container pt={"5%"} maxW="100%" bgColor={"black"} pb="10%">
                <Center mb="10"> <Button rounded={"full"} p="7" bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}>
                    <Heading as="h1" size={["md", "xl"]} color={"white"}>TECHNICAL SKILLS</Heading></Button></Center>

                <Center ml={["auto", "auto", "auto", "auto"]} mr={["auto", "auto", "auto", "auto"]}>
                    <SimpleGrid columns={[2, 2, 3, 4]} className="skills-card"
                        spacing={[5, 10]} textAlign="center" alignItems="center" alignContent={"center"} >
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            _hover={{
                                backgroundColor: "black"
                            }}
                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 9]}
                            color={"#fc490b"}
                        >
                            <span>
                                <VStack fontSize={["2em", "3em"]} style={style}>  <Text as="span" className="skills-card-img"><i class={`fa-brands fa-html5`}></i></Text>
                                    <Text fontSize={[".6em", ".5em"]} ><Text as="span" className="skills-card-name" >HTML5</Text> </Text >
                                </VStack>
                            </span>

                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 9]}
                            color={"#2196f3"}
                        >

                            <VStack fontSize={["2em", "3em"]} style={style}> <Text as="span" className="skills-card-img"> <i class="fa-brands  fa-css3-alt"></i></Text>
                                <Text fontSize={[".6em", ".5em"]} ><Text as="span" className="skills-card-name">CSS3</Text></Text >
                            </VStack>

                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 9]}
                            color={"#f0db4f"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style} > <Text as="span" className="skills-card-img"><i class="fa-brands  fa-square-js"></i></Text>
                                <Text fontSize={[".55em", ".5em"]} ><Text as="span" className="skills-card-name">JAVASCRIPT</Text></Text >
                            </VStack>
                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 9]}
                            color={"#68d2e5"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style}> <Text as="span"><i class="fa-brands  fa-react"></i></Text>
                                <Text fontSize={[".55em", ".5em"]} ><Text as="span" className="skills-card-name">REACT</Text></Text >
                            </VStack>
                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={4}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} style={style} > <img src={redux} alt="redux" width="75%" className="skills-card-img" />
                                <Text fontSize={["1em", ".5em"]} color="#734abc" > <Text as="span">REDUX</Text> </Text >
                            </VStack>
                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 8]}
                            color={"#49c8c2"}
                        >
                            <VStack fontSize={["2em", "3em"]} style={style} ><Text as="span" className="skills-card-img"><i class="fa-solid  fa-bolt"></i></Text>
                                <Text fontSize={[".5em", ".5em"]} pt={[1, 4]} ><Text as="span" className="skills-card-name">CHAKRA UI</Text></Text >
                            </VStack>
                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 12]}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} pt={[0, 4]} style={style}>    <Center><img src={materialUI} className="skills-card-img" alt="materialUI" width={["50", "100"]} /></Center>
                                <Text fontSize={[".9em", ".5em"]} color="#007fff"  ><Text as="span" className="skills-card-name">MATERIAL UI</Text></Text >
                            </VStack>
                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 9]}
                            color={"#90c53f"}
                        >
                            <VStack fontSize={["2em", "3em"]}> <Text as="span" className="skills-card-img" ><i class=" fa-brands fa-node"></i></Text>
                                <Text fontSize={[".5em", ".5em"]} pt={[1, 3]} ><Text as="span" className="skills-card-name">NODE JS</Text></Text >
                            </VStack>
                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 12]}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} style={style} >    <Center><img src={mongoDB} alt="mongoDB" className="skills-card-img" width={["50", "100"]} /></Center>
                                <Text fontSize={[".9em", ".5em"]} color="#6cac48" > <Text as="span" className="skills-card-name" >MONGO DB</Text></Text >
                            </VStack>

                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 12]}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} style={style}>    <Center>   <img src={expressJS} className="skills-card-img" alt="express" width={["50", "100"]} /></Center>
                                <Text fontSize={[".9em", ".5em"]} color="#c4443f" ><Text as="span" className="skills-card-name">EXPRESS JS</Text></Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}

                            rounded={["25", "50"]}
                            pt={[6, 7, 7, 9]}
                            color={"white"}
                        >
                            <VStack fontSize={["2em", "3em"]}> <Text as="span" className="skills-card-img"> <i class="fa-brands  fa-github" style={{ backgroundColor: "black", borderRadius: "100%" }}></i></Text>
                                <Text fontSize={[".4em", ".5em"]} pt={[0, 1]} color="#000000" ><Text as="span" className="skills-card-name" >GIT HUB</Text></Text >
                            </VStack>
                        </Box>
                        <Box

                            bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={[5, 7, 7, 12]}
                            color={"white"}
                        >
                            <VStack fontSize={["1em", "3em"]} style={style}>   <Center>   <img src={vsCode} className="skills-card-img" alt="express" width={["50", "100"]} /></Center>
                                <Text fontSize={[".9em", ".5em"]} pt={[3, 3]} color="#4ca9f4" ><Text as="span" className="skills-card-name">VS CODE</Text></Text >
                            </VStack>
                        </Box>
                    </SimpleGrid>
                </Center>

            </Container >

            {/* soft skill */}
            < Container pt={"5%"} maxW="100%" bgColor={"black"} pb="10%" >
                <Center mb="10"> <Button rounded={"full"} p="7" bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}>
                    <Heading as="h1" size={["md", "xl"]} color={"white"}>SOFT SKILLS</Heading></Button></Center>

                <Center>
                    <SimpleGrid columns={[1, 2, 3, 4]}
                        spacing={10} textAlign="center" alignItems="center" alignContent={"center"} >
                        <Box bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={[2, 7]}
                            color={"white"}
                        >
                            <span>
                                <VStack  >  <img src="https://abhijitnr.github.io/static/media/collabrative.697daf5b0a056e39d2ea.png" alt="COLLABORATION" width={["70", "100"]} />
                                    <Text fontSize={[".4em", "1em"]} pt={[1, 3]} >COLLABORATION</Text >
                                </VStack>
                            </span>
                        </Box>
                        <Box bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={[4, 9]}
                            color={"white"}
                        >
                            <VStack style={style}>  <Center><img src="https://abhijitnr.github.io/static/media/communication.e3384d6ff9fda6414c9a.png" alt="COMMUNICATION SKILLS" width={["70", "100"]} /></Center>
                                <Text fontSize={[".4em", "1em"]} pt={[1, 5]} >COMMUNICATION SKILLS</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={[3, 8]}
                            color={"white"}
                        >
                            <VStack style={style}>  <Center><img src="https://abhijitnr.github.io/static/media/creative_thinking.445675a0a00c2757a1d6.png" alt="CREATIVE THINKING" width={["70", "100"]} /></Center>
                                <Text fontSize={[".4em", "1em"]} pt={[2, 1]} >CREATIVE THINKING</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={[3, 7]}
                            color={"white"}
                        >
                            <VStack style={style}>  <Center>   <img src="https://abhijitnr.github.io/static/media/problem_solving.ddf49384f01d0b6de6c0.png" alt="problem solving" width={["70", "100"]} /></Center>
                                <Text fontSize={[".4em", "1em"]} pt={[0, 2]} >PROBLEM SOLVING</Text >
                            </VStack>
                        </Box>
                        <Box bg='#e000e5'
                            height={["17vh", "17vh", "17vh", "24vh"]}
                            width={["8em", "15em"]}
                            style={{ background: colorGrad }}
                            rounded={["25", "50"]}
                            pt={[3, 5]}
                            color={"white"}
                        >
                            <VStack style={style}> <Center>   <img src="https://abhijitnr.github.io/static/media/time_management.4644a4b2b8ed5f538eec.png" alt="time management" width={["70", "100"]} /></Center>
                                <Text fontSize={[".4em", "1em"]} pt={[0, 5]} >TIME MANAGEMENT</Text>
                            </VStack>
                        </Box>
                    </SimpleGrid>
                </Center>

            </Container >
        </div >
    )
}

export default Skills