//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaProducto = document.querySelector('#lista-producto');

//Desclara arreglo para ingresar los articulos

let articulosCarrito = [];
//Prototipos
registrar();

function registrar() {
    //Se agrega un curso presionando agregar

    listaProducto.addEventListener('click', agregarProducto);
    //Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito
    
    vaciarCarrito.addEventListener('click', () => {
        //console.log("Vaciando carrito");
        articulosCarrito = []; //Restablecer el arreglo
        limpiarHTML();
    })
    
}

//Funciones
function agregarProducto(e) {
    //para que no de salto
    e.preventDefault();

    //e.target vemos en donde le presionamos

    // console.log('Presionando');
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSelecionado = e.target.parentElement.parentElement;
        //console.log(cursoSelecionado);
        leerDatosCurso(cursoSelecionado);
    }
}

//Eliminar un curso del carrito
function eliminarCurso(e) {
    //console.log('Desde eliminar curso');
    console.log(e.target.classList);
    if (e.target.classList.contains('borrar-curso')) {
        const productoid = e.target.getAttribute('data-id');
        //console.log(e.target.getAttribute('data-id'));
        //Elimi del arreglo de artculosCarrito por el dat id
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoid);
        console.log(articulosCarrito);
        carritoHtml();

    }
}

//Lee el contenido del HTML Y extra la informacion del curso
function leerDatosCurso(producto) {
    //console.log(producto);
    //Crear un objeto con el contennido actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1


    }
    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if (existe) {
        //Actualisar la cantidad
        const producto = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto; //retorna el objeto actualisado

            } else {
                return producto;
            }
        });

    } else {
        articulosCarrito = [...articulosCarrito, infoProducto];
    }



    //Agregar elementos al arreglo de carrito
    //articulosCarrito = [...articulosCarrito, infoProducto];
    //console.log(infoProducto);
    console.log(articulosCarrito);
    carritoHtml();

}
//Muestra el Carrito de compras en el HTML

function carritoHtml() {
    //Limpiar HTML
    limpiarHTML();

    //recorre el carrito y recorre el html
    articulosCarrito.forEach(producto => {
        console.log(producto);
        const {
            imagen,
            titulo,
            precio,
            cantidad,
            id
        } = producto

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> 
                ${titulo}
            </td>
            <td> 
            ${precio}
            </td>
            <td> 
            ${cantidad}
        </td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> x </a>
            `;
        //Agregar el html del carrito en el tbody
        contenedorCarrito.appendChild(row);

    });
}

function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML='';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}