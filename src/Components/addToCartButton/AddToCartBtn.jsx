import { Button, useToast } from '@chakra-ui/react'
import './addtocartBtn.css'
import { fetchCartItem } from '../../Redux/actionTypes'
import { useDispatch, useSelector } from 'react-redux'

const AddToCartBtn = (props) => {
  const dispatch = useDispatch()
  const toast = useToast()


  const handleAddToCart = (id)=>{
    dispatch(fetchCartItem(id));
  }

  return (
    <Button onClick={() =>{ handleAddToCart(props.id),toast({
      position: 'top',
      title: 'Product Successfully Added',
      description: "We've add your product in the cart successfully",
      status: 'success',
      variant: 'top-accent',
      duration: 1000,
      isClosable: true,
    })}} colorScheme="black" className="addToCart" variant='outline' fontSize='12px' letterSpacing='1.5px' borderRadius='0' w='100%'>{props.text}</Button>
  )
}

export default AddToCartBtn
