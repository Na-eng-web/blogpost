"use client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import BlogCard from "./Componant/BlogCard";
import Link from "next/link";

import { UseCart } from "./Context";

export default function Home() {
  const { item, setItem, setItemnumber, data } = UseCart();
  return (
    <Box p={4}>
      <Text>React Blog Post</Text>
      {/* <Grid
        templateAreas={{
          lg: `"header f"
          "header s"
          "header t"`,
          base: `"header" "f" "s" "t" `,
        }}
        gridTemplateRows={{ base: "1fr 1fr 1fr 1fr", lg: "1fr 1fr 1fr" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gridGap={1}
      >
        <GridItem minH={"5xl"} area={"header"} bg={"red"}>
          <BlogCard />
        </GridItem>
        <GridItem area={"f"} bg={"green"}>
          <BlogCard />
        </GridItem>
        <GridItem area={"s"} bg={"blue"}>
          s
          <BlogCard />
        </GridItem>
        <GridItem area={"t"} bg={"yellow"}>
          t
        </GridItem>
      </Grid> */}
      <text>All blog</text>
      <SimpleGrid
        justifyItems={"center"}
        alignItems={"center"}
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        // padding="10px"
        spacing={6}
      >
        {data.data &&
          data.data.articles.map((e, index) => {
            return (
              <Link
                onClick={() => {
                  setItem(e);
                  setItemnumber(index + 1);
                }}
                key={index}
                href={"/body"}
              >
                <BlogCard data={e} />
              </Link>
            );
          })}
      </SimpleGrid>
    </Box>
  );
}
