import * as actions from "./actions.js"
import * as elemen from "./elements.js"

export function registerControls() {
  elemen.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}

export function registerSounds() {
  elemen.sounds.addEventListener("click", (event) => {
    const actionSounds = event.target.dataset.action
    if (typeof actions[actionSounds] != "function") {
      return
    }

    actions[actionSounds]()
  })
}


