const numeroAdivinacion = Math.floor(Math.random()*(10-0+1)+0);
let intento = "";
let acerto = false; 

for(let contador = 0; contador<3 ; contador ++){
    intento = prompt("intenta adivinar un número entre 0 y 10");
    if(intento == numeroAdivinacion){
        alert(`¡Acertaste! , el numero era ${numeroAdivinacion} .`);
        acerto = true; 
        break; 
    }
    alert("incorrecto :(");
}
if(!acerto){
    alert(`No acertaste :( . El número era ${numeroAdivinacion}`);
}