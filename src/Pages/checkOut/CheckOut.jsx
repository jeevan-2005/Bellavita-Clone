import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CheckOutCartItem from "../../Components/checkOutCartItem/CheckOutCartItem";
import "./CheckOut.css";

const CheckOut = () => {
  const state = useSelector((state) => state.cart);
  const { cartProducts, error, total } = state;
  const discountAmt = Math.floor(total * 0.1);

  return (
        <Box className="checkOutPageBox">
          <Stack justifyContent="space-around" spacing="10px">
            <Text
              textAlign="center"
              fontSize="20px"
              className="heading"
              m="0"
              p="0"
              fontWeight="bold"
            >
              Order Summary
            </Text>
            <Box className="CheckOutCart">
              {cartProducts.length === 0 ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  h="100%"
                  letterSpacing="2px"
                >
                  <Text>Cart is empty</Text>
                </Box>
              ) : (
                cartProducts.map(({ item, quantity }) => (
                  <CheckOutCartItem
                    key={item.id}
                    id={item.id}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    description={item.description}
                    quantity={quantity}
                    price={item.price}
                    discountPercentage={item.discountPercentage}
                  />
                ))
              )}
            </Box>
            <Box className="totalPriceBox">
              <Stack>
                <Stack direction={"row"} justify="space-between">
                  <Text>Subtotal</Text>
                  <Text>₹{total}</Text>
                </Stack>
                <Stack direction={"row"} justify="space-between">
                  <Text>Coupon Discount</Text>
                  <Text>₹{discountAmt}</Text>
                </Stack>
                <Stack direction={"row"} justify="space-between">
                  <Text>Shipping</Text>
                  <Text>₹40</Text>
                </Stack>
                <Divider />
                <Stack
                  direction={"row"}
                  fontWeight="bold"
                  justify="space-between"
                >
                  <Text>Total</Text>
                  <Text>₹{total - discountAmt + 40}</Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
  );
};

export default CheckOut;
