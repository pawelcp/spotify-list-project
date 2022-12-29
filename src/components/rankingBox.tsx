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
  const [open, setOpen] = useState<boolean>(false)
  useEffect(()=>{
    try{
      const getTop30Handler = async() => { 
      const data:IndexProps = await getTop30()
      setTop30(data)
      }
    getTop30Handler()
    }catch(error:any){return error.message} 
  },[])

console.log(artistData);
console.log(open);


  
  return (
    <Center>
    <Grid  templateColumns={{md:'repeat(3, 1fr)', sm:'repeat(1, 1fr)'}} marginTop='2vh'  w='80%' gap='8'>
    {top30!==undefined&& top30.data.map((artistRank:RankingType) =>
        {return( 
        <GridItem w='100%'> 
           <Box onClick={async() => { const limit = '1'
            const data =  await getArtistSearch(artistRank.artist,limit); setArtistData(data);setOpen(true)
              }} boxShadow='2xl' cursor='pointer' w='100%' borderRadius='lg' bg='#191414' h='12vh' overflow='hidden' _hover={{bg:'black'}}>  
               <Flex h='12vh'>
                 <Center>
                 <Text justifySelf='center' fontSize='2xl' ml='4' fontWeight='medium' color='white'>{artistRank.artist}</Text> 
                 </Center>
                 <Spacer ></Spacer>
                 <Flex flexDirection='column'>
                 <Box justifySelf='center' margin='auto' pr='2'>
                  <Text fontSize='md'  textAlign='center' color='white'>Rank</Text>
                  <Text fontSize='3xl' textAlign='center' color='white' >{artistRank.rank}</Text>
                 </Box>
                 </Flex>
               </Flex>
           </Box>
        </GridItem>)} )}
    </Grid>
        {open?(
          <Flex onClick={()=>{setOpen(false)}} position="fixed" top='0' left='0'  bg="rgba(0, 0, 0, .7)"  w='100vw' h='100vh'>
          {artistData && artistData.artists?.items.map((artist) => {
                return (
                <Center mx='auto'>
                    <Box rounded='lg' p='2' margin='0 auto' boxShadow='dark-lg' w={{xl:'39vw',md:'60vw', sm:'80vw'}}  textColor='white' bg='#191414'>
                        <Flex>
                            <Center>
                              <Box ml='3'  w='60' maxW='190px' >
                                  <Center>
                                    {artist.data.profile.name.length < 17 && <Text fontSize='2xl' fontWeight='medium'>{artist.data.profile.name}</Text>}
                                    {artist.data.profile.name.length > 17 && <Text fontSize='xl' fontWeight='medium'>{artist.data.profile.name}</Text>}
                                  </Center>
                                  <Center>
                                    <Link color='green.500' href={artist.data.uri}>Listen on spotify
                                      <Center>
                                        <BsSpotify></BsSpotify>
                                      </Center>
                                    </Link>
                                  </Center>
                              </Box>
                            </Center>
                            <Spacer></Spacer>
                            {artist.data.visuals.avatarImage !== null && 
                            <Image rounded='lg' h={{md:'150',sm:'150'}} maxH='150' minW={{sm:'150', md:'auto'}} src={artist.data.visuals.avatarImage.sources[0].url}></Image>}
                            {artist.data.visuals.avatarImage === null && 
                            <Image rounded='lg' h={{md:'150',sm:'150'}} maxH='150' minW={{sm:'150', md:'auto'}} src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></Image>}
                            
                        </Flex>
                    </Box>
                </Center>)}
            )}
          </Flex>
        )  :null}
        </Center>
      )
}

  export default RankingBox