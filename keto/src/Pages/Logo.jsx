import React from 'react'
import "./Logosty.css"

import SimpleSlider from '../ExtraComponent/Sliderstyle'
// import '../Navbar/Navbar.css';
import {Text,Alert,Icon ,InputRightAddon,Input,InputGroup,Grid,Heading,Image,Box, VStack , Container, Button, Stack  } from '@chakra-ui/react'
import { MdSettings ,MdCheckCircleIcon} from 'react-icons/md'
// import { BiRadioCircleMarked} from "react-icons/fa"
import {status,AlertIcon,CheckCircleIcon, CircleIcon} from "@chakra-ui/icons"
import Footer from '../Navbar/Footer'
export default function Logo() {
  return (
  <Box>
    <Grid  className='desktop' templateColumns="repeat(2,1fr)"  borderBottomLeftRadius="20%"  maxW="full"  maxH="md" bg='#1ca677' color='#262626'>
        <VStack  ml="10%" textAlign="justify">
            <Heading size="2xl"color="white">Keto & Low-Carb Made Easy</Heading>
            <Heading size="xl" color="white">The #1 Low-Carb and Keto Diet App</Heading>
            <Heading size="md" color="white">For healthy & sustainable low-carb living</Heading>
            <Box>
                <InputGroup borderRadius="50px" bg="white" >
                    <Input borderRadius="50px" placeholder='Enter email address' />
                    <InputRightAddon borderRadius="50px" bg="red" color="white" fontSize="17px" fontWeight="bold" children='Create Free Account' />
                </InputGroup>
            </Box>
                <Grid templateColumns="repeat(2,1fr)" gap="2" >
                    <Image htmlHeight="500px" htmlWidth="160px"src='https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png'  alt='ph' />
                    <Image htmlHeight="500px" htmlWidth="160px"src='https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg'  alt='ph' />
                </Grid>
        </VStack>   
                {/* <Alert status='error'>
                    <AlertIcon />
                        There was an error processing your request
                </Alert>
                <Alert status='success'>
                    <AlertIcon />
                      Data uploaded to the server. Fire on!
                </Alert>
                <Alert status='warning'>
                    <AlertIcon />
                      Seems your account is about expire, upgrade now
                </Alert> */}
        <VStack alignItems="right" >
            <Box ml="50%"  boxSize='md'>
                <Image htmlHeight="700px" htmlWidth="215px"src='https://www.carbmanager.com/_nuxt/img/9bfac4e.png'  alt='ph' />
            </Box>
        </VStack> 
    </Grid>
    <Grid  className='icon' alignItems="center" mt="5%" ml="10%" templateColumns="repeat(6,1fr)">
        <Image src="https://images.prismic.io/cm-website/85c79988-767d-486a-82ca-9e9482b92455_company-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image>
        <Image src="https://images.prismic.io/cm-website/6bd07041-3f55-485d-89c1-5229f6555f10_company-2%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image>
        <Image src="https://images.prismic.io/cm-website/a0b2f5b5-ccfe-4a2f-917e-d42744ff546c_company-3%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image>
        <Image src="https://images.prismic.io/cm-website/9606bffa-ce4e-4669-931f-bd24ffacf062_company-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image>
        <Image src="https://images.prismic.io/cm-website/9cb7402b-b14f-45e7-9b92-9eeddfb5973f_company-5%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image>
        <Image src="https://images.prismic.io/cm-website/7edf097e-db2c-4f7b-9384-3017911f6fc0_company-6%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image>
    </Grid>
    
    <br/><br/>
        <Heading textAlign="center">Get to Know Keto & Low-Carb</Heading>
        <Heading as='h4' size='md'textAlign="center">And get results in as little as 3 weeks.</Heading>
    <br/><br/><br/>
    <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmnMNO-STP4rz8el-vxkT1q7UKHF21ccQhg&usqp=CAU"></Image>
    
    
    <Grid className='mid'  m="auto"  columnGap="-50px" rowGap="15%" templateColumns="repeat(2,1fr)">
        <Image ml="30%" htmlHeight="700px" htmlWidth="315px" borderTopLeftRadius="50px" src='https://images.prismic.io/cm-website/030dabe6-7bc1-4df7-953f-4ddf8c3f7a97_article-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max'></Image>

        <Box mr="20%"><Text fontSize='md'  textAlign="justify">Keto for you . </Text>
        <Text width="60%" fontSize='xs' textAlign="justify">Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:</Text>
        <Grid width="50%" fontSize='xs' textAlign="justify" templateColumns="repeat(2,1fr)" gap="1rem">
            <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.500' />Lose weight quickly</div>
            <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.500' />Reduce inflammation</div>
            <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.500' />Optimize energy</div>
            <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.500' />Gain mental clarity</div>
            <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.500' />Restore balance</div>
            <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.500' />Manage cravings</div>

        </Grid>
        </Box>
        
        <Box ml="30%"><Text fontSize='md'  textAlign="justify">Keto for everyone .</Text>
            <Text  width="60%" fontSize='xs' textAlign="justify">
            Keto isn’t just another diet. It’s a lifestyle. And Carb Manager isn’t just another Keto diet tracker. Our state-of-the-art features make it convenient and fun for everyone to join in.</Text>
            <Grid width="50%" fontSize='xs' textAlign="justify" templateColumns="repeat(1,1fr)" gap="1rem">
                <div>Save time with automatic meal plans and grocery lists tailored to specific food preferences and allergies</div>
            <div>Stay inspired by our database of thousands of Keto recipes</div>
            <div>Have fun tracking the macros and micros of over 1 million foods with cutting-edge features, like our popular Snap Foods feature that uses photo recognition technology</div></Grid></Box>
        <Image mr="30%" htmlHeight="700px" htmlWidth="315px" borderBottomLeftRadius="50px" src="https://images.prismic.io/cm-website/1b4d20a7-fd3b-42a0-ba35-cae306374b4a_article_2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"  ></Image>
        
        <Image ml="30%" htmlHeight="700px" htmlWidth="315px" borderTopRightRadius="50px" src="https://images.prismic.io/cm-website/26adf515-88d3-46ff-b5c4-f73eb3c6c78f_article_3%402x.jpg?auto=compress%2Cformat&w=1&auto=format&fit=max" ></Image>
        
        <Box mr="30%"><Text fontSize='md'  textAlign="justify">Keto for life .</Text>
            <Text width="60%" fontSize='xs' textAlign="justify">
                Carb Manager is here to help you stick to your low-carb lifestyle.</Text>
                <Grid width="50%" fontSize='xs' textAlign="justify" templateColumns="repeat(1,1fr)" gap="1rem">
                        <div>Worried about cravings?</div>
                        
                        <div>Want to know how your kids can do it too?</div>
                        <div>Wonder how long before you see results?</div></Grid>
            <Text fontSize='xs' textAlign="justify">Our popular blog will keep you inspired and informed. And our active social media community lets you stay connected to other low-carb folks, so you’ll always get the support you need.</Text></Box>
            
            <Box ml="30%" ><Text fontSize='md'  textAlign="justify">Keto beyond .</Text>
            <Text width="60%" fontSize='xs' textAlign="justify">We go way beyond the typical low-carb tracker to make sure you’re at your best. With Carb Manager, you can easily track your:</Text>
                <Grid width="50%" fontSize='xs' textAlign="justify" templateColumns="repeat(2,1fr)" gap="1rem">
                <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.200' bg="white" />Ketones</div>
                <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.200' bg="white" />Blood glucose</div>
                <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.200' bg="white" />Insulin</div>
                <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.200' bg="white" />Intermittent fasting</div>
                <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.200' bg="white" />Glycemic load</div>
                <div><Icon as={CheckCircleIcon} w={4} h={4} color='green.200' bg="white" />GKI and much more...</div></Grid>
            </Box>
            <Image mr="30%" htmlHeight="700px" htmlWidth="315px" borderBottomRightRadius="50px" src="https://images.prismic.io/cm-website/21877cf5-6425-41cf-b50d-41a16715d23b_article-4%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max" ></Image>
    </Grid>
    
      

    
    
    <Box mt="60%">
    <SimpleSlider/>
    </Box>

    <Box>
        <Footer/>
    </Box>
    
    </Box>

    
    )
}