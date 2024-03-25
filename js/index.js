class Soldado {
    constructor(nombre, apellido, edad, planeta, arma,) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.planeta = planeta
        this.arma = arma
    }
}

let recluta;

function mensajeInicial(){
    alert("¡Bienvenido a la 8th compañía de la Guardía imperial de Cadia! Recuerda nuestro lema:");
    alert("MOLESTAS A LOS MEJORES ¡MUERE COMO EL RESTO!");
    alert("Ahora debo hacerte esta pregunta, soldado");
}

function pruebaDeLealtad(){
    let pruebaDeLealtad = confirm("¿Juras lealtad al Dios Emperador de la Humanidad?");
    const finDelJuego = "../pages/game_over.html";

    if (pruebaDeLealtad){
        alert ("¡Ven con nosotros, hermano!");
    } else{
        alert ("¡MUERE, HEREJE!");
        location.href = finDelJuego;
    }
}

function inscripcionDelRecluta(){
    alert("Bien recluta, ahora necesito tus datos ¡Dímelos!");
    let nombre = prompt("¿Cuál es tu nombre?");
    let apellido = prompt("¿Cuál es tu apellido?");
    let edad = prompt("¿Cuál es tu edad?");
    let planeta = prompt("¿De dónde vienes?");
    alert("Sube abordo " + nombre + " " + apellido + " del genial planeta " + planeta);

    recluta = new Soldado(nombre, apellido, edad, planeta);
}

function armeriaDelBatallon(){
    alert ("Recluta, nos acaban de informar de un ataque orko en las afueras de la ciudad");
    alert ("Necesito que elijas entre una de estas armas");

    let armas = ["rifle laser", "espadasierra", "lanza misiles", "hachasierra", "lanza llamas"];

    let armeria;
    do {
        let armasDisponibles = prompt("Solo quedan disponibles estas armas: \n1- rifle laser \n2- espadasierra \n3- lanza misiles \n4- hachasierra \n5- lanza llamas");
        armeria = armas.indexOf(armasDisponibles);

        if (armeria !== -1) {
            switch (armeria) {
                case 0:
                    alert("Has elegido el rifle laser");
                    break;
                case 1:
                    alert("Has elegido el espadasierra");
                    break;
                case 2:
                    alert("Has elegido la lanza misiles");
                    break;
                case 3:
                    alert("Has elegido la hachasierra");
                    break;
                case 4:
                    alert("Has elegido la lanza llamas");
                    break;
                default:
                    alert("¡No tenemos esa arma!");
                    break;
            }

            armas.splice(armeria, 1);
            recluta.arma = armasDisponibles;

            alert("¡Ahora vamos al campo de batalla!");
        } else {
            alert("¡Elige bien, soquete!");
        }
    } while (armeria === -1);
}

function ataque_orko(){
    alert("¡Los orkos avanzan violentamente a las afueras de la ciudad!");
    alert("¡Hay que ir rápido hacía esos xenos!");
    alert("De repente un orko se acerca ti y te quiere atacar");

    let fuerza;

    fuerza = parseInt(prompt("elige que tanta fuera quieres poner a tu ataque, pon número del 1 al 3"));

    if (fuerza === 3){
        alert("Rebentaste la cabeza del Orko sin problemas");
    } else if (fuerza ===2){
        alert("Dejaste mal herido al orko, pero va a morir después");
    } else if (fuerza ===1){
        alert ("Le demostraste todo tu poder, y el orko solo se aburrío y fue");
    } else{
        alert ("El orko te mato");
        location.href = "../pages/game_over.html";
    }
}

function ayuda_de_emergencia(){
    alert("Luego del encuentro con el orko, vas un trinchera y un compañero necesita ty ayuda");
    alert("El soladado necesita te pregunta si tienes munición");

    let municion;

    municion = parseInt(prompt('¿Cuantas balas me das?', ''));

    if (municion < 50 ){
        alert("Gracias, hermano");
    } else if (municion == 50 ){
        alert("Justo lo que necesito");
    } else if (municion >= 20){
        alert ("¡Las haré valer, hermano!");
    } else if ((municion >= 0)){
        alert ("Entiendo las prioridades, hermano"); 
    }
    else {
        alert ("No te entiendo, hermano");
    } 
}

function montar_sentinela(){
    alert("Te sigues abriendo paso en el campo de batalla, y ves un tanque Sentinela varado");
    
    let en_uso = confirm("¿Te subes al Sentinela?");

    let sentinela = {   
        resistencia: 20,
        municion: 1000,
        en_uso: false,
    }

    if (en_uso == true){
        alert ("Vas al campo de batalla montado en el sentinela, pero un orko dejó una bomba y moriste");
        location.href = "../pages/game_over.html";
    }
    else {
        alert ("Pasas de largo, debe ser una trampa orka");
    }
}


function usar_torreta() {
    alert("Sigues avanzando con tus hermanos al campo de batalla y ahora te toca usar una torreta");
    alert("Te toca usar sabiamente la torreta, ya que tiene 150 balas y si gastas 75 se puede sobrecalentar");

    let torreta = {
        resistencia: 50,
        balas: 150,
        sobrecarga: false,
        destruida: false,
    }

    if (torreta.balas == 150) {
        let sobrecarga = confirm("Ves como unos 100 orkos se acercan hacia ti. ¿Prefieres sobrecargar la torreta en contra de ellos?");

        if (sobrecarga) {
            alert("Desataste toda tu ira contra los orkos");
            torreta.balas -= 75;
            if (torreta.balas >= 75) {
                alert("Otra horda de orkos se aproxima");
                let usarBalasRestantes = confirm("¿Quieres usar lo que queda de las balas para acabar con ellos?");
                if (usarBalasRestantes) {
                    alert("Decides sacrificarte por tus hermanos y en nombre del imperio la humanidad");
                    location.href = "../pages/game_over.html";
                } else {
                    alert("Escapas con tus hermanos y vas a otro camino");
                }
            }
        } else {
            alert("Uno de tus hermanos usó un lanzamisiles y acabó con los orkos");
        }
    } else {
        alert("Uno de tus hermanos usó un lanzamisiles y acabó con los orkos");
    }
}



mensajeInicial();
pruebaDeLealtad();
inscripcionDelRecluta();
armeriaDelBatallon();
ataque_orko();
ayuda_de_emergencia();
montar_sentinela();
usar_torreta();

console.log(recluta);
