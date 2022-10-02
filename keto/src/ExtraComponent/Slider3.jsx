import React, { Component } from "react";
import "./Slider2.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button,Grid, Heading,Box ,Image} from "@chakra-ui/react";
import {Link} from "react-router-dom"
export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Box  boxShadow='2xl' p='6' rounded='md' bg='white' marginLeft="30%" width="50%">
        <Image ml="35%" w="20%" src="https://play-lh.googleusercontent.com/LI_Y6I6uMS_DrhO7tHDTH-_YaYLJLM3rS9yReRuGzbk8VfoZvkOlZh7zZfCCOakJGDs"/>
        <Slider {...settings}>
          <div  >
            <Grid ml="30%" templateRows="repeat(2,1fr)" gap="20">
              <Box mt="10%">
              <video preload="auto" autoplay="false" loop="loop" id="video" controls width="250">
                <source
                  src="https://assets.carbmanager.com/static%2Fui%2Fhome01.webm"
                  type="video/webm"/>

                 <source
                   src="https://assets.carbmanager.com/static%2Fui%2Fhome01.mp4"
                   type="video/mp4"
                 />
                </video>
                </Box> 
             <Box mb="-40%" ml="-40%" >
                <Heading textAlign="center" size="lg">Welcome to Carb Manager</Heading>
                <Heading textAlign="center" size="sm">Reach your goals faster with the all-in-one macro tracker and complete low-carb and Keto lifestyle app. It's carb-smart eating made easy.</Heading>
                
              </Box>
            
            </Grid> 
            
            
          </div>
          <div>
            
            
            <Grid ml="30%" templateRows="repeat(2,1fr)" gap="20">
            <Box mt="10%">
              <video preload="auto" autoplay="false" loop="loop" id="video" controls width="250">
                <source
                  src="https://assets.carbmanager.com/static%2Fui%2Fhome02.webm"
                  type="video/webm"/>

                 <source
                   src="https://assets.carbmanager.com/static%2Fui%2Fhome02.mp4"
                   type="video/mp4"
                 />
                </video>
                </Box> 
             <Box mb="-40%" ml="-40%" >
                <Heading textAlign="center" size="lg">Delicious Low-Carb Recipes</Heading>
                <Heading textAlign="center" size="sm">Who said low carb was boring? Satisfy even the pickiest eaters in your family with our exclusive database of thousands of healthy low carb & Keto recipes.</Heading>
                
              </Box>
            
            
            </Grid>
          
          
          </div>
          <div>
            
          <Grid ml="30%" templateRows="repeat(2,1fr)" gap="20">
            <Box mt="10%">
              <video preload="auto" autoplay="false" loop="loop" id="video" controls width="250">
                <source
                  src="https://assets.carbmanager.com/static%2Fui%2Fhome03.webm"
                  type="video/webm"/>

                 <source
                   src="https://assets.carbmanager.com/static%2Fui%2Fhome03.mp4"
                   type="video/mp4"
                 />
                </video>
                </Box> 
             <Box mb="-40%" ml="-40%" >
                <Heading textAlign="center" size="lg">Stay Motivated. See Results.</Heading>
                <Heading textAlign="center" size="sm">Everything you need to reach your health goals. Learn about low carb life, set goals, track progress, and lean on our supportive community.</Heading>
                
              </Box>
            
            
            </Grid>
          
          
          </div>
          <div>
            
          <Grid ml="30%" templateRows="repeat(2,1fr)" gap="20">
            <Box mt="10%">
              <video preload="auto" autoplay="false" loop="loop" id="video" controls width="250">
                <source
                  src="https://assets.carbmanager.com/static%2Fui%2Fhome04.webm"
                  type="video/webm"/>

                 <source
                   src="https://assets.carbmanager.com/static%2Fui%2Fhome04.mp4"
                   type="video/mp4"
                 />
                </video>
                </Box> 
             <Box mb="-40%" ml="-40%" >
                <Heading textAlign="center" size="lg">Custom Meal Plans & Shopping Lists</Heading>
                <Heading textAlign="center" size="sm">Get personalized meal plans and shopping lists based on your preferences, diet, and macros. Less time shopping. More time with your family.</Heading>
                
              </Box>
            
            
            </Grid>
          
          
          </div>
        </Slider>
        <Box>
        <Button
            size="md"
            p="20px"
            width="50%"
            borderRadius="50px"
            border="1px"
            
        
            backgroundColor="green.500"
            color="white"
            mt="-40%"
            ml="25%"
            type="submit"
          >
            Get Started For Free
          </Button>
          <Box mt="-10%" ml="26%">
        
          <p>Already have an account?   </p>
          
          <a  href="/Pages/Signin">Sign In</a>
          
          
        </Box>
        </Box>
      </Box>
    );
  }
}
