import React, { useEffect } from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { IndexProps, RankingType } from '../models/RankingProps'
import { SP } from 'next/dist/shared/lib/utils'

const RankingBox = ({data}:IndexProps ) => {
      return (
        <Center>
        <Grid templateColumns={{md:'repeat(3, 1fr)', sm:'repeat(1, 1fr)'}} marginTop='2vh'  w='80%' gap={50}>
          {data.map((artist:RankingType) =>
           {return( 
           <GridItem w='100%'> 
              <Box  boxShadow='2xl'   w='100%' borderRadius='lg' bg='blackAlpha.800' h='12vh' overflow='hidden'>  
                  <Flex>
                    <Center>
                    <Text fontSize='3xl' ml='4' fontWeight='medium' p='2' color='white'>{artist.artist}</Text> 
                    </Center>
                    <Spacer ></Spacer>
                    <Flex flexDirection='column' mr='3' mt='2'>
                    <Text fontSize='md' textAlign='center' color='white'>Rank</Text>
                    <Text fontSize='4xl'textAlign='center' color='white' >{artist.rank}</Text>
                    </Flex>
                  </Flex>
              </Box>
           </GridItem>)} )}
        </Grid>
        </Center>
      )
}
  export default RankingBox