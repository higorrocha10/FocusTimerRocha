let lightMode = true
const buttonToggle = document.querySelector("#toggle-mode")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("dark-mode")

  const mode = lightMode ? "light" : "dark"
  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode activado` // Mejorar accesibilidad.

  lightMode = !lightMode
})
