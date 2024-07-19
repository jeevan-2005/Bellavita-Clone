import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOutAddress = () => {

  const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    pinCode: '',
    city: '',
    state: '',
    email: '',
  }
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);
  const {firstName, lastName, address, pinCode, city, state, email} = formState;

  const handleFormChange = (e)=>{
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const setAddressData = (address)=>{
    localStorage.setItem('address', JSON.stringify(address));
  }

  const loadAddressData = () => {
    let addrs = JSON.parse(localStorage.getItem('address')) || initialState;
     setFormState(addrs);
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    setAddressData(formState);
    navigate("/cart/checkOut:paymentPage");
  }
  
  useEffect(()=>{
    loadAddressData();
  },[])

  return (
    <Box h="80%" margin="auto" mt="0">
      <Text
        fontSize="23px"
        textAlign="center"
        fontWeight="600"
        letterSpacing="1px"
        style={{ wordSpacing: "4px" }}
        m="10px 0 20px 0"
      >
        Shipping Address
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
        <Button
          w="100%"
          mt={4}
          fontWeight="400"
          colorScheme="blue"
          p="23px"
          type="submit"
          onClick={handleFormSubmit}
        >
          Save & Continue
        </Button>
      </Box>
    </Box>
  );
};

export default CheckOutAddress;
