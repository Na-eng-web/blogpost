"use client";
import { Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={4}>
      <Text>React Blog Post</Text>
      <Grid
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
        <GridItem area={"header"} bg={"red"}>
          main
        </GridItem>
        <GridItem area={"f"} bg={"green"}>
          f
        </GridItem>
        <GridItem area={"s"} bg={"blue"}>
          s
        </GridItem>
        <GridItem area={"t"} bg={"yellow"}>
          t
        </GridItem>
      </Grid>
      <text>All blog</text>
      <SimpleGrid
        justifyItems={"center"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        // padding="10px"
        spacing={6}
      >
        <Box boxSize={"8rem"} bg={"tomato"}>
          a
        </Box>
        <Box boxSize={"8rem"} bg={"tomato"}>
          a
        </Box>
        <Box boxSize={"8rem"} bg={"tomato"}>
          a
        </Box>
        <Box boxSize={"8rem"} bg={"tomato"}>
          a
        </Box>
        <Box boxSize={"8rem"} bg={"tomato"}>
          a
        </Box>
        <Box boxSize={"8rem"} bg={"tomato"}>
          a
        </Box>
      </SimpleGrid>
    </Box>
  );
}
