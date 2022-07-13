
let gardadorhtml =document.getElementsByClassName('principal')
let showAllProducts= document.getElementById('showAllProducts')
let div= document.getElementById('div')

let carrito=[]

if(JSON.parse(localStorage.getItem("carrito"))){
    carrito=JSON.parse(localStorage.getItem( "carrito"))
    showcart();
    
}else{localStorage.setItem("carrito",JSON.stringify([]))
carrito=json.parse(localStorage.getItem("carrito"))

}


 
const showAlert =(proId)=>{
   
    const productoElemento=productos.find(product => product.id === proId);
    Swal.fire({
        title: "Agregaste " + productoElemento.nombre + " al carrito",
        Text: "agregado ",
        icon: 'success',
        confirmButtonText:'Cool'
       
    })
};
setTimeout(() => {
    Swal.fire({
        imageUrl: "https://silverriverseeds.com/wp-content/uploads/2019/02/Despink-10-WEB-600x562.jpg",
        imageHeight: 300,
        title:"Mejor producto de la casa  DESPINK ",
        imageAlt: 'A tall image'
      })
}, 2000);
 
setTimeout(() => {
    Swal.fire({
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_620758-MLU46658247849_072021-O.webp",
        imageHeight: 300,
        title:"la oferta semanal Darth Vader a tan solo $600",
        imageAlt: 'A tall image'
      })
}, 9000);


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
            precio.innerText = (product.precio.toLocaleString()) 

            let botonAlCarrito=document.createElement("button")
            botonAlCarrito.innerText=("agregar al carrito")
            botonAlCarrito.setAttribute("id",`${product.id}`)
        caja.append(img,nombre,precio,botonAlCarrito)
           
        botonAlCarrito.addEventListener('click',function(e){
           console.log(product)
            carrito.push(product)
            div.innerHTML=``
            showAlert(e.target.id)
            showcart()
        })
       
    
    })
   
}


mostrarPeoductos()

//carrito//
let showCartProducts =document.getElementById("showcartproductscarrito");
let cartLista = document.getElementById("cartlista");
let mostrarCarrito =document.getElementById("mostrarCarrito");
 


function showcart(){
     

    carrito.forEach((element) =>{
        const divCart=document.createElement("div")
        divCart.setAttribute("class","vistaaCompra")
        divCart.innerHTML=`
        <img src="${element.img}">
        <h3>${element.nombre}<h3>
        <h3>$${element.precio.toLocaleString()}<h3>
        <button class= "eliminar"data-id=${element.id}>X</button>`

        div.appendChild(divCart)
          
    })

    let eliminarcompra=document.querySelector(".eliminar");


 const total1 = carrito.map((element)=> (element.precio)).reduce((carritoTotalPrecio,
     currenItemPrecio)=> carritoTotalPrecio + currenItemPrecio, 0);
   

 let totalDeCompra=document.createElement("h4")
    totalDeCompra.innerHTML=("TOTAL:" + "$" + total1.toLocaleString())
    div.append(totalDeCompra);

 let vaciarCarrito =document.createElement("button")
  vaciarCarrito.innerHTML=("Desechar Todo")
  vaciarCarrito.setAttribute("class","desechar")
  div.append(vaciarCarrito);
   
  vaciarCarrito.onclick=()=>{
     carrito=[]
     div.innerHTML=``
     console.log(carrito)
     Swal.fire('vaciaste el carrito')
     localStorage.setItem("carrito",JSON.stringify([]));
    };
 localStorage.setItem("carrito",JSON.stringify(carrito))

 carrito.length == 5 && alert ( 'felicidades con mas de 5 unidades el envio es gratis');
 

};

 


//buscador//
let buscador =document.getElementById("inputsearch");
let filtrador = document.getElementById("filtro");

function filtrarProductos(){
    let verTodo =document.createElement("button") 
    verTodo.setAttribute("class","verTodo")
    verTodo.innerHTML =("Ver Todo")
    showAllProducts.append(verTodo)
    const filterProduct = productos.filter((product)=>product.categoria === buscador.value)
    

    filterProduct.forEach((filter)=>{
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
         
          buyButtonBusqueda.addEventListener('click',function(){
            carrito.push(filter)
            alert("Agregaste " + filter.nombre + " al carrito")
            div.innerHTML=``
            showcart()
       })
    })
  
   
    verTodo.onclick = () =>{
        showAllProducts.innerHTML=``
        mostrarPeoductos()
    };
  
};

buscador.onchange = () => {
    showAllProducts.innerHTML=``
    filtrarProductos()
};

filtrador.onclick = () => {
    showAllProducts.innerHTML=``
    filtrarProductos()
};


//formulario//

function terminarCompra() {
    class Usuario{
        constructor (nombre,direccion ,mail , telefono){
            this.nombre=nombre,
            this.direccion=direccion,
            this.mail=mail,
            this.telefono=telefono
        }
    }  

    let nombre=document.getElementById("nombre")
    let direccion=document.getElementById("direccion")
    let mail=document.getElementById("email")
    let telefono=document.getElementById("telefono")
    let usuarioCompra= new Usuario(nombre.value, direccion.value, mail.value, telefono.value)
    console.log(usuarioCompra)
    console.log(carrito)
    telefono.length ==String && alert('ingrese un numero profevor')
}

let terminarPedido=document.getElementById("terminarPedido")

terminarPedido.onclick =(e) =>{
     e.preventDefault()
     terminarCompra()
    const dateTime =luxon.DateTime
    const now= dateTime.now()
    console.log(now.toString())
} 
   

function mostrar(){
    swal("gracias por tu compra")
};