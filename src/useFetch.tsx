import { useEffect, useState } from "react"

export interface Root {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
  map: Function
}

export function useFetch(url: string) {
  const [data, setData] = useState<Root>()
  const [loading, setLoading] = useState<boolean>(false)

  async function getData() {
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
