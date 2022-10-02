import { Button, Heading, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Box, Image} from "@chakra-ui/react"


const Signup = () => {
  const [form, setForm] = useState([]);
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm((prevform) => [...prevform, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("SignupData", JSON.stringify(form));
  }, [form]);

  return (
    <Box  boxShadow='2xl' p='6' rounded='md' bg='white' marginLeft="30%" width="50%">

      <Box ml="40%">
      <Image w="30%" src="https://play-lh.googleusercontent.com/LI_Y6I6uMS_DrhO7tHDTH-_YaYLJLM3rS9yReRuGzbk8VfoZvkOlZh7zZfCCOakJGDs"/>
        <Heading ml={"-10%"} size="lg">
        Let's set up your account
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            w="60%"
            borderColor="black.100"
            p="25px"
            mt="10%"
            ml={"-10%"}
            placeholder="First Name"
            value={initialValues.firstName}
            onChange={(e) =>
              setInitialValues({ ...initialValues, firstName: e.target.value })
            }
          />
          <br />
          <Input
            w="60%"
            borderColor="black.100"
            p="25px"
            mt="10%"
            ml={"-10%"}
            
            placeholder="Last Name"
            value={initialValues.lastName}
            onChange={(e) =>
              setInitialValues({ ...initialValues, lastName: e.target.value })
            }
          />
          <br />
          <Input
            w="60%"
            borderColor="black.100"
            p="25px"
            mt="10%"
            ml={"-10%"}
            placeholder="Email"
            value={initialValues.email}
            onChange={(e) =>
              setInitialValues({ ...initialValues, email: e.target.value })
            }
          />
          <br />
          <Input
            w="60%"
            borderColor="black.100"
            p="25px"
            mt="10%"
            ml={"-10%"}
            placeholder="Password"
            value={initialValues.password}
            onChange={(e) =>
              setInitialValues({ ...initialValues, password: e.target.value })
            }
          />
          <br />
          <br />

          <Button
            size="md"
            p="25px"
            width="45%"
            borderRadius="50px"
            border="1px"
            
            backgroundColor="green.500"
            color="white"
            mt="25px"
            type="submit"
          >
            CREATE MY ACCOUNT
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

        <div style={{ marginBottom: "100px" }} className="create">
          <p>Already have an account?</p>
          <Link
            style={{ textDecoration: "underline", marginLeft: "5px" }}
            to="/Pages/Signin"
          >
            Signin
          </Link>
        </div>
      </Box>
    </Box>
    
  );
};

export default Signup;