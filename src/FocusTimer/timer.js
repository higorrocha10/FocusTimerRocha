import state from "./state.js"
import * as elemen from "./elements.js"
import { stop } from "./actions.js"
import { kitchenAudio } from "./sounds.js"

export function countDown() {
  clearTimeout(state.countdownId) // Cerando el countdown.

  if (!state.isRunning) {
    return
  }

  let minutes = Number(elemen.minutes.textContent)
  let seconds = Number(elemen.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    stop()
    kitchenAudio.play() // Agregando sonido al finalizar el tiempo.
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elemen.minutes.textContent = String(minutes).padStart(2, "0")
  elemen.seconds.textContent = String(seconds).padStart(2, "0")
}
