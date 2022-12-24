import React, { useEffect, useState } from "react";
import RankingBox from "../src/components/rankingBox";
import { GetServerSideProps } from "next";
import { IndexProps } from "../src/models/RankingProps";
import { Box, Center, Text, Container } from "@chakra-ui/react";
import Search from "../src/components/search";

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07081e7ec7msh25cb134fe5bd78fp167efcjsn842d232e737d",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners",
    options
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export default function Home({ data }: IndexProps) {
  return (
    <Box w="full" h="sreen" background="gray.500">
      <Search></Search>
      <Center>
        <Text fontSize="4xl" fontWeight="bold" color="white" marginTop="4vh">
          Top 30 artist spotify list
        </Text>
      </Center>
      <RankingBox data={data} />
    </Box>
  );
}
