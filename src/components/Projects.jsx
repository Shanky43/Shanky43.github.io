import {
    // AspectRatio, Video,  Flex,SimpleGrid,
    Box, Button, Center, Container, Heading, HStack, Spacer, Stack, Text,

} from '@chakra-ui/react'
import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { motion, spring, useAnimation } from "framer-motion"
// import { TbBrandRedux } from 'tb-ui-kit';
// import { Video,AspectRatioBox } from "@chakra-ui/core";
import FamousFriedFeast from "../videos/fff.mp4"
import ShoppingRoom from "../videos/ShoppingRoom.mp4"
import ShopDigital from "../videos/ShopDigital.mp4"
import Fashique from "../videos/Fashique.mp4"
import { useInView } from "react-intersection-observer"


const Projects = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.2
    })
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.2
    })
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.2
    })
    const { ref: ref4, inView: inView4 } = useInView({
        threshold: 0.2
    })
    const divAnimation1 = useAnimation()
    const divAnimation2 = useAnimation()
    const divAnimation3 = useAnimation()
    const divAnimation4 = useAnimation()

    // Animations for the first element
    useEffect(() => {
        if (inView1) {
            divAnimation1.start({
                x: 0,
                transition: { type: "spring", duration: 1, bounce: 0.3 }
            })
        }
        if (!inView1) {
            divAnimation1.start({ x: "-100vw" });


        }
    }, [inView1, divAnimation1])

    // Animations for the second element
    useEffect(() => {
        if (inView2) {
            divAnimation2.start({
                x: 0,
                transition: { type: "spring", duration: 1, bounce: 0.3 }
            })
        }
        if (!inView2) {
            divAnimation2.start({ x: "+100vw" });


        }
    }, [inView2, divAnimation2])


    // Animations for the third element
    useEffect(() => {
        if (inView3) {
            divAnimation3.start({
                x: 0,
                transition: { type: "spring", duration: 1, bounce: 0.3 }
            })
        }
        if (!inView3) {
            divAnimation3.start({ x: "-100vw" });


        }
    }, [inView3, divAnimation3])

    // Animations for the fourth element
    useEffect(() => {
        if (inView4) {
            divAnimation4.start({
                x: 0,
                transition: { type: "spring", duration: 1, bounce: 0.3 }
            })
        }
        if (!inView4) {
            divAnimation4.start({ x: "+100vw" });


        }
    }, [inView4, divAnimation4])





    return (
        <div id="projects" style={{ overflowX: 'hidden', zIndex: -2000 }}>
            <Container bgColor={"black"} maxW="100%" pt={[10, 20, 20, 20]}>
                <Center><Heading as="h1" size={"2xl"} color="#e4002b" >PROJECTS</Heading></Center>
                <motion.Box
                >
                    <div ref={ref1} class="project-card" style={{ zIndex: "-1000" }}>
                        <motion.div
                            animate={divAnimation1}
                            overflow="hidden"
                            max-width="100%"
                        >
                            <Center mt={["20%", "1%"]} pb="8">
                                <Stack minH={'100vh'} align={'center'} justify={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }} width={["100%", "90%"]} height={["40vh", "80vh"]} margin={["auto", "auto", "auto", "auto"]} >
                                    {/* <Flex  flex={1} align={'center'} justify={'center'}> */}
                                    <Box width={["90%", "90%", "90%", "50%"]} height={["80vh", "80vh", "80vh", "60vh"]} mr={["1", "5", "5", "8"]} ml={["5", "0"]} margin={["auto", "auto"]}

                                        style={{
                                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                            borderRadius: "2%",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <video

                                            src={Fashique}
                                            autoPlay
                                            loop
                                            controls={false}
                                            muted
                                            style={{
                                                objectFit: "fill",
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "2%",
                                                zIndex: -1000,
                                                opacity: 1
                                            }}
                                        />
                                    </Box>
                                    <Spacer />
                                    <Box width={["90%", "100%", "90%", "40%"]} height={["100vh", "100vh", "100vh", "60vh"]} ml={["1", "10"]} mr={["1", "0"]} pt={[20, 10, 10, 1]}>
                                        <Text fontSize={["1.5em", "3em"]} color="#66d1e5" fontWeight={"bold"} className="project-title">Fashique</Text>
                                        <Text fontSize={["1em", "1.5em"]} fontWeight={"bold"} color='#e4002b'>ASOS (clone)</Text>
                                        <Box>
                                            <Text textAlign={["justify", "justify"]} color="white" mt={5} fontSize={["2vh", "1.2em"]}>
                                                <Text as={"span"} color='white' className="project-description"><Button rounded={"full"} bg="#e4002b" ><a href="https://fashique.vercel.app/" class="project-deployed-link" target={"_blank"} without rel="noreferrer">Fashique</a></Button></Text>  is an e-commerce website that specializes in clothing for men and women. It offers a wide range of products such as dresses, tops, shirts, pants, and accessories. The website features a modern design and user-friendly interface, making it easy for customers to navigate and find what they are looking for.
                                            </Text>
                                            <Box style={{ margin: "auto" }} width={["62%", "100%"]} justifyContent={["center", "left"]} alignItems={["center", "left"]} alignContent={["center", "left"]}>

                                                <HStack>
                                                    <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                        rounded="10"
                                                        color="white" fontSize={"1em"}> <a href="https://fashique.vercel.app/" class="project-deployed-link" target="_blank" without rel="noreferrer"> DEMO &nbsp;<i class="fa-regular fa-clone"></i></a></Button>
                                                    </Center>
                                                    <Box size="sm" >
                                                        <Center ><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                            rounded="10"
                                                            color="white" fontSize={"1em"}> <a href="https://github.com/Vikas23sharma/large-house-6330" target={"_blank"} class="project-github-link" without rel="noreferrer"> CODE  &nbsp;<i class="fa-brands fa-github"></i></a></Button> </Center>
                                                    </Box>
                                                </HStack>

                                            </Box>
                                            {/* teckStack */}
                                            <Box>
                                                <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                    rounded="full"
                                                    color="white" >TECH STACK</Button>
                                                </Center>
                                                <Box size="sm" >
                                                    <Center > <HStack gap={5} fontSize={["2em", "3em"]} className="project-tech-stack">
                                                        {/* <i class={`fa-brands fa-html5`} style={{ color: "#fc490b" }}></i> */}
                                                        <i class="fa-brands  fa-react" style={{ color: "#68d2e5" }}></i>
                                                        <i class="fa-solid  fa-bolt" style={{ color: "#49c8c2" }}></i>
                                                        <i class="fa-brands fa-css3-alt" style={{ color: "#2196f3" }}></i>
                                                        <i class="fa-brands  fa-square-js" style={{ color: "#f0db4f" }}></i>
                                                        {/* <TbBrandRedux /> */}
                                                        {/* <span><img src={redux} alt="redux" h="1vh" pl={["-100px", 0, 0, 0, 0]} width={["100%", "22%"]} /></span> */}

                                                    </HStack></Center>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/* </Flex> */}
                                </Stack >
                            </Center>
                        </motion.div>
                    </div>
                    {/* Famous fried Chicken */}
                    <div ref={ref2} class="project-card" style={{ zIndex: "-1" }}>
                        <motion.div
                            animate={divAnimation2}
                            position="absolute"
                        // overflow-x="hidden"
                        >
                            <Center mt="1%" pb="8">
                                <Stack minH={'100vh'} align={'center'} justify={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }} width={["100%", "100%", "100%", "90%"]} height={["40vh", "50vh", "50vh", "80vh"]} margin={["auto", "none"]} class="project-card"  >
                                    {/* <Flex  flex={1} align={'center'} justify={'center'}> */}
                                    <Box width={["90%", "100%", "90%", "40%"]} height={["100vh", "100vh", "100vh", "60vh"]} ml={["1", "10"]} mr={["1", "0"]} pt={[20, 10, 10, 1]} >
                                        <Text fontSize={["1.5em", "3em"]} color="#66d1e5" fontWeight={"bold"} className="project-title" >Famous Fried Feast</Text>
                                        <Text fontSize={["1em", "1.5em"]} fontWeight={"bold"} color='#e4002b'>Kentucky Fried Chicken KFC. (clone)</Text>
                                        <Box>
                                            <Text textAlign={["justify", "justify"]} color="white" mt={5} fontSize={["2vh", "1.2em"]}>
                                                The <Text as={"span"} color='white' className="project-description"><Button rounded={"full"} bg="#e4002b" ><a href="https://fff-gilt.vercel.app/" class="project-deployed-link" target={"_blank"} without rel="noreferrer">Famous Fried Feast FFF</a></Button></Text> website offers a sleek and intuitive platform, providing customers with a seamless online experience to explore the menu, customize orders, and conveniently place an order for delivery or pickup.
                                            </Text>
                                            <Box style={{ margin: "auto" }} width={["62%", "100%"]} alignItems={["center", "left"]} alignContent={["center", "left"]}>

                                                <HStack>
                                                    <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                        rounded="10"
                                                        color="white" fontSize={"1em"}> <a href="https://fff-gilt.vercel.app/" class="project-deployed-link" target="_blank" without rel="noreferrer"> DEMO &nbsp;<i class="fa-regular fa-clone"></i></a></Button>
                                                    </Center>
                                                    <Box size="sm" >
                                                        <Center ><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                            rounded="10"
                                                            color="white" fontSize={"1em"}> <a href="https://github.com/Shanky43/haloed-ground-8588-" target={"_blank"} class="project-github-link" without rel="noreferrer"> CODE  &nbsp;<i class="fa-brands fa-github"></i></a></Button> </Center>
                                                    </Box>
                                                </HStack>

                                            </Box>
                                            {/* teckStack */}
                                            <Box>
                                                <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                    rounded="full"
                                                    color="white">TECH STACK</Button>
                                                </Center>
                                                <Box size="sm" >
                                                    <Center > <HStack gap={5} fontSize={["2em", "3em"]} className="project-tech-stack">
                                                        <i class="fa-brands  fa-react"
                                                            style={{ color: "#68d2e5" }}
                                                        ></i>
                                                        <i class="fa-solid  fa-bolt" style={{ color: "#49c8c2" }}></i>
                                                        <i class="fa-brands fa-css3-alt"
                                                            style={{ color: "#2196f3" }}
                                                        ></i>
                                                        <i class="fa-brands  fa-node" style={{ color: "#90c53f" }}></i>
                                                    </HStack></Center>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Spacer />
                                    <Box width={["90%", "90%", "90%", "50%"]} height={["80vh", "80vh", "80vh", "60vh"]} mr={["1", "5", "5", "8"]} ml={["5", "0"]} margin={["auto", "auto"]}
                                        style={{
                                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                            borderRadius: "2%",
                                            overflow: "hidden",
                                        }}
                                    >

                                        <video
                                            src={FamousFriedFeast}
                                            autoPlay
                                            loop
                                            controls={false}
                                            muted
                                            style={{
                                                objectFit: "fill",
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "2%"
                                            }}
                                        />
                                    </Box>
                                    {/* </Flex> */}
                                </Stack >
                            </Center>
                        </motion.div>
                    </div>
                    {/* ShoppingRoom */}
                    <div ref={ref3} class="project-card" style={{ zIndex: "-1" }}>
                        <motion.div
                            animate={divAnimation3}
                        >
                            <Center mt={["20%", "1%"]} pb="8">
                                <Stack minH={'100vh'} align={'center'} justify={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }} width={["100%", "90%"]} height={["40vh", "80vh"]} margin={["auto", "none"]} >
                                    {/* <Flex  flex={1} align={'center'} justify={'center'}> */}

                                    <Box width={["90%", "90%", "90%", "50%"]} height={["80vh", "80vh", "80vh", "60vh"]} mr={["1", "5", "5", "8"]} ml={["5", "0"]} margin={["auto", "auto"]}
                                        style={{
                                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                            borderRadius: "2%",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <video
                                            src={ShoppingRoom}
                                            autoPlay
                                            loop
                                            controls={false}
                                            muted
                                            style={{
                                                objectFit: "fill",
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "2%"
                                            }}
                                        />
                                    </Box>
                                    <Spacer />
                                    <Box width={["90%", "100%", "90%", "40%"]} height={["100vh", "100vh", "100vh", "60vh"]} ml={["1", "10"]} mr={["1", "0"]} pt={[20, 10, 10, 1]}>
                                        <Text fontSize={["1.5em", "3em"]} color="#66d1e5" fontWeight={"bold"} className="project-title">Shopping Room</Text>
                                        <Text fontSize={["1em", "1.5em"]} fontWeight={"bold"} color='#e4002b'>Amazon (clone)</Text>
                                        <Box>
                                            <Text textAlign={["justify", "justify"]} color="white" mt={5} fontSize={["2vh", "1.2em"]}>
                                                <Text as={"span"} color='white' className="project-description"><Button rounded={"full"} bg="#e4002b" ><a href="https://lustrous-gumption-92216f.netlify.app/" class="project-deployed-link" target={"_blank"} without rel="noreferrer">Shopping Room</a></Button></Text> is a leading e-commerce website with a vast product range, fast shipping, and competitive pricing. Its Prime membership program offers additional benefits, and its technological innovations have disrupted traditional retail.
                                            </Text>
                                            <Box style={{ margin: "auto" }} width={["62%", "100%"]} alignItems={["center", "left"]} alignContent={["center", "left"]}>

                                                <HStack>
                                                    <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                        rounded="10"
                                                        color="white" fontSize={"1em"}> <a href="https://lustrous-gumption-92216f.netlify.app/" target="_blank" class="project-deployed-link" without rel="noreferrer"> DEMO &nbsp;<i class="fa-regular fa-clone"></i></a></Button>
                                                    </Center>
                                                    <Box size="sm" >
                                                        <Center ><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                            rounded="10"
                                                            color="white" fontSize={"1em"}> <a href="https://github.com/Shanky43/tedious-advertisement-2369" class="project-github-link" target={"_blank"} without rel="noreferrer"> CODE  &nbsp;<i class="fa-brands fa-github"></i></a></Button> </Center>
                                                    </Box>
                                                </HStack>

                                            </Box>
                                            {/* teckStack */}
                                            <Box>
                                                <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                    rounded="full"
                                                    color="white">TECH STACK</Button>
                                                </Center>
                                                <Box size="sm" >
                                                    <Center > <HStack gap={5} fontSize={["2em", "3em"]} className="project-tech-stack">
                                                        <i class={`fa-brands fa-html5`} style={{ color: "#fc490b" }}></i>

                                                        <i class="fa-brands fa-css3-alt"

                                                            style={{ color: "#2196f3" }}
                                                        ></i>
                                                        <i class="fa-brands  fa-square-js" style={{ color: "#f0db4f" }}></i>

                                                    </HStack></Center>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/* </Flex> */}
                                </Stack >
                            </Center>
                        </motion.div>
                    </div>
                    {/* ShopDigital */}
                    <div ref={ref4} class="project-card" style={{ zIndex: "-1" }}>
                        <motion.div
                            animate={divAnimation4}
                        >
                            <Center mt="1%" pb="8">
                                <Stack minH={'100vh'} align={'center'} justify={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }} width={["100%", "100%", "100%", "90%"]} height={["40vh", "50vh", "50vh", "80vh"]} margin={["auto", "none"]} class="project-card"  >
                                    {/* <Flex  flex={1} align={'center'} justify={'center'}> */}
                                    <Box width={["90%", "100%", "90%", "40%"]} height={["100vh", "100vh", "100vh", "60vh"]} ml={["1", "10"]} mr={["1", "0"]} pt={[20, 10, 10, 1]}>
                                        <Text fontSize={["1.5em", "3em"]} color="#66d1e5" fontWeight={"bold"} className="project-title">Shop Digital</Text>
                                        <Text fontSize={["1em", "1.5em"]} fontWeight={"bold"} color='#e4002b'>Reliance Digital (clone)</Text>
                                        <Box>
                                            <Text textAlign={["justify", "justify"]} color="white" mt={5} fontSize={["2vh", "1.2em"]}>
                                                The <Text as={"span"} className="project-description" color='white'><Button rounded={"full"} bg="#e4002b" ><a href="https://shopdigital.netlify.app/" class="project-deployed-link" target={"_blank"} without rel="noreferrer">Shop Digital</a></Button></Text>  is a popular e-commerce platform in India that specializes in the sale of electronics and home appliances. It is owned by Shop Digital, which operates a chain of stores across the country.
                                            </Text>
                                            <Box style={{ margin: "auto" }} width={["62%", "100%"]} alignItems={["center", "left"]} alignContent={["center", "left"]}>

                                                <HStack>
                                                    <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                        rounded="10"
                                                        color="white" fontSize={"1em"}> <a href="https://shopdigital.netlify.app/" target="_blank" without rel="noreferrer" class="project-deployed-link"> DEMO &nbsp;<i class="fa-regular fa-clone"></i></a></Button>
                                                    </Center>
                                                    <Box size="sm" >
                                                        <Center ><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                            rounded="10"
                                                            color="white" fontSize={"1em"}> <a href="https://github.com/Shanky43/vivacious-silk-4958" target={"_blank"} class="project-tech-stack" without rel="noreferrer"> CODE  &nbsp;<i class="fa-brands fa-github"></i></a></Button> </Center>
                                                    </Box>
                                                </HStack>
                                            </Box>
                                            {/* teckStack */}
                                            <Box>
                                                <Center m="4"><Button bgColor={"#e4002b"} _hover={{ bg: "#e4002b" }}
                                                    rounded="full"
                                                    color="white">TECH STACK</Button>
                                                </Center>
                                                <Box size="sm" >
                                                    <Center > <HStack gap={5} fontSize={["2em", "3em"]} className="project-tech-stack">
                                                        <i class={`fa-brands fa-html5`} style={{ color: "#fc490b" }}></i>
                                                        <i class="fa-brands fa-css3-alt"
                                                            style={{ color: "#2196f3" }}
                                                        ></i>
                                                        <i class="fa-brands  fa-square-js" style={{ color: "#f0db4f" }}></i>
                                                    </HStack></Center>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Spacer />
                                    <Box width={["90%", "90%", "90%", "50%"]} height={["80vh", "80vh", "80vh", "60vh"]} mr={["1", "5", "5", "8"]} ml={["5", "0"]} margin={["auto", "auto"]}
                                        style={{
                                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                            borderRadius: "2%",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <video
                                            src={ShopDigital}
                                            autoPlay
                                            loop
                                            controls={false}
                                            muted
                                            style={{
                                                objectFit: "fill",
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "2%"
                                            }}
                                        />
                                    </Box>
                                    {/* </Flex> */}
                                </Stack >

                            </Center>
                        </motion.div>
                    </div>

                </motion.Box>


            </Container>

        </div>
    )
}

export default Projects