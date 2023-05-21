import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Show,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Serch from "./Serch";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Flex align={"center"} px={5} py={3} justify={"space-between"}>
        <Text w={"fit-content"} fontSize={"2xl"}>
          <Link href={"/"}> Untitle UI</Link>
        </Text>
        <Show above="850px">
          <HStack justify={"space-between"} w={"70%"}>
            <Text>Home</Text>
            <Text>Product</Text>
            <Text>Solution</Text>
            <Text>Pricing</Text>
            <Text>Resource</Text>
            <Text>Company</Text>
            <HStack>
              <Switch
                colorScheme="green"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
              />
              <Text whiteSpace="nowrap">Dark Mode</Text>
            </HStack>
            <Icon as="Temp"></Icon>
          </HStack>
        </Show>
        <Show below="850px">
          <HamburgerIcon />
        </Show>
      </Flex>
      <Serch />
    </>
  );
};

export default NavBar;
