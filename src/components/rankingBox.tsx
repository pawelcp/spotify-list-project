import React, { useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { IndexProps, RankingType } from '../models/RankingProps'

const RankingBox = ({data}:IndexProps ) => {
      return (
        <Center>
        <Grid templateColumns='repeat(3, 1fr)' marginTop='8vh'  w='90%' gap={19}>
          {data.map((artist:RankingType) =>
           {return( 
           <GridItem w='90%' marginTop='15'> 
              <Box borderWidth='1px'  borderRadius='lg' bg='blackAlpha.800' h='12vh' overflow='hidden'>
                <Center>
                  <Flex flexDirection='column'>
                    <Center>
                    <Text mt='2' fontSize='2xl' color='white'>{artist.artist}</Text>
                    </Center>
                    <Center>
                    <Text fontSize='3xl' color='white'>{artist.rank}</Text>
                    </Center>
                  </Flex>
                </Center>
              </Box>
           </GridItem>)} )}
        </Grid>
        </Center>
      )
}
  export default RankingBox