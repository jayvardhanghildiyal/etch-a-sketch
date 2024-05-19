const container = document.querySelector("div.container")
let number = 256;

const adj = document.querySelector(".adjuster")

adj.addEventListener("click", () => {
    number = prompt("Enter a grid size")
    container.style.width =  `${500 + (1* number)}px`
    container.style.height =  `${600}px`

    while (container.hasChildNodes() == true) {
        container.removeChild(container.children)
    }

    for (let i = 1; i <= (number * number); i++) {
        const square = document.createElement("div")
        square.setAttribute("class", "box")
        square.style.width = `${600 / number}px`
        square.style.height = `${600 / number}px`
        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "orangered"
        })
        container.appendChild(square)
    }
})

// for (let i = 0; i < number; i++) {
//     const square = document.createElement("div")
//     square.setAttribute("class", "box")
//     square.addEventListener("mousemove", () => {
//         square.style.backgroundColor = "orangered"
//     })
//     container.appendChild(square)
// }