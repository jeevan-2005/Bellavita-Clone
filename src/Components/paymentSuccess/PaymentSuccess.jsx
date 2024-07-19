import { Box, Button, Text } from "@chakra-ui/react";
import { IoShieldCheckmark } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./paymentSucces.css";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <Box className="paymentSuccessBox">
      <Box className="icon">
        <IoShieldCheckmark color="green" fontSize="30px" />
        <Text>Payment Successfull 🎉</Text>
      </Box>
      <Box className="orderId">
        <Text fontSize='20px' fontWeight='500' >Order Id</Text>
        <Text fontSize='40px' letterSpacing='5px' fontWeight='500' >{Math.floor(Math.random() * 1000000)}</Text>
      </Box>
      <Text fontSize='15px' >Track your order using above mentiond Order Id</Text>
      <Button w='40%' onClick={() => navigate("/")}>Home</Button>
    </Box>
  );
}; 

export default PaymentSuccess;
