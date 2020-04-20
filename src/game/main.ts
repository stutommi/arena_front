import socketIOClient from 'socket.io-client'

import { MovingObject } from '../types'
import { ENDPOINT } from '../../config'
import { Player } from './classes/Player'

const io = socketIOClient(ENDPOINT)
const player: Player = new Player(io)

player.initListeners() // Listen to game state

let clientId: string
io.on('connect', (): void => { clientId = io.id }) // Get clientId from server

setInterval(() => { player.emitMovement() }, 1000 / 60)

const playGame = (canvas: HTMLCanvasElement): void => {

  const ctx = canvas.getContext('2d')
  io.on('state', (session: any) => {
    ctx.clearRect(0, 0, 800, 800)
    console.log(session);
    session.movingObjects.forEach((mo: MovingObject) => {
      ctx.fillStyle = mo.type.color
      ctx.beginPath()
      ctx.arc(mo.currentLocation.x, mo.currentLocation.y, mo.type.size, 0, 2 * Math.PI)
      ctx.fill()
    });
    session.players.forEach((p: any) => {
      ctx.fillStyle = p.id === clientId ? 'rgb(0, 200, 0)' : 'rgb(200, 0, 0)'
      ctx.beginPath()
      ctx.arc(p.position.x, p.position.y, 10, 0, 2 * Math.PI)
      ctx.fill()
    });

  })

}

export default playGame 