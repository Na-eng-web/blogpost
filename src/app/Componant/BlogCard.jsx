import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BlogCard = ({ data }) => {
  return (
    <Card maxW="lg">
      <CardBody>
        <Image
          src={data.urlToImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.title}</Heading>

          <Text>{data.description}</Text>
          <Text as={"sub"}>{data.author}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
