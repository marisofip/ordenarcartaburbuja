/* eslint-disable */
import "bootstrap";
import "./style.css";

/*function soloNumeros(e) {
  let key = e.keyCode || e.which,
    tecla = String.fromCharCode(key),
    numeros = "123456",
    especiales = [],
    tecla_especial = false;
  for (let i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (numeros.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}*/

let valorinput;
let contenidoDeCartas;

function dibujaCartas(cartasADibujar, idContenedor) {
  //funcion que renderiza las cartas
  let contenedorCarta = document.getElementById(idContenedor);
  /*console.log (contenidoDeCartas);
return;*/
  //let cardArray1 = [];
  //for (let i = 0; i < valorinput; i++) {
  let carta, cartaBonita;
  for (let i = 0; i < cartasADibujar.length; i++) {
    carta = cartasADibujar[i];
    cartaBonita = rendercartas(carta);
    //cardArray1.push(rendercartas(carta))
    contenedorCarta.appendChild(cartaBonita);
  }
  console.log(contenedorCarta);

  // console.log(cardArray1);
  // return cardArray1;
}

function rendercartas(contenidoCarta) {
  /*   cotenidoCarta = { 
  palo : '♥' , 
  valor : 11,
  contenido : "K"
}*/

  let myDivcartas = document.createElement("div");
  //nombreid = "myDivcartas"+i;
  //myDivcartas.id = nombreid;
  //myDivcartas.innerHTML = document.getElementById("todaslascartas");
  myDivcartas.classList.add("card");
  //document.getElementById("todaslascartas").

  //todaslascartas.innerHTML= cartaRandom() ;
  // let arraycarta = cartaRandom();

  let myDivpicaup = document.createElement("div");
  myDivpicaup.innerHTML = contenidoCarta.palo;
  //document.getElementById(nombreid);
  //myDivpicaup.innerText = arraycarta[0];
  ///document.getElementById(nombreid).appendChild(myDivpicaup);
  // myDivpicaup.id = "myDivpicaup";
  //document.getElementById (myDivpicaup);
  myDivpicaup.classList.add("picaup");

  //alert(myDiv)

  let myDivvalor = document.createElement("div");
  myDivvalor.innerHTML = contenidoCarta.contenido;
  //document.getElementById(nombreid);
  //myDivvalor.innerText = arraycarta[1];
  //document.getElementById(nombreid).appendChild(myDivvalor);
  // myDivvalor.id = "myDivvalor";
  //document.getElementById (myDivvalor);
  myDivvalor.classList.add("card-numero");

  let myDivpicadown = document.createElement("div");
  myDivpicadown.innerHTML = contenidoCarta.palo;
  //document.getElementById(nombreid);
  //myDivpicadown.innerText = arraycarta[2];
  //document.getElementById(nombreid).appendChild(myDivpicadown);
  //myDivpicadown.id = "myDivpicadown";
  //document.getElementById (myDivpicadown);
  myDivpicadown.classList.add("picadown");

  myDivcartas.appendChild(myDivpicaup);
  myDivcartas.appendChild(myDivvalor);
  myDivcartas.appendChild(myDivpicadown);

  if (contenidoCarta.palo == "♦" || contenidoCarta.palo == "♥") {
    myDivpicaup.style.color = "red";
    myDivvalor.style.color = "red";
    myDivpicadown.style.color = "red";
  }

  return myDivcartas;
}

let valor = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let palo = ["♦", "♥", "♠", "♣"];

//Genera la cantidad de cartas segun input
function generateCarta(numeroCartas) {
  let cartas = [];
  for (let i = 0; i < numeroCartas; i++) {
    cartas.push(cartaRandom());
  }
  return cartas;
}
// contenido random
function cartaRandom() {
  let aleatoriovalor = Math.floor(Math.random() * 12);
  let aleatoriopalo = Math.floor(Math.random() * 4);
  let carta = {
    palo: palo[aleatoriopalo],
    valor: aleatoriovalor,
    contenido: valor[aleatoriovalor]
  };
  //cambie, la funcion que en vez de  generar un array me genera un objeto
  // carta.palo = (palo[aleatoriopalo]);
  //carta.valor = (valor[aleatoriovalor]);

  return carta;
}

let botonDraw = document.querySelector("#botonDraw");
let textBar = document.querySelector("#numerocartas");
botonDraw.addEventListener("click", function() {
  document.querySelector("#todaslascartas").innerHTML = "";
  const input = document.getElementById("numerocartas").value;
  if (input === "") {
    console.log("Invalid Input!");
  } else {
    valorinput = document.getElementById("numerocartas").value;
    contenidoDeCartas = generateCarta(valorinput);
    //cardArray2 = generatecarta(input);
    dibujaCartas(contenidoDeCartas, "todaslascartas");
  }
});

function bubbleSortCartas(cartas) {
  let arr = Array.from(cartas);
  let contenedorSort = document.getElementById("todaslascartasordenadas");

  let stop = arr.length - 1;
  let nombreContenedor;
  let cartaSort;
  let paso = 0;
  while (stop >= 0) {
    let index = 0;

    while (index < stop) {
      if (arr[index].valor > arr[index + 1].valor) {
        // alert(paso);
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
        console.log(arr, index);
        nombreContenedor = "paso-" + index + "-" + stop;
        cartaSort = document.createElement("div");
        cartaSort.id = nombreContenedor;
        cartaSort.innerHTML = "<h3>" + paso + "</h3>";
        contenedorSort.appendChild(cartaSort);
        dibujaCartas(arr, nombreContenedor);
        /*pasoSort = document.createElement("h3");
        pasoSort.innerHTML = paso; esto no funcionaba asi*/
        paso++;
      }
      index++;
    }
    stop--;
  }
}
let botonSort = document.querySelector("#botonSort");
botonSort.addEventListener("click", function() {
  document.querySelector("#todaslascartasordenadas").innerHTML = "";

  bubbleSortCartas(contenidoDeCartas);
});
