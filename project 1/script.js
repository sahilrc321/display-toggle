const button = document.querySelector("button")
const container = document.querySelector(".container")
button.addEventListener("click" , (e) => {
    e.preventDefault()
    if (container.innerText == "Light") {
        container.style.backgroundColor = "black"
        button.style.color = "black"; // Change text color to white for visibility
        button.innerText = "Dark"; // Change the text to "Dark"
       
    }
    else if  (button.innerText=="Dark") {
        container.style.backgroundColor = "white"
        button.style.color = "black"; // Change text color to black for visibility
        button.innerText="Light"
    }

} )