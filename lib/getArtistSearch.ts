import { SearchResponse } from "../src/models/searchTypes";

export async function getArtistSearch(artist:string, limit:string) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07081e7ec7msh25cb134fe5bd78fp167efcjsn842d232e737d',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    try{
        const res = await fetch(`https://spotify81.p.rapidapi.com/search?q=${artist}&type=artists&offset=0&limit=${limit}&numberOfTopResults=5`, options) 
        const data:SearchResponse = await res.json()
        return data
    }catch(error:any){error.message}
}