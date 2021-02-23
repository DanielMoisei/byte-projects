import React, {useState} from "react"
import "./style.css"

function FetchSwapi() {

  const [characters, setCharacters] = useState([])
  const [species, setSpecies] = useState([])
  const [films, setFilms] = useState([])

  const loadData = async (query, state) => {
    let result = await fetch(`https://swapi.dev/api/${query}/`)
        .then(res => res.json())
        .catch(err => console.log(err))
    state(result.results)
  }

  return (
    <div id="container">

      <div className="fetch-div">
          <button
            id={!characters.length ? "blue" : null}
            disabled={characters.length ? true : false}
            onClick={() => loadData("people", setCharacters)}
            className="fetch-button"
          >Characters</button>
          <ul id="rootChar">{characters.length ? characters.map(char => <li>{char.name}</li>) : null}</ul>
      </div>


      <div className="fetch-div">
          <button
            id={!species.length ? "green" : null}
            disabled={species.length ? true : false}
            onClick={() => loadData("species", setSpecies)}
            className="fetch-button"
          >Species</button>
          <ul id="rootSpecies">{species.length ? species.map(species => <li>{species.name}</li>) : null}</ul>
      </div>


      <div className="fetch-div">
          <button
            id={!films.length ? "red" : null}
            disabled={films.length ? true : false}
            onClick={() => loadData("films", setFilms)}
            className="fetch-button"
          >Movies</button>
          <ul id="rootFilms">{films.length ? films.map(film => <li>{film.title}</li>) : null}</ul>
      </div>
    </div>
  )
}

export default FetchSwapi
