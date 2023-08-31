/* eslint-disable react/prop-types */
const AllPokemons = ({id,name,image,type}) => {

  let pokemon_type = ""
  if (type[1] === undefined) {
    pokemon_type = ""
  } else {
    pokemon_type = type[1].type.name.charAt(0).toUpperCase() + type[1].type.name.slice(1) 
  }
 

  return(
    <div className="card" style={{width : '22.5%', padding: '10px', border:'1px solid green', margin:'1.25%'}} >
      <img src={image} className="card-img-top" alt="..." style={{width : '100%'}}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{id}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">{type[0].type.name.charAt(0).toUpperCase() + type[0].type.name.slice(1)}</a>
        <a href="#" className="card-link">{pokemon_type}</a>
      </div>
    </div>
  )
}

export default AllPokemons