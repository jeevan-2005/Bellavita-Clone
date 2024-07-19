import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InfiniteSlider from "../../elements/InfiniteSlider/InfiniteSlider";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_FROM_CART, EDIT_QUANTITY, UPDATE_TOTAL } from "../../Redux/actionTypes";
import CartItem from "../../Components/singleCartItem/CartItem";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { cartProducts, error, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [
    { id: 1, item: <p>🤩 FREE GIFT WORTH ₹99 ON ALL PREPAID ORDERS 🎉</p> },
    { id: 2, item: <p>🤩 FREE GIFT WORTH ₹99 ON ALL PREPAID ORDERS 🎉</p> },
  ];

  const handleQuantityChange = (quantity, id) => {
    if (quantity != 0) {
      dispatch({
        type: EDIT_QUANTITY,
        payload: { id: id, quantity: quantity },
      });
    } else {
      dispatch({
        type: DELETE_FROM_CART,
        payload: id,
      });
    }
  };

  useEffect(() => {
    totalPriceOfCart();
  }, [cartProducts]);

  const totalPriceOfCart = () => {
    let sum = 0;
    cartProducts.forEach(({ item, quantity }) => {
      sum +=
        Math.floor(item.price - (item.price * item.discountPercentage) / 100) *
        quantity;
    });
    dispatch({type: UPDATE_TOTAL, payload: sum});
  };

  if (error) return <div>!! ERROR OCCURED !!</div>;

  return (
    <>
      <Link onClick={onOpen}>
        <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
      </Link>
      <div className="cartCount">{cartProducts.length}</div>

      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent className="drawer">
          <DrawerCloseButton />
          <DrawerHeader
            letterSpacing="2px"
            pb="0"
            mt="10px"
            fontSize="18px"
            p="10px 0 0 0"
          >
            CART
          </DrawerHeader>
          <InfiniteSlider items={items} name="textSlider" />
          <DrawerBody>
            <Stack spacing="24px">
              {cartProducts.length === 0 ? (
                <Text
                  display="flex"
                  letterSpacing="2px"
                  alignItems="center"
                  justifyContent="center"
                  height="500px"
                >
                  Cart is empty
                </Text>
              ) : (
                cartProducts.map(({ item, quantity }) => (
                  <CartItem key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} description={item.description} quantity={quantity} price={item.price} discountPercentage={item.discountPercentage} handleQuantityChange={handleQuantityChange} />
                ))
              )}
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px" bg="none">
            <Button
              variant="outline"
              color="white"
              p="25px"
              className="checkOut"
              fontSize="12px"
              letterSpacing="1.5px"
              w="100%"
              borderRadius="none"
              bgColor="black"
              onClick={()=>{ navigate("/cart/checkOut:shippingAddress"); onClose()}}
            >
              CHECK OUT — ₹{total}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
