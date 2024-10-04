const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
btn.addEventListener("click" , (e) => {
    e.preventDefault()
    if (container.innertext == "light") {
        container.Style.backgroundcolor = "red"
    }
} )