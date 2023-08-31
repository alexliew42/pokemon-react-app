import {useState, useEffect} from "react"
import AllPokemons from './components/allPokemons.jsx'
import {BarChart, Bar, XAxis, YAxis} from 'recharts'

function App() {
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=5')
  const [pokemonInformation, setPokemonInformation] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getPokemons = async() => {
    const data = await fetch(loadPoke)
    const response = await data.json() 
    setLoadPoke(response.next)
    {console.log(response.next)}

    function createPokemonObject(result){
      result.forEach(async (pokemon) => {
        const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const res = await info.json()
        setPokemonInformation(currentList => [...currentList, res])
        setIsLoading(false)
      })
    }
    createPokemonObject(response.results)
    await console.log(pokemonInformation)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  if (isLoading) {
    return (
      <div>
        This page is still loading
      </div>
    )
  }

 

  return(
    <div className='container'>
      {console.log(pokemonInformation)}
      <BarChart width={600} height={300} data={pokemonInformation[0].stats}>
        <Bar dataKey="base_stat" barSize={30} fill="#8884d8"/> 
        <XAxis dataKey='stat["name"]'/>
        <YAxis />
      </BarChart>
      <h1>POKEMON!!</h1>
      <div className="pokemon" style={{display: 'flex', flexFlow: 'row wrap', padding:'20px'}}>
          {pokemonInformation.map((pokemon, index) => 
            <AllPokemons
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            type={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
            stat1={pokemon.stats[0].base_stat}
            stat2={pokemon.stats[1].base_stat}
            stat3={pokemon.stats[2].base_stat}
            stat4={pokemon.stats[3].base_stat}
            stat5={pokemon.stats[4].base_stat}
            stat6={pokemon.stats[5].base_stat}
            
          />
        )}
      </div>
    </div>
  )
 
}

export default App
