let rootDiv = document.querySelector("#root")
rootDiv.innerHTML = ""
rootDiv.style.background = "green"
console.log(rootDiv)



let rooTwo = document.querySelector(".deimian")
rooTwo.innerHTML = "Desde la clase"
console.log(rooTwo)


let divs = document.querySelectorAll("div")
console.log(divs)


//crear elementos
let ulNumber = document.createElement("ul")
rootDiv.appendChild(ulNumber)

let total = 0

for(let i = 1; i<=10; i++){
    let li = document.createElement("li")
    total = total + i
    if(i % 2 != 0){
        li.style.background = "blue"
    }
    li.innerHTML = `${i} el total es = ${total}`
    li.style.listStyle ="none"
    li.style.margin = "0px"
    ulNumber.appendChild(li)
}

let listaNumeros = document.querySelector("#listaNumeros")
let hijosUl = listaNumeros.children
console.log(hijosUl)
hijosUl[0].style.background = "yellow"



