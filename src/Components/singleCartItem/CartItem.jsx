import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

const CartItem = (props) => {
  const {
    id,
    thumbnail,
    title,
    description,
    quantity,
    price,
    discountPercentage,
    handleQuantityChange,
  } = props;

  return (
    <Box key={id} className="cartBoxItem">
      <Stack direction="row">
        <Image src={thumbnail} />
        <Stack>
          <Text className="title">{title}</Text>
          <Text className="desc">{description}</Text>
          <Stack direction="row" justify="space-between" w="330px">
            <Box>
              <Stack direction="row">
                <Button
                  onClick={() => handleQuantityChange(quantity + 1, id)}
                  size="s"
                  h="25px"
                  fontSize="12px"
                  w="25px"
                  borderRadius="none"
                >
                  +
                </Button>
                <Text>{quantity}</Text>
                <Button
                  onClick={() => handleQuantityChange(quantity - 1, id)}
                  size="s"
                  h="25px"
                  fontSize="12px"
                  w="25px"
                  borderRadius="none"
                >
                  -
                </Button>
              </Stack>
            </Box>

            <Box>
              <Stack direction="row" align="baseline">
                <Text className="newPrice">
                  ₹
                  {Math.floor(price - (price * discountPercentage) / 100) *
                    quantity}
                </Text>
                <Text className="oldPrice">₹{price * quantity}</Text>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartItem;
