const container = document.querySelector("div.container")
const adj = document.querySelector(".adjuster")

adj.addEventListener("click", () => {

    while (container.firstChild) {
        container.firstChild.remove()
    }

    number = prompt("Enter a dimension for forming a grid ! [100 or less for performance reasons.]")
    container.style.width =  `${600 + (1.6 * number)}px`
    container.style.height =  `${600}px`


    for (let i = 1; i <= (number * number); i++) {
        let bright = 100
        const square = document.createElement("div")
        square.style.width = `${600 / number}px`
        square.style.height = `${600 / number}px`
        square.style.border = "0.8px solid black"
        square.style.filter = `brightness(${bright}%)`
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            bright -= 10
            square.style.filter = `brightness(${bright}%)`
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