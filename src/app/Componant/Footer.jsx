import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box p={5}>
      <Flex justify={"space-between"}>
        <VStack w={"fit-content"}>
          <Heading>Sign up to our newslatter</Heading>
          <Text>stey update with our website newslate</Text>
        </VStack>
        <HStack>
          <Input w={"15rem"} />
          <Button>Subscribe</Button>
        </HStack>
        {/* <InputGroup>
          <InputRightAddon>Subscribe</InputRightAddon>
        </InputGroup> */}
      </Flex>
      <VStack justify={"center"}>
        <Heading>Untitiled Ui</Heading>
        <Text>Design amezing webstit using saasfaf</Text>
        <HStack>
          <Text>a</Text>
          <Text>b</Text>
          <Text>c</Text>
          <Text>d</Text>
          <Text>e</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
