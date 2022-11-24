import { useFetch } from "./useFetch"

function App() {
  const url = "https://api.punkapi.com/v2/beers"
  const { data } = useFetch(url)
  console.log(data)

  return (
    <div>
      {data &&
        data.map((item: { name: string; id: number }) => {
          const { name, id } = item
          return <p key={id}>{name}</p>
        })}
    </div>
  )
}
export default App
