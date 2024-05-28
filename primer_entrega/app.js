//variables
let nombreUsuario = prompt("Ingresa tu nombre");
console.log(nombreUsuario);
alert("Hola" + " " + nombreUsuario +" "+ "te damos la bienvenida!");

//condicional
let pais = prompt("Ingresa tu Pais")
if (pais != "Argentina") {
    alert("No tenemos descuentos en envios");
}
else {
    alert("Tenemos descuentos en envios para todo el pais!");
}
// ciclos y bucles
for (let compra =0; compra <10; compra++){
    console.log("Compra numero" +" "+ compra);
}
// funciones
function descuentos(nombre,importe){
    if(importe >= 50000){
        console.log("Felicitaciones", nombre);
        console.log("Tienes un descuento de", importe);
    }
    else{
        console.log(nombre);
        console.log("Lo siento no tienes descuentos");
    }
}
descuentos("Celeste",50000);
descuentos("Maria", 40000);