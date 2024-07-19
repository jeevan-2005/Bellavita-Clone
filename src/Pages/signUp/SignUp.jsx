import { Box, Button, FormControl, FormLabel, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        address: '',
        pinCode: '',
        city: '',
        state: '',
        email: '',
        password:''
      }
      const navigate = useNavigate();
      const [userDetails, setUserDetails] = useState(initialState);
      const {firstName, lastName, address, pinCode, city, state, email, password} = userDetails;
    
      const handleFormChange = (e)=>{
        setUserDetails({
          ...userDetails,
          [e.target.name]: e.target.value,
        })
      }
    
      const handleFormSubmit = (e)=>{
        e.preventDefault();
        navigate("/");
        
      }
      
    
      return (
        <Box w='50%' margin="auto" mt="30px" >
          <Text
            fontSize="23px"
            textAlign="center"
            fontWeight="600"
            letterSpacing="1px"
            style={{ wordSpacing: "4px" }}
            m="10px 0 20px 0"
          >
            Sign In
          </Text>
          <Box w="80%" margin="auto">
            <Stack direction="row" justify="center" spacing="30px">
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input value={firstName} name="firstName" onChange={handleFormChange} mb="15px" placeholder="enter first name" />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input value={lastName} name="lastName" onChange={handleFormChange} mb="15px" placeholder="enter last name" />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea
              value={address} onChange={handleFormChange}
                mb="15px"
                name="address"
                placeholder="Address 1 (House no, Building, Street, Area)"
              />
            </FormControl>
            <Stack direction="row">
              <FormControl>
                <FormLabel>Pincode</FormLabel>
                <Input value={pinCode} name="pinCode" onChange={handleFormChange} mb="15px" type="number" placeholder="pincode" />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input value={city} name="city" onChange={handleFormChange} mb="15px" placeholder="city" />
              </FormControl>
              <FormControl>
                <FormLabel>State</FormLabel>
                <Input value={state} name="state" onChange={handleFormChange} mb="15px" placeholder="state" />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={email} name="email" onChange={handleFormChange} mb="10px" type="email" placeholder="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input value={password} name="password" onChange={handleFormChange} mb="10px" type="email" placeholder="email" />
            </FormControl>
            <Box display='flex' justifyContent='center' >
            <Button
              w="50%"
              m='20px 0'
              fontWeight="400"
              colorScheme="blue"
              p="23px"
              type="submit"
              onClick={handleFormSubmit}
            >
              SignIn
            </Button>
            </Box>
          </Box>
        </Box>
      );
}

export default SignUp
