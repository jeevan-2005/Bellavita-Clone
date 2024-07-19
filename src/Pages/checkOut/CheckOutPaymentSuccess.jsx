import { Box, Stack } from '@chakra-ui/react'
import CheckOut from './CheckOut'
import PaymentSuccess from '../../Components/paymentSuccess/PaymentSuccess'

const CheckOutPaymentSuccess = () => {
  return (
    <Box w='80%' margin='auto' mt='50px' mb='50px' >
      <Stack direction="row" justify='space-around'>
        <CheckOut />
        <PaymentSuccess />
      </Stack>
    </Box>
  )
}

export default CheckOutPaymentSuccess
