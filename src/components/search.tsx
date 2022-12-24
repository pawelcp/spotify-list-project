import { Button, Center, Input, Flex, Box, Image, Spacer , Text, Link} from "@chakra-ui/react"
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { SearchResponse } from "../models/searchTypes";
import {BsSpotify} from 'react-icons/bs'

const Search = () => { 

    const [artist, setArtist] = useState('')
    const [data, setData] = useState<SearchResponse>()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '07081e7ec7msh25cb134fe5bd78fp167efcjsn842d232e737d',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };
        if(artist === ''){
            return
        }else{
             const getSearchData = async () => {
                try{ 
                const res = await fetch(`https://spotify81.p.rapidapi.com/search?q=${artist}&type=artists&offset=0&limit=10&numberOfTopResults=5`, options) 
                const data = await res.json()
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
                                <Text fontSize='2xl' fontWeight='medium'>{artist.data.profile.name}</Text>
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
                            <Image rounded='lg' h={{md:'150',sm:'150'}} maxH='150' minW={{sm:'150', md:'auto'}} src={artist.data.visuals.avatarImage?.sources[0].url}></Image>
                            
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