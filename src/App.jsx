import {useState, useEffect} from "react"
import AllPokemons from './components/allPokemons.jsx'

function App() {
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=5')
  const [pokemonInformation, setPokemonInformation] = useState([])

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
      })
    }
    createPokemonObject(response.results)
    await console.log(pokemonInformation)
  }


  useEffect(() => {
    getPokemons()
  }, [])

  return(
    <div>
      <h1>POKEMON!!</h1>
      <div className="pokemon" style={{display: 'flex', flexFlow: 'row wrap', padding:'20px'}}>
          {pokemonInformation.map((pokemon, index) => 
            <AllPokemons
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types}
          />
        )}
      </div>
    </div>
  )
 
}

export default App
