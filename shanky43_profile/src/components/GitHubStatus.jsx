import { Box, Center, Heading, SimpleGrid, Spacer, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const GitHubStatus = () => {
    return (
        <div >
            <Box pt="5%" textAlign={"center"} bgColor={"black"} margin={["auto", "auto", "auto", "auto"]}><Heading as={"h1"} size={"2xl"} color="#e4002b">GIT-HUB STATS</Heading></Box>
            <Box style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                <Center>
                    <VStack>

                        <Box pt="15%">
                            <a href="https://git.io/streak-stats">
                                <img src="https://github-readme-streak-stats.herokuapp.com?user=Shanky43&theme=dark&date_format=M%20j%5B%2C%20Y%5D&type=png&fire=DF2929&stroke=FF5B5B&ring=FF182C" alt="GitHub Streak" />
                            </a>
                        </Box>
                    </VStack>

                </Center>
            </Box>
            <Center style={{ backgroundColor: 'black' }} pt="5%">
                <Stack direction={{ base: 'column', md: 'column', lg: 'row' }} gap={["1", "5"]} >
                    <Box>
                        <picture style={{ backgroundColor: 'black', }} h={["100vh", "100vh", "100vh", "100vh"]}>
                            <source
                                srcSet="https://github-readme-stats.vercel.app/api?username=Shanky43&show_icons=true&theme=dark&count_private=true&title_color=e4002b&icon_color=e4002b&ring=e4002b&hide_border=true"
                                media="(prefers-color-scheme: dark)"
                            />
                            <source
                                srcSet="https://github-readme-stats.vercel.app/api?username=Shanky43&show_icons=true&count_private=true&title_color=e4002b&icon_color=e4002b&ring=e4002b&hide_border=true"
                                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                            />
                            <img src="https://github-readme-stats.vercel.app/api?username=Shanky43&show_icons=true&count_private=true&title_color=e4002b&icon_color=e4002b&ring=e4002b&hide_border=true" alt="" style={{ border: '1px solid white', borderRadius: "10px" }} />
                        </picture>
                    </Box>
                    <Spacer />
                    <Box>
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shanky43&layout=compact&langs_count=8&theme=dark&title_color=e4002b" alt="Top Languages" width={["100%", "100vw", "100vw", "100vw"]} height={["80vh", "80vh", "80vh", "100vh"]} />

                    </Box>

                </Stack>
            </Center>


        </div>
    )
}

export default GitHubStatus