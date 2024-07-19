import CheckOut from "./CheckOut";
import CheckOutAddress from "../../Components/CheckOutAddress/CheckOutAddress";
import { Box, Stack } from "@chakra-ui/react";

const CheckOutShipping = () => {
  return (
    <Box w='80%' margin='auto' mt='50px' mb='50px' >
      <Stack direction="row">
        <CheckOut />
        <CheckOutAddress />
      </Stack>
    </Box>
  );
};

export default CheckOutShipping;
