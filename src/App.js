import React, { useEffect, useState } from 'react'
import { Body, Main, ProfileImage, PokeImage, H1, PokeName, Form, Input, Buttons, Button } from './style'
import PokeDex from './images/pokedex.png'
import DavidPerfil from './images/david-perfil.jpg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import axios from 'axios';

const App = () => {

  const [pokemon, setPokemon] = useState('')
  
  const getPokemon = (pokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      setPokemon(res.data)
      setPokemonImage(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
    }).catch((err) => {
      setPokemon({name: 'Não encontrado', id: pokemonNumber})
    })
  }

  const [search, setSearch] = useState('')
  const [pokemonNumber, setPokemonNumber] = useState(1)
  const [pokemonImage, setPokemonImage] = useState('')

  useEffect(() => {
    getPokemon(pokemonNumber)
  }, [pokemonNumber])

  const clickButtonNext = () => {
    setPokemonImage('https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif')
    pokemon.name = 'Carregando...'
    setPokemonNumber(pokemon.id + 1)
  }

  const clickButtonPrev = () => {
    if (pokemonNumber > 1) {
      setPokemonImage('https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif')
      pokemon.name = 'Carregando...'
      setPokemonNumber(pokemon.id - 1)
    }
  }

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const onKey = (event) => {
    setPokemonImage('https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif')
    pokemon.name = 'Carregando...'
    event.preventDefault()
    getPokemon(search.toLowerCase())
    setSearch('')
  }

  return (
    <Body>
      <Main>
        <ProfileImage href='https://www.linkedin.com/in/david-henrique-2a9135238/' target='_blank'><img src={DavidPerfil} alt='Foto do David Henrique'/></ProfileImage>
        <PokeImage src={pokemonImage} alt="pokemon" />
        <H1>
          <span>{pokemon.id}-</span>
          <PokeName>{pokemon.name}</PokeName>
        </H1>
        <Form onSubmit={onKey}>
          <Input onChange={onChangeSearch} value={search} type="search" placeholder="Nome ou ID" required />
        </Form>
        <Buttons>
          <Button onClick={clickButtonPrev}><FaArrowAltCircleLeft/></Button>
          <Button onClick={clickButtonNext}><FaArrowAltCircleRight/></Button>
        </Buttons>
        <img src={PokeDex} alt="pokedex" />
      </Main>
    </Body>
  )
}

export default App