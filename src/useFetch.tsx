import { useEffect, useState } from "react";

export function useFetch(url: string){
  const [data, setData] = useState<any | null>([])

  useEffect(() => {
    fetch(url)
    .then(resp => {return resp.json()})
    .then(data => {setData(data)})
    
  }, [url])

  return { data }
}