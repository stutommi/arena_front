import { PlayerMovement, PlayerIsDead, Position } from '../../types'
import { initListeners } from '../utils'

export class Player {
    playerMovement: PlayerMovement
    isDead: PlayerIsDead
    socket: SocketIOClient.Socket

    constructor(socket: SocketIOClient.Socket) {
        this.playerMovement = { up: false, down: false, left: false, right: false }
        this.isDead = false
        this.socket = socket
    }

    // Start listening on events from mouse and keyboard
    initListeners(): void {
        initListeners(this)
    }

    // Emit actions to server
    emitMovement(): void {
        this.socket.emit('playerMovement', { ...this.playerMovement})
    }

    // Emit actions to server
    emitMainAction(clickPos: Position): void {
        this.socket.emit('playerMainAction', clickPos)
    }
}