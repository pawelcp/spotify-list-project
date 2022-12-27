import React, { useEffect, useState } from 'react'
import { Grid, GridItem, Button, Center, Input, Flex, Box, Image, Spacer , Text, Link } from '@chakra-ui/react'
import { IndexProps, RankingType } from '../models/RankingProps'
import { getTop30 } from '../../lib/getTop30'
import { SearchResponse } from '../models/searchTypes'
import { getArtistSearch } from "../../lib/getArtistSearch";
import {BsSpotify} from 'react-icons/bs'

const RankingBox = () => {

  const [top30, setTop30] = useState<IndexProps>()
  const [artistData, setArtistData] = useState<SearchResponse>()
  useEffect(()=>{
    try{
      const getTop30Handler = async() => { 
      const data:IndexProps = await getTop30()
      setTop30(data)
      }
    getTop30Handler()
    }catch(error:any){return error.message} 
  },[])
  useEffect(() => {
         const getSearchData = async () => {
          if(top30?.data)
            try{ 
            const limit = '1'
            for(const artistLoop of top30.data){
            const data = await getArtistSearch(artistLoop.artist, limit)
            setArtistData(data)}

            }catch(error:any){error.message}
        };getSearchData();
},[])
console.log(artistData);




  
      return (
        <Center>
        <Grid m='auto' templateColumns={{md:'repeat(3, 1fr)', sm:'repeat(1, 1fr)'}} marginTop='2vh'  w='90%' gap='4'>
        {top30!==undefined && top30.data.map((artist:RankingType) =>
        {return(
        <GridItem w='60%'>
           {top30!==undefined && artistData?.artists.items.map((artistData) => {
                return (
                <Center>
                    <Box rounded='lg' boxShadow='dark-lg' w={{xl:'30vw',md:'50vw', sm:'70vw'}} h='150' textColor='white' mt='4' bg='blackAlpha.800'>
                        <Flex>
                            <Center>
                            <Box w='60' maxW='190px' >
                                <Center>
                                {artistData.data.profile.name.length < 17 && <Text fontSize='2xl' fontWeight='medium'>{artistData.data.profile.name}</Text>}
                                {artistData.data.profile.name.length > 17 && <Text fontSize='xl' fontWeight='medium'>{artistData.data.profile.name}</Text>}
                                </Center>
                                <Center>
                                <Link color='green.500' href={artistData.data.uri}>Listen on spotify
                                    <Center>
                                    <BsSpotify></BsSpotify>
                                    </Center>
                                </Link>
                                </Center>
                            </Box>
                                <Flex flexDirection='column' mr='3' mt='2'>
                                  <Text fontSize='md' textAlign='center' color='white'>Rank</Text>
                                  <Text fontSize='4xl'textAlign='center' color='white' >{artist.rank}</Text>
                                </Flex>
                            </Center>
                            <Spacer></Spacer>
                            {artistData.data.visuals.avatarImage !== null && 
                            <Image rounded='lg' h={{md:'150',sm:'150'}} maxH='150' minW={{sm:'150', md:'auto'}} src={artistData.data.visuals.avatarImage.sources[0].url}></Image>}
                            {artistData.data.visuals.avatarImage === null && 
                            <Image rounded='lg' h={{md:'150',sm:'150'}} maxH='150' minW={{sm:'150', md:'auto'}} src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></Image>}
                            
                        </Flex>
                    </Box>
                </Center>)}
            )}
        </GridItem>)} )}
        </Grid>
        </Center>
      )
}

  export default RankingBox