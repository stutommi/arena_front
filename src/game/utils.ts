import { Player } from './classes/Player'

export const initListeners = (player: Player): void => {
    console.log('initListeners');

    document.addEventListener('keydown', (e) => {
        switch (e.keyCode) {
            case 65: // A
                player.playerMovement.left = true
                break;
            case 87: // W
                player.playerMovement.up = true
                break;
            case 68: // D
                player.playerMovement.right = true
                break;
            case 83: // S
                player.playerMovement.down = true
                break;
            default:
                break;
        }
    })

    document.addEventListener('keyup', (e) => {
        switch (e.keyCode) {
            case 65: // A
                player.playerMovement.left = false
                break;
            case 87: // W
                player.playerMovement.up = false
                break;
            case 68: // D
                player.playerMovement.right = false
                break;
            case 83: // S
                player.playerMovement.down = false
                break;
            default:
                break;
        }
    })

    document.addEventListener('click', (e) => {
        player.emitMainAction({ x: e.clientX, y: e.clientY })
    })
}