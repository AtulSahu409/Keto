import React, { Component } from "react";
import "./Slider2.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Heading,Box ,Image} from "@chakra-ui/react";
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
      <div style={{marginLeft:"30%",width:"50%"}}>
        <Heading mb="5%">Keto Expert Approved</Heading>
        <Heading color="green.100" size="xs" mb="10%">Here’s what some of our popular supporters have to say about Carb Manager’s cookbook </Heading>
        <Slider {...settings}>
          <div  >
            <Grid templateColumns="repeat(2,1fr)" gap="20">
              <img className="img"   src="https://images.prismic.io/cm-website/7f4b2700-2540-4003-98dc-38d3658bde81_MariaEmmerich.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
              <Box>
                <Heading mb="10%" size="lg" >Maria Emmerich</Heading>
                <Heading mb="10%" color="green.100" size="sm">Bestselling co-author of Keto: The Complete Guide to Success on the Ketogenic Diet</Heading>
                <Image  w="10%" src="https://cdn-user-icons.flaticon.com/77563/77563239/1664680836249.svg?token=exp=1664685637~hmac=d30c5b806a0d859f87e8513fe4b39282"/>
                <Heading size="md" >This is a great book for following a Keto lifestyle the right way. I like how they focus on nutrient-dense whole foods, and the QR codes make tracking easy in the app.</Heading>
              </Box>
            
            </Grid> 
            
            
          </div>
          <div>
            
            
            <Grid templateColumns="repeat(2,1fr)" gap="20">
            <img className="img" src="https://images.prismic.io/cm-website/e431f779-2c4a-4437-bb1e-ff4702f75321_Dr+Will+Cole.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
              <Box>
                <Heading mb="10%" size="lg" >Dr Will Cole</Heading>
                <Heading mb="10%" color="green.100" size="sm">Bestselling co-author (with Gwyneth Paltrow) of Intuitive Fasting: The Flexible Four-Week Intermittent Fasting Plan to Recharge Your Metabolism and Renew Your Health</Heading>
                <Image  w="10%" src="https://cdn-user-icons.flaticon.com/77563/77563239/1664680836249.svg?token=exp=1664681738~hmac=7bff9d129cbbc0ba1f940c9f80289ff8"/>
                <Heading size="md" >Carb Manager’s Keto Diet Cookbook is packed with over 100 of the best keto recipes for any dish your heart desires. It will streamline your Keto journey for ultimate success.</Heading>
              </Box>
            
            </Grid>
          
          
          </div>
          <div>
            
            <Grid templateColumns="repeat(2,1fr)" gap="20">
            <img className="img" src="https://images.prismic.io/cm-website/61f1e8f2-608b-4bc3-a9e7-83b0af1dd5af_Collin+Morgan.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
              <Box>
                <Heading mb="10%" size="lg" >Collin Morgan</Heading>
                <Heading mb="10%" color="green.100" size="sm">Founder of Hip2Keto</Heading>
                <Image  w="10%" src="https://cdn-user-icons.flaticon.com/77563/77563239/1664680836249.svg?token=exp=1664681738~hmac=7bff9d129cbbc0ba1f940c9f80289ff8"/>
                <Heading size="md" >Our team at Hip2Keto loves Carb Manager. Trust us, if you’re trying to maximize the effectiveness of your ketogenic lifestyle, Carb Manager is the best tool to help you!</Heading>
              </Box>
            
            </Grid>
          
          
          </div>
          <div>
            
            <Grid templateColumns="repeat(2,1fr)" gap="20">
            <img className="img" src="https://images.prismic.io/cm-website/55d42c2e-bf92-4a7c-b9e7-ba0ccfe82304_Trisha+Haas.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
              <Box>
                <Heading mb="10%" size="lg" >Trisha Haas</Heading>
                <Heading mb="10%" color="green.100" size="sm">Blogger, writer, and chef at SaltySideDish.com</Heading>
                <Image  w="10%" src="https://cdn-user-icons.flaticon.com/77563/77563239/1664680836249.svg?token=exp=1664681738~hmac=7bff9d129cbbc0ba1f940c9f80289ff8"/>
                <Heading size="md" >As a professional recipe writer and blogger, my readers rely on me to help them decide which recipe fits in their own nutritional needs. Carb Manager undoubtedly allows me to have the confidence, education, and stats I need to keep my readers informed and on track!</Heading>
              </Box>
            
            </Grid>
          
          
          </div>
        </Slider>
      </div>
    );
  }
}
