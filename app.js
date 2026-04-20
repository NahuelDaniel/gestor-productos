console.log("JS conectado");



const form = document.getElementById("formProducto");

const lista = document.getElementById("listaProductos");

let productos = [];

const datosGuardados = localStorage.getItem("productos");

if (datosGuardados) {

  productos = JSON.parse(datosGuardados);

  mostrarProductos();

}

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;

  const precio = document.getElementById("precio").value;

  const stock = document.getElementById("stock").value;

  const producto = {

    nombre,

    precio,

    stock

  };

  productos.push(producto);
  localStorage.setItem("productos", JSON.stringify(productos));

  mostrarProductos();

  form.reset();

});

function mostrarProductos() {

  lista.innerHTML = "";

  productos.forEach((prod, index) => {

    const li = document.createElement("li");

    li.textContent = `${prod.nombre} - $${prod.precio} - Stock: ${prod.stock}`;

    const btnEliminar = document.createElement("button");

    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {

      eliminarProducto(index);

    });

    li.appendChild(btnEliminar);

    lista.appendChild(li);

  });

}

function eliminarProducto(index) {

  productos.splice(index, 1);

  localStorage.setItem("productos", JSON.stringify(productos));

  mostrarProductos();

}