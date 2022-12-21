import { Button, Center, Input, Flex, Box } from "@chakra-ui/react"
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { SearchResponse } from "../models/searchTypes";

const Search = () => { 

    const [artist, setArtist] = useState('')
    const [data, setData] = useState<SearchResponse>()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '07081e7ec7msh25cb134fe5bd78fp167efcjsn842d232e737d',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        if(artist === ''){
            return
        }else{
             const getSearchData = async () => {
                try{ 
                const res = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${artist}%3CREQUIRED%3E&type=artists&offset=0&limit=10&numberOfTopResults=5`, options) 
                const data = await res.json()
                setData(data)

                }catch(error:any){error.message}
            };getSearchData();
    }}, [artist])


console.log(data);

    
    return(
    <div>
        <Center>
            <Input w='40vw' my='2' variant='flushed' placeholder='Flushed' value={artist} /*onChange={(e)=>{setArtist(e.target.value)}}*/></Input>
            <Button onClick={()=> {setArtist('young multi')}}>click</Button>
        </Center>
        <Flex flexDirection='column'>
            {data && data.artists.items.map((artist) =>
            {console.log(data.artists.items);
            
                return (
                <Center>
                    <Box w='40vw' h='8vh' textColor='white' mt='4' bg='blackAlpha.800'>{artist.data.profile.name}</Box>
                </Center>)}
            )}
        </Flex>
    </div>
    )
 }

 export default Search