import React ,{useEffect,useState,useRef} from "react"
import {RecData} from "../ExtraComponent/RecData"
import "./Recipes.css"
import {Box,Heading,Grid,Text,Image,InputGroup,Input,InputRightAddon, Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"
const Recipes=()=>{
    const [data, setvalue] = useState([])
    const [quere,setquere] =useState("")
    const inputref = useRef("Chicken")
    useEffect(() => {
        RecData(quere).then((res) => setvalue(res.data.hits));
      }, [data]);
      const handelchange = (event) => {
        event.preventDefault()
        setquere(inputref.current.value);
        console.log(inputref.current.value);
      };
    return(
        <Box >
            <Box >
                <Image filter='auto' brightness='40%' className="image" h="500px" w="100%" src="https://images.prismic.io/cm-website/bdb7a4a4-0011-4597-a639-7b34692fb26b_hero%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"></Image>
                <Text fontSize='4xl' textAlign="justify" className="heading">Explore Over 50,000+ Unique Low-Carb and Keto Recipes</Text>
                <Box className="input">
                    <InputGroup w="200%" borderRadius="50px"  >
                        <Input ref={inputref} borderRadius="50px" placeholder='Search recipes...' />
                        <InputRightAddon onClick={handelchange} cursor="pointer" borderRadius="50px" bg="blue.400" color="white" fontSize="17px" fontWeight="bold" children='Search' />
                    </InputGroup>
                    {/* <Button onClick={hanleClick}><Link to="/Premium">home</Link></Button> */}
                </Box>
                <Text className="smhead">Cant think of anything? Try these popular tags</Text>
                <Grid className="cloumn" templateColumns="repeat(4,1fr)" gap="2rem" >
                    <Box textAlign="center" w="120%" borderRadius="50px" border="1px solid white" bg="whiteAlpha.500" >Quick & Free</Box>
                    <Box textAlign="center" w="120%" borderRadius="50px" border="1px solid white" bg="whiteAlpha.500" >Gluten Free</Box>
                    <Box textAlign="center" w="120%" borderRadius="50px" border="1px solid white" bg="whiteAlpha.500" >Snacks</Box>
                    <Box textAlign="center" w="120%" borderRadius="50px" border="1px solid white" bg="whiteAlpha.500" >Desserts</Box>

                </Grid>
                <Box w="70rem" h="150rem"  className="append">
                    <Grid  templateColumns='repeat(3, 1fr)' columnGap={130} rowGap={4}>
                        {data.map((el)=>{
                            return(
                            <Box w="200px" border='1px' borderColor='red.200' >
                                <Image  maxH="120px" src={el.recipe.image} alt="image" />
                            <Box alignContent='center' mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                                {el.recipe.label}
                            </Box>
                            
                            <Button colorScheme='blue'>Button</Button>
                            </Box>
                        )
                    })
                }  
                </Grid>
            </Box>
        </Box>
        
        
    </Box>
    )
}
export default Recipes
