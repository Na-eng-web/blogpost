import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Serch from "./Serch";

const NavBar = () => {
  return (
    <>
      <Flex align={"center"} px={5} py={3} justify={"space-between"}>
        <Text w={"fit-content"} fontSize={"2xl"}>
          Untitle UI
        </Text>
        <HStack justify={"space-between"} w={"70%"}>
          <Text>Home</Text>
          <Text>Product</Text>
          <Text>Solution</Text>
          <Text>Pricing</Text>
          <Text>Resource</Text>
          <Text>Company</Text>
          <Text>Carrers</Text>
          <Button>Get Started</Button>
          <Icon as="Temp"></Icon>
        </HStack>
      </Flex>
      <Serch />
    </>
  );
};

export default NavBar;
