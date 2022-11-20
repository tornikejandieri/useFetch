import { useEffect, useState } from "react";

export function useFetch(url: string){
  const [data, setData] = useState<any | null>([])
  const [loading, setLoading] = useState<boolean>(false)
  
  async function getData(){
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    setData(data)
    console.log(data)
    setLoading(false)
  }
  
  useEffect(() => {
    getData()
  }, [url])

  return { data, loading }
}
