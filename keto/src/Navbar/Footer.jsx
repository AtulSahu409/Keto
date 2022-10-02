import React from 'react'
import {Box, Heading,Button,Image,Grid,Text} from '@chakra-ui/react'
import { ImFacebook2} from "react-icons/im"
import {FaInstagram} from "react-icons/fa"
import {AiOutlineYoutube} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
export default function Footer() {
  return (
    <Box>
      {/* <Heading>Footer</Heading> */}
        <Box mt="15%" textAlign="center" bg='green.400' w='100%' h="100%" p={10} color='white'>
          <Heading p={5} size="2xl">Looking for Premium?</Heading>
          <Heading p={5} size='md'>Unlock all of Carb Manager's cutting-edge features with a Premium Membership.</Heading>
          <Button p={5} w="25%" borderRadius="25px" bg="red" > Get Premium</Button>
        </Box>
        <Box ><Image ml="40%" w="20%"  src="https://logotyp.us/files/carb-manager.svg"></Image></Box>
        <Box>
          <Grid mt="-2%" ml="5%" mr="5%" templateColumns="repeat(10,1fr)" templateRows='repeat(1, 1fr)'>
            
              <Text>Features</Text>
              <Text>Premium</Text>
              <Text>Keto Recipes</Text>
              <Text>Keto Cookbook</Text>
              <Text>Articles</Text>
              <Text>About Us</Text>
              <Text>Foods</Text>
              <Text>Support</Text>
              <Text>Log In</Text>
              <Text>Join For Free</Text>
          </Grid>
        </Box>
        <Box>
        <Grid mt="2%" ml="5%" mr="5%" templateColumns="repeat(7,1fr)" templateRows='repeat(1, 1fr)'>
        <Text>Gift Cards</Text> 
              <Text>Support Center</Text>
              <Text>Forums</Text>
              <Text>Terms Of Service</Text>
              <Text>Privacy Policy</Text>
              <Text>Contact</Text>
              <Text>System Status</Text>
          
        </Grid>
        </Box>
        <Box>
          <Grid  pl="15%" mt="2%" ml="10%" mr="5%"  templateColumns="repeat(4,1fr)" templateRows='repeat(1s, 1fr)'  >
            <div><ImFacebook2/></div>
            <div><FaInstagram/></div>
            <div><AiOutlineYoutube/></div>
            <div><BsPinterest/></div>




            
          </Grid>
        </Box>
    </Box>
  )
}
