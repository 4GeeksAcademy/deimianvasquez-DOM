let rootDiv = document.querySelector("#root")
rootDiv.innerHTML = ""
rootDiv.style.background = "green"
// console.log(rootDiv)



let rooTwo = document.querySelector(".deimian")
rooTwo.innerHTML = "Desde la clase"
// console.log(rooTwo)


let divs = document.querySelectorAll("div")
// console.log(divs)


//crear elementos
let ulNumber = document.createElement("ul")
rootDiv.appendChild(ulNumber)

let total = 0

for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li")
    total = total + i
    if (i % 2 != 0) {
        li.style.background = "blue"
    }
    li.innerHTML = `${i} el total es = ${total}`
    li.style.listStyle = "none"
    li.style.margin = "0px"
    ulNumber.appendChild(li)
}

let listaNumeros = document.querySelector("#listaNumeros")
let hijosUl = listaNumeros.children
// console.log(hijosUl)
hijosUl[0].style.background = "yellow"


const body = document.body
const listNames = document.createElement("ol")
const li = document.createElement("li")
const textNode = document.createTextNode("Juanito Alimaña")
li.appendChild(textNode)
listNames.appendChild(li)


body.insertBefore(listNames, body.children[0])

console.log(body.children)
ulNumber.removeChild(ulNumber.children[2])
ulNumber.children[0].remove()



// while (true) {
//     const result = prompt("Ingresa un número: ")
//     if(Number(result) > 10){
//         break
//     }
// }
let database = "Deimian"


const div = document.createElement("div")
// div.textContent = `<h1>${database}</h1>`
div.innerHTML = "<h1>Hola</h1>"
// const textNodeTwo = document.createTextNode("Hola ¿qué tal?")
// div.appendChild(textNodeTwo)
div.setAttribute("class", "myDiv")
div.setAttribute("id", "myDiv")
body.appendChild(div)


let imagen = document.createElement("img")
imagen.setAttribute("src", "https://picsum.photos/200/300")
imagen.setAttribute("alt", "Una imagen random")
// imagen.style.border="2px solid black"
imagen.classList.add("image")
body.appendChild(imagen)


function saludar() {
    imagen.style.width = "300px"
    imagen.style.height = "300px"
}


let btnSaludar = document.querySelector("#btnSaludar")
// btnSaludar.addEventListener("click", function(){
//     imagen.classList.toggle("image-two")
// })



btnSaludar.addEventListener("click", (event) => {
    console.log(event.target)
    event.target.innerHTML = "Saludar otra vez"
})


const input = document.createElement("input")
body.appendChild(input)

const p = document.createElement("p")



input.addEventListener("input", (event) => {
    console.log(event.target.value)
    p.innerHTML = event.target.value

})

body.appendChild(p)


const btnClickMe = document.querySelector("#btnClick")

let counter = 0
function mostrarmensaje() {
    if (counter <= 2) {
        alert("Hola, soy el mensaje")
        counter++
    } else {
        btnClickMe.removeEventListener("click", mostrarmensaje)
    }
}
btnClickMe.addEventListener("click", mostrarmensaje)


