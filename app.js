let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// habíamos hecho esto primero, pero ahora la metemos en una fucniona para optimizas//let titulo = document.querySelector('h1'); titulo.innerHTML = 'Juego del número secreto'  //asignar texto, esto es para el titulo, primero defino el doc(DOM), luego escribo y coloco lo quiero que diga

// este codigo lo quito porque ya lo optimice let parrafo = document.querySelector('p') //asignamos texto nuevamente, esto es para el pararfo, primero defino el doc, luego escribo y coloco lo quiero que diga
//parrafo.innerHTML = 'Indica un número del 1 al 10'

//creamos otra función y pasamos lo que estaba arriba de let titulo
//aqui se encapsula los dos let
function asignarTextoElelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
elementoHTML.innerHTML = texto;
return; //se coloca el return por buenas practicas
} 

//se crea una funcionalidad, pero antes en el html con onclick
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //obtengo con getelemnt el numero que el usuario me coloca
    // esta linea se va console.log(numeroDeUsuario === numeroSecreto); //Comparo el numero que me da la maquina con el que me da el usuario
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto) {  
        asignarTextoElelemento('p', `acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    
    } else{
        //el usuario no certo
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElelemento('p', 'el número secreto es menor');
        } else {
            asignarTextoElelemento('p', 'el número secreto es mayor');
        }
        intentos++;
        limpiarCaja ();
            
    }
    
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

//creamos lo del numero aleatorio
function generarNumeroSecrero() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado está incluido en la lista
    //si ya se sortearon todos los numero 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElelemento('p', 'ya se sortearon todos los números posibles');
     } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecrero();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }   }
}

function condicionesIniciales () {
    asignarTextoElelemento('h1', 'juego del número secreto!'); //llamamos la fucnion, porque se creo la funcion
    asignarTextoElelemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecrero();
    intentos =1;

}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja ();
    //indicar mensaje de intervalo de numero
    condicionesIniciales();
    //generar el número aleatorio 
    //inicializar el numero de intentos
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();