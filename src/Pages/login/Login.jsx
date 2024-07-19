import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  HANDLE_LOGOUT,
  LOADING_LOGIN,
  fetchLoginDetails,
} from "../../Redux/actionTypes";
import { useState } from "react";

const Login = () => {
  const initState = {
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  let isErrorEmail = false,
    isErrorPassword = false;
  const [user, setUser] = useState(initState);
  const { email, emailError, password, passwordError } = user;
  const state = useSelector((state) => state.login);
  const { isAuth, loading, error } = state;
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: true,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nUser = {
      email: email,
      password: password,
    };
    dispatch(fetchLoginDetails(nUser));
    setUser(initState);
  };

  const handleLogOut = () => {
    dispatch({ type: LOADING_LOGIN });
    dispatch({ type: HANDLE_LOGOUT });
  };

  if (email.trim() == "") isErrorEmail = true;
  else isErrorEmail = false;

  if (password.trim() == "") isErrorPassword = true;
  else isErrorPassword = false;

  return (
    <>
      <FontAwesomeIcon
        onClick={() => onOpen()}
        icon={faUser}
        className="loginIcon"
      />

      <Modal
        isCentered
        onClose={() => {
          onClose();
        }}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent width="26%">
          <ModalHeader textAlign="center" fontSize="25px">
            {isAuth.Auth ? "Logout" : "Login"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading ? (
              <Box
                textAlign="center"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {" "}
                <Spinner />
              </Box>
            ) : isAuth.Auth ? (
              <>
                <Text textAlign={"center"}>Login Success</Text>
              </>
            ) : (
              <>
                <FormControl
                  onSubmit={handleFormSubmit}
                  isInvalid={emailError && isErrorEmail}
                  isRequired
                  mb="30px"
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="enter email"
                    fontSize="13px"
                  />
                  {emailError && isErrorEmail ? (
                    <FormErrorMessage display="inline" fontSize="12px">
                      Email is required.
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  onSubmit={handleFormSubmit}
                  isInvalid={passwordError && isErrorPassword}
                  isRequired
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="enter password"
                    fontSize="13px"
                  />
                  {passwordError && isErrorPassword ? (
                    <FormErrorMessage display="inline" fontSize="12px">
                      password is required.
                    </FormErrorMessage>
                  ) : null}
                  <Link
                    to="/login"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      fontSize: "13px",
                      padding: "6px",
                    }}
                  >
                    forgot password?
                  </Link>

                  {error != "" ? (
                    <Text textAlign="center" color="red" fontSize="13px">
                      *{error}
                    </Text>
                  ) : null}
                </FormControl>
              </>
            )}
          </ModalBody>
          <ModalFooter
            bg="none"
            display="flex"
            flexDirection='column'
            alignItems="center"
            justifyContent="center"
            gap="10px"
            color='black'
          >
            <Stack w='100%' direction='row' spacing='20px' justify='center'>
            <Button
              onClick={isAuth.Auth ? handleLogOut : handleFormSubmit}
              width="35%"
              colorScheme="blue"
            >
              {isAuth.Auth ? "Logout" : "Login"}
            </Button>
            </Stack>

            {!isAuth.Auth && (
              <Stack direction='row' fontSize='14px' >
              <Text>Dont have an account?</Text>
              <Link to='/signUp' onClick={onClose} ><span style={{color: 'rgb(49,130,206)',textDecoration: 'underline'}} >Sign up</span></Link>
            </Stack>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
