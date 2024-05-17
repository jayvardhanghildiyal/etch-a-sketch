const container = document.querySelector("div.container")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div")
    square.setAttribute("class", "box")
    square.addEventListener("mousemove", () => {
        square.style.backgroundColor = "orangered"
    })
    container.appendChild(square)
}


