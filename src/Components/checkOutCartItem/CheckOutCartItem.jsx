import { Box, Button, Divider, Image, Stack, Text } from "@chakra-ui/react";
import "./checkOutCartItem.css";

const CheckOutCartItem = (props) => {
  const {
    id,
    thumbnail,
    title,
    description,
    quantity,
    price,
    discountPercentage,
  } = props;

  return (
      <Box key={id} className="CheckOutcartItem">
        <Stack direction="row">
          <Image src={thumbnail} />
          <Stack>
            <Text className="titleCheckOut">{title}</Text>
            <Text className="descCheckOut">{description}</Text>
            <Stack direction="row" justify="space-between" w="330px">
              <Box>
                <Stack direction="row">
                  <Text className="quantity">Quantity: {quantity}</Text>
                </Stack>
              </Box>

              <Box>
                <Stack direction="row" align="baseline">
                  <Text className="newPriceCheckOut" >
                    ₹
                    {Math.floor(price - (price * discountPercentage) / 100) *
                      quantity}
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      
  );
};

export default CheckOutCartItem;
