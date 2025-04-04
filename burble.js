const abuelo = document.querySelector("#abuelo")
const padre = document.querySelector("#padre")
const hijo = document.querySelector("#hijo")
const body = document.body



hijo.addEventListener("click", (event)=>{
    // event.stopPropagation()
    console.log("Click del hijo ")
})

// padre.addEventListener("click", (event)=>{
//     console.log("Click del Padre ")

// } )

// abuelo.addEventListener("click", ()=>{
//     console.log("Click del abuelo ")

// })