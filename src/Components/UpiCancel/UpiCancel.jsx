import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpiCancel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const navigate = useNavigate()

    const handleUpiCancel = ()=>{
        navigate('/');
        localStorage.removeItem('address');
    }
  
    return (
      <>
        <Button onClick={onOpen}>
          Cancel Payment
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isCentered
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader textAlign='center' fontSize='lg' fontWeight='bold'>
                Cancel Payment
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You wan't to cancel the payment.
              </AlertDialogBody>
  
              <AlertDialogFooter background='none' >
                <Button ref={cancelRef} onClick={onClose}>
                  Back
                </Button>
                <Button colorScheme='red' onClick={handleUpiCancel} ml={3}>
                  Cancel Payment
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default UpiCancel
