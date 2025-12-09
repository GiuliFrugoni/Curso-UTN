function calcularPromedio(N1, N2){
    const promedio=(N1 + N2) / 2;
    return promedio;
}
const parcial1=8;
const parcial2=4;

const promedioFinal=calcularPromedio(parcial1, parcial2);
console.log(`Tu promedio es: ${promedioFinal}`);
if (promedioFinal >= 7){
    console.log("Felicidades! La materia está aprobada");
} else {
    console.log("Lo siento, la materia está reprobada");
}
