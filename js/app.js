const multiplicacion = (a , b) => {
     let resultado = a * b;
     alert('usted debe pagar '+ resultado + ' pesos')
}
const resta = (a, b) => {
     let resultado = a - b
     alert(' usted debe pagar '+ resultado + ' pesos')

} 
const suma = (a, b) => {
     let resultado = a + b
     alert('usted debe pagar '+ resultado + ' pesos')
}

let Bienvenido ='Bienvenido a marihiguana';

alert(Bienvenido)

let nombreDeUsuario = prompt('NOMBRE');
     while( nombreDeUsuario ===  ''|| !isNaN(nombreDeUsuario)){
     nombreDeUsuario = prompt('Ingrese nombre sin espacios ni números');
}

let apellidoDeUsuario = prompt('APELLIDO');
     while( apellidoDeUsuario === ''|| !isNaN(apellidoDeUsuario)){
          apellidoDeUsuario = prompt ('ingrese su apellido sin espacio ni números ') ;
     }

let usuario = nombreDeUsuario + " " + apellidoDeUsuario;
alert (usuario + " disfruta de nuestro contenido")
    


let carrito =[]



let gardadorhtml =document.getElementsByClassName('principal')
let showAllProducts= document.getElementById('showAllProducts')

function mostrarPeoductos(){
    productos.forEach((product) =>{
        let caja = document.createElement('div')
           caja.setAttribute( "class","desmo")
            showAllProducts.append(caja)

        let img = document.createElement("img")
            img.setAttribute("src",product.img)

        let nombre = document.createElement("h3")
            nombre.innerText = (product.nombre) 

        let precio = document.createElement('p')
            precio.innerText = (product.precio) 

        let botonAlCarrito=document.createElement("button")
            botonAlCarrito.innerText=("agregar al carrito")

          caja.append(img,nombre,precio,botonAlCarrito)
    })
}

mostrarPeoductos()