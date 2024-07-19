import CheckOutPayment from "../../Components/checkOutPayment/CheckOutPayment";
import CheckOut from "./CheckOut";
import { Box, Stack } from "@chakra-ui/react";

const CheckOutPaymentPage = () => {
  return (
    <Box w="80%" margin="auto" mt="50px" mb="50px">
      <Stack direction="row">
        <CheckOut />
        <CheckOutPayment />
      </Stack>
    </Box>
  );
};

export default CheckOutPaymentPage;
