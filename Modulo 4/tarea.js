//EJERCICIO 1
const producto = 'café';
const precio = 5000;
let disponible = true;

console.log (`El ${producto} cuesta ${precio} y su disponibilidad es ${disponible}`);

//EJERCICIO 2
const distancia = 550000;
if (distancia <=1000){
    console.log(`Se recomienda ir a pie`);
} else if (distancia >1000 && distancia <=10000){
    console.log(`Se recomienda ir en bicicleta`)
} else if (distancia >10000 && distancia <=30000){
    console.log(`Se recomineda ir en colectivo`)
} else if (distancia >30000 && distancia <=1000000){
    console.log(`Se recomienda ir en auto`)
} else if (distancia >1000000){
    console.log(`Se recomienda ir en avión`)
}

//EJERCICIO 3
const compras = ['Pan','Huevos','Leche','Carne','Frutas','Caramelos']
for (let i=0; i<compras.length; i++){
    console.log(`¡No te olvides de comprar ${compras[i]}!`);
}

//EJERCICIO 4, no pude hacerlo :( 
const numeros = [11, 62, 16, 99, 93, 43, 13, 51, 9];
