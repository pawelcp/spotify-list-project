import { IndexProps } from "../src/models/RankingProps";

export async function getTop30() {
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "d4c8163737msh342b5e054129b7ep176871jsn002757b82d94",
          "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
        },
      };
    try{
        const res = await fetch(
            "https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners",
            options
          );
          const data:IndexProps = await res.json()
          return {data}
    }catch(error:any) {
        return error.message
    }
}