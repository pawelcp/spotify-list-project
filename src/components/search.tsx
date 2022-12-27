import { Button, Center, Input, Flex, Box, Image, Spacer , Text, Link} from "@chakra-ui/react"
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { SearchResponse } from "../models/searchTypes";
import {BsSpotify} from 'react-icons/bs'
import { getArtistSearch } from "../../lib/getArtistSearch";

const Search = () => { 

    const [artist, setArtist] = useState('')
    const [data, setData] = useState<SearchResponse>()

    useEffect(() => {
        if(artist === ''){
            return
        }else{
             const getSearchData = async () => {
                try{ 
                const limit = '8'
                const data = await getArtistSearch(artist, limit)
                setData(data)

                }catch(error:any){error.message}
            };getSearchData();
    }}, [artist])


console.log(data);

    
    return(
    <div>
        <Center>
            <Input w='20vw' my='2' textColor='white' variant='flushed' focusBorderColor='green.500' placeholder='Search artists' _placeholder={{ opacity: 1, color: 'white' }} value={artist} /*onChange={(e)=>{setArtist(e.target.value)}}*/></Input>
            <Button onClick={()=> {setArtist('young multi')}}>click</Button>
        </Center>
        <Flex flexDirection='column'>
        {data && data.artists.items.map((artist) => {
                return (
                <Center>
                    <Box rounded='lg' boxShadow='dark-lg' w={{xl:'39vw',md:'60vw', sm:'80vw'}} h='150' textColor='white' mt='4' bg='blackAlpha.800'>
                        <Flex>
                            <Center>
                            <Box ml='3' w='60' maxW='190px' >
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
    </div>
    )
 }
//artist.data.profile.name
 export default Search