import React, {useEffect, useState } from "react"
import RankingBox from "../src/components/rankingBox"
import { GetServerSideProps } from "next";
import { IndexProps } from "../src/models/RankingProps";

export const getServerSideProps:GetServerSideProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '07081e7ec7msh25cb134fe5bd78fp167efcjsn842d232e737d',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
      }
    };

    const res = await fetch('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', options)
    const data = await res.json()

  return{ 
    props: {data} 
  }
}

export default function Home({data}:IndexProps) {
  
  return (
  <>
   <RankingBox data={data}/>
  </>
  )
}
