import { useToast } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProtectedComponent = ({children}) => {
    const toast  = useToast();

    const {isAuth} = useSelector(state => state.login)

    console.log(isAuth.Auth)

    if(!isAuth.Auth)  {
        toast({
            title: 'Please Login',
            description: "Please login first to know more about the product buy the products and to visit check out page",
            status: 'info',
            duration: 3000,
            isClosable: true,
            position: 'top',
            variant: 'left-accent',
        });
        return (
            <>
                <Navigate to='/products' />
            </>
        )
    }
    return children;
}

export default ProtectedComponent
