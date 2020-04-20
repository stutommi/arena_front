import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import playGame from './game/main'

const App = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    playGame(canvas.current)
  }, [])

  return (
    <Game ref={canvas} id='game' height='800' width='800'>
      <div>This game doesn&lsquo;t work on your browser :(</div>
    </Game>

  )
}

const Game = styled.canvas`
    border: 2px solid black;
`

export default App
