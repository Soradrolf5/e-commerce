
const contenedorPerfumes = document.getElementById('contenedorPerfumes');

//trae productos de json y muestra productos en DOM
fetch("./data.json")
.then((resp)=>resp.json())
.then((data)=>{
data.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divProducto.innerHTML = `
                            <div>
                                <div class="card-body">
                                    <h3 class="card-title"> ${producto.nombre} </h3>
                                    <p class="card-text"> ${producto.precio} </p>
                                    <button id="boton${producto.id}" class="btn btn-danger"> Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorPerfumes.appendChild(divProducto);

//boton agregar carrito
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id);
    });
    //cantidad de productos en carrito y los guarda en localStorage
const agregarAlCarrito = (id) => {
    const producto = data.find((producto) => producto.id === id);
    const perfumeEnCarrito = carritoPerfumes.find((producto) => producto.id === id);
    if (perfumeEnCarrito) {
    perfumeEnCarrito.cantidad++;
    } else {
    carritoPerfumes.push(producto);
    }
    actualizarCarrito();

    const aJson = JSON.stringify(carritoPerfumes)
    localStorage.setItem("Perfumes", aJson)
};
});
})

const carritoPerfumes = [];



// carrito en DOM
const contenedorCarrito = document.getElementById('contenedorCarrito');


function actualizarCarrito() {
let aux = '';
carritoPerfumes.forEach((producto) => {
    aux += `
        <div class="card col-xl-3 col-md-6 col-sm-12">
                <div class="card-body">
                    <h3 class="card-title"> ${producto.nombre} </h3>
                    <p class="card-text"> ${producto.precio} </p>
                    <button onClick = "eliminarCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                </div>
            </div>
            `;
});

contenedorCarrito.innerHTML = aux;
calcularTotalCompra();
}

// boton eliminar de carrito
const eliminarCarrito = (id) => {
    const producto = carritoPerfumes.find((producto) => producto.id === id);
    carritoPerfumes.splice(carritoPerfumes.indexOf(producto), 1);
    actualizarCarrito();
};

  //calcula total en carrito
const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
let total = 0;
carritoPerfumes.forEach((producto) => {
    total += producto.precio * producto.cantidad;
});
totalCompra.innerHTML = total;
};



let formulario = document.querySelector("#formulario")

let datos =document.querySelector(".datosComprador")

//mostrar formulario en dom
const mostrarForm = formulario.addEventListener("submit", function (e) {
    let nombreForm = document.querySelector("#nombre").value
    let apellidoForm = document.querySelector("#apellido").value
    let ciudadForm = document.querySelector("#ciudad").value

    e.preventDefault()
    datos.innerHTML = `
    <div class= "alert alert-warning" role="alert">
    <h5> Muchas Gracias ${nombreForm} ${apellidoForm} por tu compra te llegara a la brevedad a ${ciudadForm} </h5>
    </div>
    `
})


//funcion borrar carrito al comprar
const vaciarCarrito = document.getElementById('comprar');
vaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue exitosa',
        showConfirmButton: false,
        timer: 1500
})

carritoPerfumes.splice(0, carritoPerfumes.length);
actualizarCarrito();

window.localStorage.clear()

});


