import { Box, Button, color, Heading, Input,Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Pagelayout from "../../PageLayout";
// import "./login.css";
import { useState } from "react";

const Signin = () => {
  const goto=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });

    const user = parsedUsers.find((item) => {
      if (item.email === email && item.password === password) {
        return true;
      } else {
        return false;
      }
    });

    if (user && user.password === password) {
      alert("User logged in Successfully");
      goto("/")
      
    } else {
      alert("Wrong Details");
    }
  };

  const SavedUser = window.localStorage.getItem("SignupData");
  const parsedUsers = JSON.parse(SavedUser);
  console.log("GetUsers", parsedUsers);

  return (
    <Box  boxShadow='2xl' p='6' rounded='md' bg='white' marginLeft="30%" width="50%">
      <Box ml="40%">
        <Image w="30%" src="https://play-lh.googleusercontent.com/LI_Y6I6uMS_DrhO7tHDTH-_YaYLJLM3rS9yReRuGzbk8VfoZvkOlZh7zZfCCOakJGDs"/>
        <Heading ml={"-10%"}>Welcome Back</Heading>
        <Heading ml={"-10%"} mt="5%" size="sm">
            Please sign in below to get started.
        </Heading>

        <form onSubmit={handleSubmit}>
          <Input

            w="60%"
            borderColor="black.100"
            p="25px"
            mt="10%"
            ml={"-10%"}
        
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <Input
            w="60%"
            borderColor="black.500"
            p="25px"
            mt="10%"
            ml={"-10%"}
        
            
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <br />
          <Heading cursor={"pointer"} color={"green.500"} ml="14%"size="xs" >Forgot Your password?</Heading>

          <Button
            size="md"
            p="20px"
            width="50%"
            borderRadius="50px"
            border="1px"
            ml={"-10%"}
        
            backgroundColor="green.500"
            color="white"
            mt="-30%"
            type="submit"
          >
            Continue
          </Button>
          <Button
            size="md"
            p="20px"
            width="50%"
            borderRadius="50px"
            border="1px"
            ml={"-48%"}
        
            backgroundColor="black"
            color="white"
            mt="50%"
            type="submit"
          >
            <Image w="20%" bg="white" borderRadius="100%" border="none" src="https://cdn-icons-png.flaticon.com/128/2175/2175370.png"/>Continue With Apple
          </Button>
        </form>

        <div  >
          <p>Don't have an account? <span><Link style={{ color:"green" ,textDecoration: "none", marginLeft: "5px" }} to="/SignUp">
            Sign up here
          </Link></span></p>
          
        </div>
        <Heading textAlign={"center"} mt="10%" ml={"-30%"} color="green.400" size="xs">This site is protected by Captcha and their privacy policy and terms apply.</Heading>
      </Box>
    </Box>

  );
};

export default Signin;