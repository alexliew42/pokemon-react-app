/* eslint-disable react/prop-types */
const AllPokemons = ({id,name,image,type,height,weight}) => {

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
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <p>
          {type[0].type.name.charAt(0).toUpperCase() + type[0].type.name.slice(1)} {pokemon_type}
        </p>
      </div>
    </div>
  )
}

export default AllPokemons