import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import UpiCancel from "../UpiCancel/UpiCancel";
import { useNavigate } from "react-router-dom";

const CheckOutPayment = () => {
  const { cartProducts, error, total } = useSelector((state) => state.cart);
  const discount = Math.floor(total * 0.1);
  const [upi, setUpi] = useState(null);
  const navigate = useNavigate()

  const handleUpiSubmit = () => {
    navigate('/cart/checkOut:paymentSuccess')
    localStorage.removeItem('address');
  };

  return (
    <Box
      h='560px'
      w="50%"
      p="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      margin="auto"
      mt="0"
      borderRadius='10px'
      boxShadow='0 0 10px 2px rgb(231, 231, 231)'
    >
      <Text fontSize="29px" fontWeight="600" mb="20px">
        payment
      </Text>
      <Box w="55%" display="flex" flexDirection="column" gap="7px">
        <Stack direction="row" justify="space-between">
          <Text>Subtotal</Text>
          <Text fontWeight="600">₹{total}</Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text>Amount to be paid</Text>
          <Text fontWeight="600">₹{total - discount + 40}</Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text>Total Items</Text>
          <Text fontWeight="600">{cartProducts.length} Items</Text>
        </Stack>
      </Box>
      <Text m="10px 0" color="green" fontWeight="500">
        Total saving on the items ₹{discount} 🎉
      </Text>
      <Box
        w="65%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image
          src="https://cdn.zeebiz.com/sites/default/files/2024/01/03/274966-upigpay.jpg"
          alt="upi"
          h="150px"
          w="200px"
        />
        <FormControl mb="20px">
          <FormLabel fontWeight="600" textAlign="center">
            Upi id
          </FormLabel>
          <Stack direction="row" spacing="10px">
            <Input
              placeholder="enter your upi id"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
            />
            <Button
              type="submit"
              onClick={handleUpiSubmit}
              colorScheme="green"
              w="34%"
            >
              Submit
            </Button>
          </Stack>
        </FormControl>
        <UpiCancel />
        <Button onClick={()=>navigate('/cart/checkOut:shippingAddress')} mt='15px'>Back</Button>
      </Box>
    </Box>
  );
};

export default CheckOutPayment;
