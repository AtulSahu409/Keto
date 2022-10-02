import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Image, Grid ,Box, Button,Text, Heading} from "@chakra-ui/react";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Box width="100% "  bg="#1ca677" >
        <Heading mb="5%" textAlign="center"> Love. Life. Keto.</Heading>
        <Slider {...settings}  >
          
          <div border="1px solid red">
            <Grid maxW="6xl" templateColumns="repeat(2,1fr)"  m="auto" >
              <Box ml="10%" maxW="lg">
              <Heading textAlign="center" size='md' >Cassandra W</Heading>
              <Text mt="5%" border="1px "borderRadius="2xl" color="black">Lost over 100 pounds!</Text>
              <Text mt="5%" color="black" textAlign="justify">I LOVE Carb Manager! Since I’ve been living a Keto and Intermittent Fasting lifestyle, I feel AMAZING! I have lost 102 lbs, and I feel great. I have so much more energy and I know I am a million times happier! I only have 28 lbs left to reach my goal! 💪🏻</Text>
              <Button ml="15%" mt="10%" >Read Success Story</Button>
              </Box>
              <Box maxW="lg">
                <Grid ml="10%" templateColumns="repeat(2,1fr)"  >
                <Box><Image src="https://images.prismic.io/cm-website/5e79ed5c-dc6f-458a-a07c-5299632cb90e_testimony_before_1%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                <Box><Image src="https://images.prismic.io/cm-website/e3cdb9f6-27db-4716-93ff-926623b4b2f5_cassandraafter.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                </Grid>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid maxW="6xl" templateColumns="repeat(2,1fr)"  m="auto" >
              <Box ml="10%" maxW="lg">
              <Heading textAlign="center" size='md' >Katie</Heading>
              <Text mt="5%" border="1px "borderRadius="2xl" color="black">Lost over 67 pounds!</Text>
              <Text mt="5%" color="black" textAlign="justify">After having my daughter and jumping from 190lbs to 237lbs I knew I needed to change! Carb Manager held my hand through the entire process. There’s no way I would have kept my macros at an ideal level otherwise. Thank you to the Carb Manager creators, you helped change my life ❤️</Text>
              <Button ml="15%" mt="10%" >Read Success Story</Button>
              </Box>
              <Box maxW="lg">
                <Grid ml="10%" templateColumns="repeat(2,1fr)"  >
                <Box><Image src="https://images.prismic.io/cm-website/1c552e02-235e-4f71-9849-e96d70de447a_testimony_before_2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                <Box><Image src="https://images.prismic.io/cm-website/a5b7f709-9347-48c5-9e31-df1ddb1bd287_testimony_after_2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                </Grid>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid maxW="6xl" templateColumns="repeat(2,1fr)"  m="auto" >
              <Box ml="10%" maxW="lg">
              <Heading textAlign="center" size='md' >Brandon</Heading>
              <Text mt="5%" border="1px "borderRadius="2xl" color="black">Lost over 100 pounds!</Text>
              <Text mt="5%" color="black" textAlign="justify">After nearly being separated from the US Navy due to my weight, I discovered Keto and lost 100 pounds. I switched to Carb Manager from another popular nutrition tracker. CM was MORE helpful in maintaining a Keto lifestyle.</Text>
              <Button ml="15%" mt="10%" >Read Success Story</Button>
              </Box>
              <Box maxW="lg">
                <Grid ml="10%" templateColumns="repeat(2,1fr)"  >
                <Box><Image src="https://images.prismic.io/cm-website/2a3c89c1-9a6e-4e37-80f6-80b27fd0a6bc_testimony_before_3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                <Box><Image src="https://images.prismic.io/cm-website/a3ac1f10-ae30-4dfb-b14d-c14beacebbf1_testimony_after_3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                </Grid>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid maxW="6xl" templateColumns="repeat(2,1fr)"  m="auto" >
              <Box ml="10%" maxW="lg">
              <Heading textAlign="center" size='md' >Shawn A</Heading>
              <Text mt="5%" border="1px "borderRadius="2xl" color="black">Lost over 165 pounds!</Text>
              <Text mt="5%" color="black" textAlign="justify">I started this journey at 372.9 pounds and I was ready to change my life. Carb Manager allowed me to change my approach to food, and now I see my food as a bank with a limit that renews every 24 hours. It has become a game to try to stay under my carb limit every day.</Text>
              <Button ml="15%" mt="10%" >Read Success Story</Button>
              </Box>
              <Box maxW="lg">
                <Grid ml="10%" templateColumns="repeat(2,1fr)"  >
                <Box><Image src="https://images.prismic.io/cm-website/3e356007-7081-4e94-bced-8076b493c02c_testimony_before_5%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                <Box><Image src="https://images.prismic.io/cm-website/735c71b0-433d-4692-b3ea-6a5c485e8b5e_testimony_after_5%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                </Grid>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid maxW="6xl" templateColumns="repeat(2,1fr)"  m="auto" >
              <Box ml="10%" maxW="lg">
              <Heading textAlign="center" size='md' >Mike & Raci</Heading>
              <Text mt="5%" border="1px "borderRadius="2xl" color="black">Lost over 100 pounds!</Text>
              <Text mt="5%" color="black" textAlign="justify">Short: We tried so many other “diets,” but none worked long-term. Now Keto has become a lifestyle. Without Carb Manager, we wouldn't have been as successful. The app makes it so easy to monitor your macros. Better than all the other tracker apps, by far.</Text>
              <Button ml="15%" mt="10%" >Read Success Story</Button>
              </Box>
              <Box maxW="lg">
                <Grid ml="10%" templateColumns="repeat(2,1fr)"  >
                <Box><Image src="https://images.prismic.io/cm-website/bcc2d075-f8a2-40b3-951a-7c51c6b058fd_testimony_before_8%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                <Box><Image src="https://images.prismic.io/cm-website/864cd5ad-10a2-472d-93c1-7d1908bb1ca5_Rectangle+316.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                </Grid>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid maxW="6xl" templateColumns="repeat(2,1fr)"  m="auto" >
              <Box ml="10%" maxW="lg">
              <Heading textAlign="center" size='md' >Nathalie</Heading>
              <Text mt="5%" border="1px "borderRadius="2xl" color="black">Lost over 50 pounds!</Text>
              <Text mt="5%" color="black" textAlign="justify">I lost 20kg in the first 6 months! I really liked how the app adjusted my macros and requirements as I lost weight, in addition to the motivation I received in the community area where there were people with the same goals as me! The premium recipes in the app are delicious, and always work out 10/10.</Text>
              <Button ml="15%" mt="10%" >Read Success Story</Button>
              </Box>
              <Box maxW="lg">
                <Grid ml="10%" templateColumns="repeat(2,1fr)"  >
                <Box><Image src="https://images.prismic.io/cm-website/8df102a0-ca1a-4dc7-a0d9-1ce38b3472d8_testimony_before_9%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                <Box><Image src="https://images.prismic.io/cm-website/ddf69201-bb1a-43f5-bdaa-885b26b51aff_nathalieafter.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                </Grid>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid maxW="6xl" templateColumns="repeat(2,1fr)"  m="auto" >
              <Box ml="10%" maxW="lg">
              <Heading textAlign="center" size='md' >Jennifer</Heading>
              <Text mt="5%" border="1px "borderRadius="2xl" color="black">Lost 67 pounds!</Text>
              <Text mt="5%" color="black" textAlign="justify">I tried to carb count on my own, and didn't lose any weight. Then I found Carb Manager, and lost a significant amount of weight right away. When I hit a plateau, I tried CM Premium for a month and the premade meal plans helped me lose another 10lbs that month so I signed up for a year!</Text>
              <Button ml="15%" mt="10%" >Read Success Story</Button>
              </Box>
              <Box maxW="lg">
                <Grid ml="10%" templateColumns="repeat(2,1fr)"  >
                <Box><Image src="https://images.prismic.io/cm-website/569bfdfd-a86c-4df8-81f4-3d7362b05840_testimony_before_10%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                <Box><Image src="https://images.prismic.io/cm-website/2b97e3d2-fc13-4400-b9bc-211988095ce4_testimony_after_10%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image></Box>
                </Grid>
              </Box>
            </Grid>
          </div>
        </Slider>
      </Box>
    );
  }
}
