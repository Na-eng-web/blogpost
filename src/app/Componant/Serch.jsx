import { Flex, Heading, Input, InputGroup, Text } from "@chakra-ui/react";
import React from "react";

const Serch = () => {
  return (
    <Flex flexDir={"column"} align={"center"} p={4}>
      <Heading m={3}>Inside Design:Story and Interviews</Heading>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>

      <Input placeholder="Serach" m={5} w={"25%"} />
    </Flex>
  );
};

export default Serch;
