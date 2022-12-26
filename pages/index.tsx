import React, { useEffect, useState } from "react";
import RankingBox from "../src/components/rankingBox";
import { GetServerSideProps } from "next";
import { IndexProps } from "../src/models/RankingProps";
import { Box, Center, Text, Container } from "@chakra-ui/react";
import Search from "../src/components/search";
import { getTop30 } from '../lib/getTop30'

export default function Home() {



  return (
    <Box background="#AAAAAA">
      <style>{'body { background-color: #AAAAAA }'}</style>
      <Search></Search>
      <Center>
        <Text fontSize="4xl" fontWeight="bold" color="white" marginTop="4vh">
          Top 30 artist spotify list
        </Text>
      </Center>
      <RankingBox/>
    </Box>
  );
}
