
const cards = document.querySelectorAll(".card")

cards.forEach((card)=>{
    card.addEventListener ("click", (e)=>{
        datosProducto(e.target.parentElement)
    })
})

//carrito
let perfumeCompra= []


function datosProducto(producto){
    const perfumes ={
        titulo:producto.querySelector(".card-title").textContent,
    }

    perfumeCompra=[...perfumeCompra, perfumes]

perfumesHTML()
}


const perfumesCarrito =document.querySelector(".perfumesCarrito")

function btnEliminar(producto){
    let borrar = perfumeCompra.find((producto) => producto.titulo === producto)
    let indice = perfumeCompra.indexOf(borrar)
    perfumeCompra.splice(indice, 1)
    
    }

    function perfumesHTML(){
        limpiarHTML()

    perfumeCompra.forEach((producto)=>{
        const row = document.createElement("p")
        row.innerHTML=`
        <div class="container">
        <h5>${producto.titulo}</h5>
        
        <button class="btn btn-danger" id="eliminar" onclick="btnEliminar(producto)">Eliminar</button>
        </div>
        `
        

        
        perfumesCarrito.appendChild(row)
    })
}
        
        function limpiarHTML(){
    perfumesCarrito.innerHTML=""
}



let nombreForm = document.querySelector("#nombre")
let apellidoForm = document.querySelector("#apellido")
let ciudadForm = document.querySelector ("#ciudad")


let formulario = document.querySelector("#formulario")

let datos =document.querySelector(".datosComprador")

//mostrar formulario en dom

const mostrarForm = formulario.addEventListener ("submit", function(e){
    e.preventDefault()
    datos.innerHTML = `
    <div class= "alert alert-warning" role="alert">
    <h5> Muchas Gracias ${nombreForm.value} ${apellidoForm.value} por tu compra te llegara a la brevedad a ${ciudadForm.value} </h5>
    </div>
    `
})


//A JSON CARRITO
const aJson = JSON.stringify(perfumeCompra)
localStorage.setItem("perfumes", aJson)
const perfumesArray = JSON.parse(localStorage.getItem("perfumes"))
perfumesArray.push(perfumesCarrito)
localStorage.setItem("perfumes", JSON.stringify(perfumesArray))

console.log(aJson)

/*let nombreCliente = prompt("ingrese el nombre")
let apellidoCliente = prompt("ingrese el apellido")

function bienvenido (nombreCliente, apellidoCliente) {
    alert("Bienvenido "+ nombreCliente + " " + apellidoCliente)
}

bienvenido(nombreCliente, apellidoCliente)

function Perfume (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true; 
}

const perfume1 = new Perfume ("Wonderstruck Enchanted", 6500)
const perfume2 = new Perfume ("Wonderstruck", 8500)
const perfume3 = new Perfume ("Incredible Things", 9500)

alert("tenemos estos productos: " + perfume1.nombre + ", " + perfume2.nombre + ", " + perfume3.nombre)

let producto = prompt("Que perfume te gusto 1: Wonderstruck Enchanted, 2: Wonderstruck, 3: Incredible Things, ESC para salir")

let precio1 = 6500
let precio2 = 8500
let precio3 = 9000

while (producto != "ESC"){
if (producto === "1"){
    for (let i = 1; i <= 6; i++) {
        let resultado = precio1 / i
        alert("PAGOS: " + precio1 + " en " + i + " cuotas de = " + resultado)
        
    }
}else if (producto === "2"){
    for (let i = 1; i <= 6; i++) {
        let resultado = precio2 / i
        alert("PAGOS: " + precio2 + " en " + i + " cuotas de = " + resultado)
}
} else if (producto === "3"){
    for (let i = 1; i <= 6; i++) {
        let resultado = precio3 / i
        alert("PAGOS: " + precio3 + " en " + i + " cuotas de = " + resultado)
}
}
producto = prompt("Que producto te gusto 1: producto 1, 2: producto 2, 3: producto 3, ESC para salir")
}


let carrito = []
let cantidad = 3

do {
    let entrada = prompt("ingrese que perfume quiere comprar: 1: Wonderstruck Enchanted, 2: Wonderstruck o 3: Incredible Things ")
    carrito.push(entrada.toUpperCase())
    console.log(carrito.length)
}while(carrito.length != cantidad)

alert(carrito)*/