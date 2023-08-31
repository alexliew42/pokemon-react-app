/* eslint-disable react/prop-types */

const AllPokemons = ({id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6}) => {

  let pokemon_type = ""
  if (type[1] === undefined) {
    pokemon_type = ""
  } else {
    pokemon_type = type[1].type.name.charAt(0).toUpperCase() + type[1].type.name.slice(1) 
  }

  return(
    <div className="card" >
      <img src={image} className="card-img-top" alt="..." style={{width : '100%'}}/>
      <div className="card-body">
        <h5 className="card-title">{name.charAt(0).toUpperCase() + name.slice(1)} #{id}</h5>
        {/* <hr/>
        <p className="card-text">{id}</p> */}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Height: {height/10} meters <br/>
        Weight: {weight/10} kg</li>
        <li className="list-group-item">{stat1} {stat2} {stat3} {stat4} {stat5} {stat6}</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <div className={type[0].type.name}>
          {type[0].type.name.charAt(0).toUpperCase() + type[0].type.name.slice(1)}
        </div>
        <div className={pokemon_type.toLowerCase()}>
          {pokemon_type}
        </div>
      </div>
    </div>
  )
}

export default AllPokemons