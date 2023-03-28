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

const Signup = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const postDetails = (pics) => {};
  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
      <FormControl id="first-name">
        <FormLabel>Name</FormLabel>
        <Input
          required
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>
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
      <FormControl id="confirm-password">
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            required
            placeholder="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
          <InputRightAddon>
            <Button onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightAddon>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        width={"100%"}
        colorScheme={"blue"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
