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
let total = 0;
let precio;
let cantidad;

let bienvenido = alert('Bienvenido a marihiguana');

let nombreDeUsuario = prompt('Nombre');
     while( nombreDeUsuario ===  ''|| !isNaN(nombreDeUsuario)){
     nombreDeUsuario = prompt('Ingrese nombre sin espacios ni números')
}
let apellidoDeUsuario = prompt('apellido');
while( apellidoDeUsuario === ''|| !isNaN(apellidoDeUsuario)){
     apellidoDeUsuario = prompt ('ingrese su apellido sin espacio ni números ')
}
let usuario = nombreDeUsuario + " " + apellidoDeUsuario;
     alert('Bienvenido' + " " + usuario)

     for (let index = 0; index < apellidoDeUsuario.length; index++) {
          let caracter = apellidoDeUsuario[index];
          alert('Deletraremos tu apellido , si no lo escribiste bien carga nuevamente la pagina ' + caracter)
     }

const selectorsemillas = () => {
     
     producto = prompt('Aquí te dejamos las semillas que tenemos en stock elije una de ellas y se le brindará el precio: despink , sour destro , cherryog , mohanthai , og 342 ,river haze , amnecia , lemon blue , ultra mahona')
     let precio;

     switch (producto) {
          case 'despink' :
               precio =1410;
          
          break  

          case "sour destro":
               precio = 1600; 
       
          break

          case "cherryog" :
               precio = 1590;    
          break

          case "mohanthai":
               precio = 2000;   
          break

          case "og 342":
               precio = 1420;
          break

          case "river haze":
               precio = 1850;
          break

          case "amnecia":
             precio = 1600;
          break

           default :
            alert('no ingreso  ningun producto');             
           break
     }
    alert (precio)
    return precio;
}

const cuantassemillas = () => {

let cantidad =  prompt('¿Cuantos packs vas a llevar?');
while (isNaN(parseInt(cantidad)) || cantidad >= 11 ){
 cantidad = prompt('Ingrese solo números de packs ,menor a 10 que es la cantidad habilitada ')
}

if(cantidad == 1 ){
     alert('¿Seguro desea comprar solo uno?')   
}
else if(cantidad == 5 ){
     alert('Con un packs más se le hará un 20% off que se deberá avisar en el momento de retirar el producto')
}
else if (cantidad == 10 ){
     alert('Felicidades con la compra de 10 packs, te llevas 1 de REGALO ')
     
}
else{
     alert('Gracias')
}
 return cantidad;
}



 multiplicacion (selectorsemillas(),cuantassemillas());

 
 

//en consola//
 for (let i= 0; i<= 12; i++) {
      for (let y = 1; y <= 12; y++) {
      let tabla= i * y
           console.log ('numero: ' + y +  ' * ' + i +' = ' + tabla)
      }
      }
      