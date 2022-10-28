import { useFetch } from './useFetch'

// key should be unique
// this API link doesnt support unique id's

function App() {
  const url = 'https://restcountries.com/v2/name/Georgia'
  const { data } = useFetch(url)
  
  return (
    <div className="App">  
     {
      data.map((country: any | null) => (
        <div key={2}>
          <p>{ country.name }</p>  
        </div>  
      ))
     } 
    </div>
  )
}

export default App


