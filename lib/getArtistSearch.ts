import { SearchResponse } from "../src/models/searchTypes";

export async function getArtistSearch(artist:string, limit:string) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd4c8163737msh342b5e054129b7ep176871jsn002757b82d94',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    try{
        const res = await fetch(`https://spotify81.p.rapidapi.com/search?q=${artist}&type=artists&offset=0&limit=${limit}&numberOfTopResults=5`, options) 
        const data:SearchResponse = await res.json()
        return data
    }catch(error:any){error.message}
}