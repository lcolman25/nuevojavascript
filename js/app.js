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
let div= document.getElementById('div')

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
           
          botonAlCarrito.addEventListener('click',function(){
               carrito.push(product)
               alert("Agregaste " + product.nombre + " al carrito")
               div.innerHTML=``
               showcart()
          })
    })
}

mostrarPeoductos()

//carrito//
let showcartproducts =document.getElementById("showcartproductscarrito")
let cartlista = document.getElementById("cartlista")
let mostrarcarrito =document.getElementById("mostrarCarrito")
 
let alertCarrito= document.createElement("h2")
alertCarrito.setAttribute("class","muestraVacia")

 if(!carrito.length){
     alertCarrito.innerText=("El carrito se encuentra sin productos")
     div.append(alertCarrito)
}

function showcart(){
     alertCarrito.remove()

     carrito.forEach((element) =>{
          const divCart=document.createElement("div")
          divCart.setAttribute("class","vistaaCompra")
          divCart.innerHTML=`
          <img src="${element.img}">
          <h3>${element.nombre}<h3>
          <h3>${element.precio}<h3>
          <button class= "eliminar"data-id=${element.id}>X</button>`

           div.appendChild(divCart)

     })

     let eliminarcompra=document.querySelector(".eliminar")


 const total1 = carrito.map((element)=> (element.precio)).reduce((carritoTotalPrecio,
     currenitemPrecio)=> carritoTotalPrecio + currenitemPrecio, 0);
   

 let totalDeCompra=document.createElement("h4")
     totalDeCompra.innerHTML=("total:" + "$" + total1 )
     div.append(totalDeCompra)

 let vaciarCarrito =document.createElement("button")
  vaciarCarrito.innerHTML=("desechar todo")
  div.append(vaciarCarrito)
   
  vaciarCarrito.onclick=()=>{
     carrito=[]
     div.innerHTML=``
     console.log(carrito)
  }

}

//buscador//
let buscador =document.getElementById("inputsearch")
let filtrador = document.getElementById("filtro")

function filtrarproductos(){
    let verTodo =document.createElement("button") 
    verTodo.setAttribute("class","verTodo")
    verTodo.innerHTML =("Ver Todo")
    showAllProducts.append(verTodo)
    const filterproduct = productos.filter((product)=>product.categoria === buscador.value)
  

    filterproduct.forEach((filter)=>{
          let resDeFiltro=document.createElement("div")
           resDeFiltro.setAttribute("class","cajaBusquedas")
          showAllProducts.append(resDeFiltro)

          let imgBusqueda=document.createElement("img")
          imgBusqueda.setAttribute("src" ,filter.img)

          let nombreBusqueda=document.createElement("h3")
          nombreBusqueda.innerText=(filter.nombre)

          let precioBusqueda=document.createElement("p")
          precioBusqueda.innerText=(filter.precio)

          let buyButtonBusqueda=document.createElement("button")
          buyButtonBusqueda.innerText = ("agregar al carrito")

          resDeFiltro.append(imgBusqueda, nombreBusqueda, precioBusqueda, buyButtonBusqueda)
     })
     

    verTodo.onclick = () =>{
          showAllProducts.innerHTML=``
          mostrarPeoductos()
     }
}
buscador.onchange = () => {
     showAllProducts.innerHTML=``
     filtrarproductos()
}

filtrador.onclick = () => {
     showAllProducts.innerHTML=``
     filtrarproductos()
}