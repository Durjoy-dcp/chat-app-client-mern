import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const postDetails = (pics) => {};
  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type={"email"}
          required
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            required
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightAddon>
            <Button onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightAddon>
        </InputGroup>
      </FormControl>

      <Button
        width={"100%"}
        colorScheme={"blue"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
