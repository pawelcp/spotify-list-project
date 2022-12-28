import { IndexProps } from "../src/models/RankingProps";

export async function getTop30() {
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "259cbdc1aamshfaeffc36ba0659ep1fa44ajsn56dcf1a30af7",
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