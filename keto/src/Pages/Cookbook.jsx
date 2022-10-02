import React from "react"
import {status,AlertIcon,CheckCircleIcon, CircleIcon} from "@chakra-ui/icons"
import {Button,Box, Grid ,VStack,Heading,Text,Icon,InputGroup,Input,InputRightAddon,Image} from "@chakra-ui/react"
import SimpleSlider from "../ExtraComponent/Slider2"
import Footer from "../Navbar/Footer"
const Cookbook=()=>{
    return(
    <Box >
        <Box  >
        

            <Grid  templateColumns="repeat(2,1fr)"     bg='white' color='#262626'>
                <VStack  ml="10%" textAlign="justify">
                    <Heading mt="10%" mb="10%" size="3xl"color='#1ca677'>Carb Manager's <br/>Keto Diet Cookbook</Heading>
                    <Heading  size="md" color="black">The Easiest Way to Lose Weight Fast with 101 Recipes That You Can Track in the App with QR Codes</Heading>
                    <Heading  size="sm" color="black">The Official Companion Cookbook to the #1 Keto Diet Tracking App</Heading>
                        <Grid mt="10%" templateColumns="repeat(2,1fr)" gap="10" >
                            <Button mt="40%" borderRadius="50px" w="120%"  bg="green.400" >Buy the Softcover</Button>
                            <Image mt="40%" borderRadius="50px" w="150px"src="https://bkpk.me/wp-content/uploads/2013/07/scr2557-proj697-a-kindle-logo-w-rgb-lg-710x190.jpg"/>
                        </Grid>
                        <Grid mt="30%" templateColumns="repeat(4,1fr)" gap="2rem" >
                            <Image  w="100%"  src="https://www.carbmanager.com/_nuxt/img/36c91f7.svg" />
                            <Image  w="100%"  src="https://www.carbmanager.com/_nuxt/img/40b7e24.svg" /> 
                            <Image  w="100%"  src="https://www.carbmanager.com/_nuxt/img/08305ea.svg" />
                            <Image  w="100%"  src="https://www.carbmanager.com/_nuxt/img/b069d82.svg" />
                        </Grid>
                </VStack>   
                <VStack alignItems="right" >
                    <Box  >
                        <Image src='https://images.prismic.io/cm-website/099ea90a-e325-4f61-bea5-f726a803d0d8_cookbook-1.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'  alt='ph' />
                    </Box>
                </VStack> 
            </Grid>
            <Heading w="30%" mt="1%" ml="10%" borderRadius="50px" size="sm" bg="whitesmoke" color="black">Register your purchase here to get 10 free bonus recipes!</Heading>
            <Heading mt=" 5%"textAlign={"center"} size="lg" >The Ultimate Keto Cookbook for Your Healthy,<br/> Low Carb Lifestyle</Heading>
            
            <Box>
            <Grid className="middle"  m="auto" mt="10%"  columnGap="-50px" rowGap="15%" templateColumns="repeat(2,1fr)">
                <Image ml="30%" htmlHeight="700px" htmlWidth="315px" borderTopLeftRadius="50px" src='https://images.prismic.io/cm-website/9ff0d62c-3313-48a5-9f84-106eb7200ea0_article_1.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'></Image>

            <Box mr="20%"><Text fontSize='3xl'  textAlign="justify">Keto Made Easy .</Text>
            <Text width="60%" fontSize='xs' textAlign="justify">Just scan the QR code that’s included with each recipe for easy tracking in the Carb Manager app. Just scan it. Log it. And get back to living your life!</Text>
                
            </Box>
        
        <Box ml="30%"><Text fontSize='3xl'  textAlign="justify">You Won’t Even Miss the Carbs .</Text>
            <Text  width="60%" fontSize='xs' textAlign="justify">
            From easy, weeknight-friendly dinners to make-ahead, freezable meal prep, to snacks, sides and delectable sweet treats, you’ll find tasty choices for every craving and occasion.</Text>
        </Box>
        <Image mr="30%" htmlHeight="700px" htmlWidth="315px" borderBottomLeftRadius="50px" src="https://images.prismic.io/cm-website/93b4b384-1b94-4f8a-8f08-4f24a2b4b590_article_2.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"  ></Image>
        
        <Image ml="30%" htmlHeight="700px" htmlWidth="315px" borderTopRightRadius="50px" src="https://images.prismic.io/cm-website/b44a1724-c7eb-441c-9a2f-47fb9523aff3_article_3.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" ></Image>
        
        <Box mr="30%"><Text fontSize='3xl'  textAlign="justify">Recipes for the Entire Family .</Text>
            <Text width="60%" fontSize='xs' textAlign="justify">
            Family-friendly Keto recipes like Blueberry Lemon Pancakes, Chicken Burrito Bowls, and Breaded Meatballs w/ Pesto Noodles that will satisfy even the pickiest eaters in your household.</Text>
                
        </Box>
            
            <Box ml="30%" ><Text fontSize='3xl'  textAlign="justify">Who Knew Improving Your Health Could be so Delicious ?</Text>
            <Text width="60%" fontSize='xs' textAlign="justify">Keto is more than a diet. It’s a lifestyle. And it’s here to stay. The Carb Manager Keto Cookbook is the easy and delicious way to join the Keto revolution and experience the power of Keto for yourself.</Text>
                
            </Box>
            <Image mr="30%" htmlHeight="700px" htmlWidth="315px" borderBottomRightRadius="50px" src="https://images.prismic.io/cm-website/d931c228-e3c6-4c72-b635-cf0f550a1279_article_4.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" ></Image>
            </Grid>
            </Box>
            
        </Box>


        <Box mt="50%"  bg="whitesmoke">
            <Grid  templateColumns="repeat(2,1fr)">
                <Box ml="30%"><Image src="https://images.prismic.io/cm-website/a2336937-a862-433f-909a-fbcd645f6c5b_kindle.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"/></Box>
                <Box mt="20%">
                    <Heading size="lg">Available on Amazon Kindle!</Heading>
                    <Heading size="sm">
                    As convenient as the Carb Manager app, grab the cookbook on Kindle <br/>
                    and have it in your pocket—and kitchen—wherever you are!
                    </Heading>
                    <Grid mr="45%" templateColumns="repeat(2,1fr)" gap="1">
                            <Button ml="20%"  bg="green.400" mt="40%" borderRadius="50px" w="70%"  >Buy the Softcover</Button>
                            <Image mt="40%"  borderRadius="50px" w="150px"src="https://bkpk.me/wp-content/uploads/2013/07/scr2557-proj697-a-kindle-logo-w-rgb-lg-710x190.jpg"/>
                    </Grid>
                </Box>
            </Grid>
            {/* <Image src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F345-3454574_vegetable-outline-by-nimblechapps-vegetable-outline.png&imgrefurl=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2H7G6b1N4H7i8d3_vegetable-outline-by-nimblechapps-vegetable-outline%2F&tbnid=ttCfIngPas86MM&vet=12ahUKEwjF8_yUvr_6AhVyjNgFHfG5BncQMyggegUIARCNAg..i&docid=tWugoIKNehTsUM&w=840&h=592&q=vegetable%20outline%20stickers%20png&ved=2ahUKEwjF8_yUvr_6AhVyjNgFHfG5BncQMyggegUIARCNAg"/> */}
        </Box>
        <Box>
            <SimpleSlider/>
        </Box>
        <Box>
            <Footer/>
        </Box>
    
    </Box>
    )
}
export default Cookbook
