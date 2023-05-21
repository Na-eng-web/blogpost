"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { UseCart } from "../Context";
import { useForm } from "react-hook-form";
const page = () => {
  const { item, setItem, comment, setComment, itemnumber } = UseCart();

  let com = comment.filter((e) => e.itemnumber === itemnumber);

  const { register, handleSubmit } = useForm();
  return (
    <>
      <Flex p={5} flexDirection={"column"} justify={"center"}>
        <Heading fontSize={"5xl"}>{item.title}</Heading>
        <Image
          // w={"50%"}
          src={item.urlToImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Text>{item.description}</Text>
      </Flex>
      <VStack>
        <form
          onSubmit={handleSubmit((data) => {
            setComment([...comment, { ...data, itemnumber: itemnumber }]);
          })}
        >
          <Input
            placeholder="Name"
            {...register("name", { required: true })}
            required
            type="text"
          />

          <Input
            my={2}
            placeholder="Email"
            {...register("Email", { required: true })}
            type="email"
          />

          <Textarea
            mb={2}
            placeholder="Write your Comment"
            {...register("comment", { required: true })}
          />

          <Button type="submit">Add Comment</Button>
        </form>
      </VStack>
      <Heading fontSize={"lg"}>Comments</Heading>

      <Flex p={5} justify={"left"} flexDir={"column"}>
        {com.map((e, index) => {
          return (
            <Box m={2}>
              <Text>{e.comment}</Text>
              <Text as="sub">-{e.name}</Text>
              <Divider />
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default page;
