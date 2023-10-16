import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"
import * as element from "./elements.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countDown()

  sounds.buttonPress.play() // Agregando sonido al botón.
}

export function stop() {
  // Es mi botón de RESET.
  state.isRunning = false
  document.documentElement.classList.remove("running")

  timer.updateDisplay()
  sounds.buttonPress.play()
}

export function plusMinutes() {
  let addMinutes = Number(element.minutes.textContent)
  if (addMinutes > 55) {
    sounds.buttonPress.play()
    alert("Máximo 60 minutos! ")
    return
  }

  element.minutes.innerHTML = String(addMinutes + 5).padStart(2, "0")
  sounds.buttonPress.play()
}

export function minusMinutes() {
  let reduceMinutes = Number(element.minutes.textContent)
  if (reduceMinutes > 0) {
    element.minutes.innerHTML = String(reduceMinutes - 5).padStart(2, "0")
  }
  sounds.buttonPress.play()
}

export function forestMusic() {
  if (element.buttonForest.classList.contains("select")) {
    element.buttonForest.classList.remove("select")
    sounds.forestAudio.pause()
    return
  }

  element.buttonRain.classList.remove("select")
  sounds.rainAudio.pause()

  element.buttonCoffee.classList.remove("select")
  sounds.coffeeAudio.pause()

  element.buttoncampFire.classList.remove("select")
  sounds.campFireAudio.pause()

  element.buttonForest.classList.add("select")
  sounds.forestAudio.play()
}

export function rainMusic() {
  if (element.buttonRain.classList.contains("select")) {
    element.buttonRain.classList.remove("select")
    sounds.rainAudio.pause()
    return
  }

  element.buttonForest.classList.remove("select")
  sounds.forestAudio.pause()

  element.buttonCoffee.classList.remove("select")
  sounds.coffeeAudio.pause()

  element.buttoncampFire.classList.remove("select")
  sounds.campFireAudio.pause()

  element.buttonRain.classList.add("select")
  sounds.rainAudio.play()
}

export function coffeeMusic() {
  if (element.buttonCoffee.classList.contains("select")) {
    element.buttonCoffee.classList.remove("select")
    sounds.coffeeAudio.pause()
    return
  }

  element.buttonForest.classList.remove("select")
  sounds.forestAudio.pause()

  element.buttonRain.classList.remove("select")
  sounds.rainAudio.pause()

  element.buttoncampFire.classList.remove("select")
  sounds.campFireAudio.pause()

  element.buttonCoffee.classList.add("select")
  sounds.coffeeAudio.play()
}

export function campfireMusic() {
  if (element.buttoncampFire.classList.contains("select")) {
    element.buttoncampFire.classList.remove("select")
    sounds.campFireAudio.pause()
    return
  }

  element.buttonForest.classList.remove("select")
  sounds.forestAudio.pause()

  element.buttonRain.classList.remove("select")
  sounds.rainAudio.pause()

  element.buttonCoffee.classList.remove("select")
  sounds.coffeeAudio.pause()

  element.buttoncampFire.classList.add("select")
  sounds.campFireAudio.play()
}
