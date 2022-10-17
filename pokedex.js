let pokeminimo = 1;
let pokemaximo = 151;

const gen1 = document.querySelector(".Generación-1");
gen1.addEventListener("click", () => {
  console.log("GENERACIÓN 1");
  pokeminimo = 1;
  pokemaximo = 151;
  removeChildNodes(div1m12);
  POKEMON();
});
const gen2 = document.querySelector(".Generación-2");
gen2.addEventListener("click", () => {
  console.log("GENERACIÓN 2");
  pokeminimo = 152;
  pokemaximo = 251;
  removeChildNodes(div1m12);
  POKEMON();
});
const gen3 = document.querySelector(".Generación-3");
gen3.addEventListener("click", () => {
  console.log("GENERACIÓN 3");
  pokeminimo = 252;
  pokemaximo = 386;
  removeChildNodes(div1m12);
  POKEMON();
});
const gen4 = document.querySelector(".Generación-4");
gen4.addEventListener("click", () => {
  console.log("GENERACIÓN 4");
  pokeminimo = 387;
  pokemaximo = 493;
  removeChildNodes(div1m12);
  POKEMON();
});
const gen5 = document.querySelector(".Generación-5");
gen5.addEventListener("click", () => {
  console.log("GENERACIÓN 5");
  pokeminimo = 494;
  pokemaximo = 649;
  removeChildNodes(div1m12);
  POKEMON();
});
const gen6 = document.querySelector(".Generación-6");
gen6.addEventListener("click", () => {
  console.log("GENERACIÓN 6");
  pokeminimo = 650;
  pokemaximo = 721;
  removeChildNodes(div1m12);
  POKEMON();
});
const gen7 = document.querySelector(".Generación-7");
gen7.addEventListener("click", () => {
  console.log("GENERACIÓN 7");
  pokeminimo = 722;
  pokemaximo = 809;
  removeChildNodes(div1m12);
  POKEMON();
});
const gen8 = document.querySelector(".Generación-8");
gen8.addEventListener("click", () => {
  console.log("GENERACIÓN 8");
  pokeminimo = 810;
  pokemaximo = 902;
  removeChildNodes(div1m12);
  POKEMON();
});
const genalola = document.querySelector(".Generación-Alola");
genalola.addEventListener("click", () => {
  console.log("GENERACIÓN ALOLA");
  pokeminimo = 10091;
  pokemaximo = 10115;
  removeChildNodes(div1m12);
  POKEMON();
});

const url = 'https://pokeapi.co/api/v2/pokemon/';
let pokelista = [];
const POKEMON = async()=>{
  for(let i = pokeminimo; i<=pokemaximo; i++ ){
    if(i == 10093){
      i = 10100;
    }
    await fetch(url + [i])
    .then((res) => res.json())
    .then((pokemon)=>{
      pokelista.push(pokemon);
      carta(pokemon);
      return pokemon;
      
    })
    escuchar(pokelista);
    
  }
}


/*let pokelista = [];
const POKEMON = async () => {
  try {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')

    const {results} = await respuesta.json()

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].name)
    }

  } catch (error) {
    console.log(error);
  } 
  
}*/



/*const cargarDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const res = await fetch(url);
  const datos = await res.json();
  console.log(datos);
};*/
  
  const div1m12 = document.querySelector(".Caja");
  document.body.appendChild(div1m12);
  
  const carta = (pokemon)=>{
    
    

    console.log(pokemon);
    const div0m12 = document.createElement("div");/*Caja que contiene las dos partas de la carta*/
    const div2m12 = document.createElement("div");/*Carta*/
    const div2__1m12 = document.createElement("div");/*Carta(delante)*/
    const div2__2m12 = document.createElement("div");/*Carta(atrás)*/
    
    const div3m12 = document.createElement("div");/*Número pokemon*/
    const div4m12 = document.createElement("div");/*Botón*/
    const div5m12 = document.createElement("div");/*Imagen*/
    const div6m12 = document.createElement("div");/*Peso*/
    const div7m12 = document.createElement("div");/*Altura*/
    const div8m12 = document.createElement("div");/*Nombre*/
    const div9m12 = document.createElement("div");/*Número y Botón*/
    const div10m12 = document.createElement("div");/*Tipo de Poke*/
    const div10__1m12 = document.createElement("div");/*Tipo de Poke1*/
    const div10__2m12 = document.createElement("div");/*Tipo de Poke2*/
    const imgm12 = document.createElement("img");
    imgm12.setAttribute("src", pokemon.sprites.other.home.front_default)

    const p1m12 = document.createElement("p");/*Número pokemon*/
    const p2m12 = document.createElement("p");/*Peso*/
    const p3m12 = document.createElement("p");/*Altura*/
    const p4m12 = document.createElement("p");/*Nombre*/
    const p5m12 = document.createElement("p");/*Tipo1*/
    const p6m12 = document.createElement("p");/*Tipo2*/



    p1m12.textContent = pokemon.id;
    p2m12.textContent = "PESO | "+ pokemon.weight/10 + "KG";
    p3m12.textContent = "ALTURA | "+ pokemon.height/10 + "M";
    p4m12.textContent =  pokemon.name;
    /*p5m12.textContent = pokemon.types[0].type.name;
    if(pokemon.types[1]){
      p6m12.textContent = pokemon.types[1].type.name;
    }
    */

    const boton2m12 = document.createElement("button");

    boton2m12.textContent = "❌";
    boton2m12.addEventListener("click", () => {
        byepoke(div2m12);
        alert(pokemon.name + " SE ARCHIVARÁ")
      });
    /*Añadir clase*/
    boton2m12.classList.add("botonquitar");
    imgm12.classList.add("Img");
    p1m12.classList.add("texto-id");
    p2m12.classList.add("texto-peso");
    p3m12.classList.add("texto-altura");
    p4m12.classList.add("texto-nombre");
    //p5m12.classList.add("PokeTipo1");
    //p6m12.classList.add("PokeTipo2");

    div0m12.classList.add("CartaPrincipal");
    div2m12.classList.add("CartaSubprincipal");

    div3m12.classList.add("Caja-Id");
    div4m12.classList.add("Caja-Botón");
    div5m12.classList.add("Caja-Imagen");
    div6m12.classList.add("Caja-Peso");
    div7m12.classList.add("Caja-Altura");
    div8m12.classList.add("Caja-Nombre");
    div9m12.classList.add("Caja-Id-Botón");
    div10m12.classList.add("Caja-Tipo");
    //div10__1m12.classList.add("Caja-Tipo-");
    //div10__2m12.classList.add("Caja-Tipo-");

    /*Meter*/
    div3m12.appendChild(p1m12);
    div4m12.appendChild(boton2m12);
    div5m12.appendChild(imgm12);
    div6m12.appendChild(p2m12);
    div7m12.appendChild(p3m12);
    div8m12.appendChild(p4m12);
    div9m12.appendChild(div3m12);
    div9m12.appendChild(div10m12);
    //div10__1m12.appendChild(p5m12);
    //div10__2m12.appendChild(p6m12);
    div10m12.appendChild(div10__1m12);
    div10m12.appendChild(div10__2m12);
    //div9m12.appendChild(div4m12);

    div2__1m12.appendChild(div9m12);
    div2__1m12.appendChild(div5m12);
    div2__1m12.appendChild(div6m12);
    div2__1m12.appendChild(div7m12);
    div2__1m12.appendChild(div8m12);
    div2__2m12.appendChild(div4m12);
  
    div0m12.appendChild(div2m12);
    div2m12.appendChild(div2__1m12)
    div2m12.appendChild(div2__2m12)
    div1m12.appendChild(div0m12);


  
  
    //div2m12.classList.add("carta");
    if(pokemon.types.length == 1){
      if(pokemon.types[0].type.name == "fire"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-")
      }
      if(pokemon.types[0].type.name == "grass" || pokemon.types[0].type.name == "bug"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      
      if(pokemon.types[0].type.name == "electric"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      if(pokemon.types[0].type.name == "water" || pokemon.types[0].type.name == "ice"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      
      if(pokemon.types[0].type.name == "normal" || pokemon.types[0].type.name == "flying"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      if(pokemon.types[0].type.name == "dragon"){
        div2__1m12.classList.add("cartadragón");
        div2__2m12.classList.add("cartadragón-");
      }
      if(pokemon.types[0].type.name == "poison" || pokemon.types[0].type.name == "fairy"||pokemon.types[0].type.name == "psychic" || pokemon.types[0].type.name == "ghost"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      if(pokemon.types[0].type.name == "ground" || pokemon.types[0].type.name == "fighting" || pokemon.types[0].type.name == "rock"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      if(pokemon.types[0].type.name == "dark"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      if(pokemon.types[0].type.name == "steel"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
    }
    if(pokemon.types.length > 1){
      //PLANTA + VENENO 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "poison"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + PSÍQUICO 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + FANTASMA 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + VOLADOR 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + LUCHA 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + TIERRA 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + HADA 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + SOMBRA 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //PLANTA + ACERO 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //PLANTA + HIELO 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "ice"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //PLANTA + DRAGÓN 
      if(pokemon.types[0].type.name == "grass" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //FUEGO + VOLADOR
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + ACERO
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + TIERRA
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + ROCA
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "rock"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + BICHO
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "bug"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + LUCHA
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + AGUA
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + NORMAL
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "normal"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + PSÍQUICO
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + SOMBRA
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + FANTASMA
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //FUEGO + DRAGÓN
      if(pokemon.types[0].type.name == "fire" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //BICHO + VOLADOR
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + VENENO
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "poison"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + FANTASMA
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + VENENO
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "poison"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + AGUA
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + PLANTA
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "grass"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + ACERO
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //BICHO + ROCA
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "rock"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + LUCHA
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + PSÍQUICO
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + FUEGO
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "fire"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //BICHO + ELÉCTRICO
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "electric"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //BICHO + TIERRA
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //BICHO + HADA
      if(pokemon.types[0].type.name == "bug" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaamor");
        div2__2m12.classList.add("cartaamor-");
      }
      //NORMAL + VOLADOR
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      //NORMAL + LUCHA
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      //VENENO + TIERRA
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //VENENO + VOLADOR
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //VENENO + AGUA
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //VENENO + FUEGO
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //VENENO + BICHO
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "fire"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //VENENO + LUCHA
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //VENENO + DRAGÓN
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //VENENO + SOMBRA
      if(pokemon.types[0].type.name == "poison" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //NORMAL + HADA
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaamor");
        div2__2m12.classList.add("cartaamor-");
      }
      //NORMAL + TIERRA
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      //NORMAL + AGUA
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      //NORMAL + DRAGÓN
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartadragón");
        div2__2m12.classList.add("cartadragón-");
      }
      //NORMAL + PSÍQUICO
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      //NORMAL + PLANTA
      if(pokemon.types[0].type.name == "normal" && pokemon.types[1].type.name == "grass"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //AGUA + LUCHA
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + ACERO
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + VENENO
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "poison"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + PLANTA
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "grass"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + BICHO
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "bug"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //AGUA + PSÍQUICO
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + HIELO
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "ice"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + ROCA
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "rock"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + VOLADOR
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + ELÉCTRICO
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "electric"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //AGUA + HADA
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + TIERRA
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + DRAGÓN
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + FANTASMA
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //AGUA + SOMBRA
      if(pokemon.types[0].type.name == "water" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //ROCA + TIERRA
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + SOMBRA
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //ROCA + AGUA
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + FUEGO
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "fire"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + ACERO
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ROCA + PLANTA
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "grass"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //ROCA + BICHO
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "bug"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + ELÉCTRICO
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "electric"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ROCA + LUCHA
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + VOLADOR
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + PSÍQUICO
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + DRAGÓN
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ROCA + VENENO
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "poison"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //ROCA + HIELO
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "ice"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //ROCA + HADA ->ROSAAAAA
      if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaamor");
        div2__2m12.classList.add("cartaamor-");
      }
      //TIERRA + ROCA
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "rock"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //TIERRA + FANTASMA
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //TIERRA + DRAGÓN
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //TIERRA + ACERO
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //TIERRA + ELÉCTRICO
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "electric"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //TIERRA + SOMBRA
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //TIERRA + NORMAL
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "normal"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      //TIERRA + VOLADOR
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //TIERRA + PSÍQUICO
      if(pokemon.types[0].type.name == "ground" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //ELÉCTRICO + ACERO
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + VENENO
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "poison"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + SOMBRA
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + PSÍQUICO
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + NORMAL
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "normal"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + DRAGÓN
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + HIELO
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "ice"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + HADA
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + FANTASMA
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //ELÉCTRICO + VOLADOR
      if(pokemon.types[0].type.name == "electric" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //FANTASMA +  VENENO
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "poison"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //FANTASMA +  HADA
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //FANTASMA +  LUCHA
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //FANTASMA +  DRAGÓN
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartadragón");
        div2__2m12.classList.add("cartadragón-");
      }
      //FANTASMA +  FUEGO
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "fire"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //PSÍQUICO + HADA
      if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //PSÍQUICO + FUEGO
      if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "fire"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
       //PSÍQUICO + VOLADOR
       if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
       //PSÍQUICO + NORMAL
       if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "normal"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
       //PSÍQUICO + FANTASMA
       if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
       //PSÍQUICO + ACERO
       if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
       //PSÍQUICO + PLANTA
       if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "grass"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
       //PSÍQUICO + LUCHA
       if(pokemon.types[0].type.name == "psychic" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //HIELO + PSÍQUICO
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //HIELO + VOLADOR
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //HIELO + ACERO
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //HIELO + HADA
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //HIELO + TIERRA
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //HIELO + BICHO
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "bug"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //HIELO + AGUA
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //HIELO + FANTASMA
      if(pokemon.types[0].type.name == "ice" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //DRAGÓN + VOLADOR
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartadragón");
        div2__2m12.classList.add("cartadragón-");
      }
      //DRAGÓN + LUCHA
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartadragón");
        div2__2m12.classList.add("cartadragón-");
      }
      //DRAGÓN + FUEGO
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "fire"){
        div2__1m12.classList.add("cartafuego");
        div2__2m12.classList.add("cartafuego-");
      }
      //DRAGÓN + ELÉCTRICO
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "electric"){
        div2__1m12.classList.add("cartaeléctrico");
        div2__2m12.classList.add("cartaeléctrico-");
      }
      //DRAGÓN + HIELO
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "ice"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //DRAGÓN + PSÍQUICO
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartadragón");
        div2__2m12.classList.add("cartadragón-");
      }
      //DRAGÓN + TIERRA
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartadragón");
        div2__2m12.classList.add("cartadragón-");
      }
      //DRAGÓN + FANTASMA
      if(pokemon.types[0].type.name == "dragon" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
       //HADA + VOLADOR
       if(pokemon.types[0].type.name == "fairy" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
      //SOMBRA + VOLADOR
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //SOMBRA + HIELO
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "ice"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //SOMBRA + FUEGO
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "fire"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //SOMBRA + DRAGÓN
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //SOMBRA + ACERO
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //SOMBRA + LUCHA
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //SOMBRA + PSÍQUICO
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //SOMBRA + FANTASMA
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //SOMBRA + HADA
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //SOMBRA + PLANTA
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "grass"){
        div2__1m12.classList.add("cartaplanta");
        div2__2m12.classList.add("cartaplanta-");
      }
      //SOMBRA + NORMAL
      if(pokemon.types[0].type.name == "dark" && pokemon.types[1].type.name == "normal"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //ACERO + TIERRA
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "ground"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ACERO + LUCHA
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "fighting"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ACERO + VOLADOR
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ACERO + FANTASMA
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ACERO + HADA
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "fairy"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ACERO + ROCA
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "rock"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ACERO + PSÍQUICO
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //ACERO + DRAGÓN
      if(pokemon.types[0].type.name == "steel" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //LUCHA + PSÍQUICO
      if(pokemon.types[0].type.name == "fighting" && pokemon.types[1].type.name == "psychic"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //LUCHA + HIELO
      if(pokemon.types[0].type.name == "fighting" && pokemon.types[1].type.name == "ice"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //LUCHA + VOLADOR
      if(pokemon.types[0].type.name == "fighting" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //LUCHA + ACERO
      if(pokemon.types[0].type.name == "fighting" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //LUCHA + SOMBRA
      if(pokemon.types[0].type.name == "fighting" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartalucha");
        div2__2m12.classList.add("cartalucha-");
      }
      //LUCHA + FANTASMA
      if(pokemon.types[0].type.name == "fighting" && pokemon.types[1].type.name == "ghost"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //FANTASMA + VOLADOR 
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "flying"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //FANTASMA + SOMBRA 
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "dark"){
        div2__1m12.classList.add("cartasombra");
        div2__2m12.classList.add("cartasombra-");
      }
      //FANTASMA + PLANTA 
      if(pokemon.types[0].type.name == "ghost" && pokemon.types[1].type.name == "grass"){
        div2__1m12.classList.add("cartaveneno");
        div2__2m12.classList.add("cartaveneno-");
      }
      //VOLADOR + ACERO
      if(pokemon.types[0].type.name == "flying" && pokemon.types[1].type.name == "steel"){
        div2__1m12.classList.add("cartaacero");
        div2__2m12.classList.add("cartaacero-");
      }
      //VOLADOR + AGUA
      if(pokemon.types[0].type.name == "flying" && pokemon.types[1].type.name == "water"){
        div2__1m12.classList.add("cartaagua");
        div2__2m12.classList.add("cartaagua-");
      }
      //VOLADOR + DRAGÓN
      if(pokemon.types[0].type.name == "flying" && pokemon.types[1].type.name == "dragon"){
        div2__1m12.classList.add("cartanormal");
        div2__2m12.classList.add("cartanormal-");
      }
    }




/*
    //ROCA + HIELO
    if(pokemon.types[0].type.name == "rock" && pokemon.types[1].type.name == "ice"){
      div2__1m12.classList.add("cartaagua");
      div2__2m12.classList.add("cartaagua-");
    }else if(pokemon.types[0].type.name == "rock"){//ROCA
      div2__1m12.classList.add("cartalucha");
      div2__2m12.classList.add("cartalucha-");
    }

    //BICHO + ELÉCTRICO 
    */


    if(pokemon.types[0].type.name == "fire"){
      div10__1m12.classList.add("TipoFire")
    }
    
    if(pokemon.types[0].type.name == "grass"){
      div10__1m12.classList.add("TipoGrass")
    }
    
    if(pokemon.types[0].type.name == "bug"){
      div10__1m12.classList.add("TipoBug")
    }
    
    if(pokemon.types[0].type.name == "water"){
      div10__1m12.classList.add("TipoWater")
    }

    if(pokemon.types[0].type.name == "normal"){
      div10__1m12.classList.add("TipoNormal")
    }

    if(pokemon.types[0].type.name == "poison"){
      div10__1m12.classList.add("TipoPoison")
    }

    if(pokemon.types[0].type.name == "electric"){
      div10__1m12.classList.add("TipoElectric")
    }

    if(pokemon.types[0].type.name == "dark"){
      div10__1m12.classList.add("TipoDark")
    }

    if(pokemon.types[0].type.name == "flying"){
      div10__1m12.classList.add("TipoFlying")
    }

    if(pokemon.types[0].type.name == "fighting"){
      div10__1m12.classList.add("TipoFighting")
    }

    if(pokemon.types[0].type.name == "dragon"){
      div10__1m12.classList.add("TipoDragon")
    }

    if(pokemon.types[0].type.name == "ghost"){
      div10__1m12.classList.add("TipoGhost")
    }

    if(pokemon.types[0].type.name == "psychic"){
      div10__1m12.classList.add("TipoPhy")
    }

    if(pokemon.types[0].type.name == "rock"){
      div10__1m12.classList.add("TipoRock")
    }

    if(pokemon.types[0].type.name == "ground"){
      div10__1m12.classList.add("TipoGround")
    }

    if(pokemon.types[0].type.name == "steel"){
      div10__1m12.classList.add("TipoSteel")
    }

    if(pokemon.types[0].type.name == "fairy"){
      div10__1m12.classList.add("TipoFairy")
    }

    if(pokemon.types[0].type.name == "ice"){
      div10__1m12.classList.add("TipoIce")
    }
    
    if(pokemon.types.length > 1){
      if(pokemon.types[1].type.name == "fire"){
        div10__2m12.classList.add("TipoFire")
      }
      
      if(pokemon.types[1].type.name == "grass"){
        div10__2m12.classList.add("TipoGrass")
      }
      
      if(pokemon.types[1].type.name == "bug"){
        div10__2m12.classList.add("TipoBug")
      }
      
      if(pokemon.types[1].type.name == "water"){
        div10__2m12.classList.add("TipoWater")
      }
  
      if(pokemon.types[1].type.name == "normal"){
        div10__2m12.classList.add("TipoNormal")
      }
  
      if(pokemon.types[1].type.name == "poison"){
        div10__2m12.classList.add("TipoPoison")
      }
  
      if(pokemon.types[1].type.name == "electric"){
        div10__2m12.classList.add("TipoElectric")
      }
  
      if(pokemon.types[1].type.name == "dark"){
        div10__2m12.classList.add("TipoDark")
      }
  
      if(pokemon.types[1].type.name == "flying"){
        div10__2m12.classList.add("TipoFlying")
      }
  
      if(pokemon.types[1].type.name == "fighting"){
        div10__2m12.classList.add("TipoFighting")
      }
  
      if(pokemon.types[1].type.name == "dragon"){
        div10__2m12.classList.add("TipoDragon")
      }
  
      if(pokemon.types[1].type.name == "ghost"){
        div10__2m12.classList.add("TipoGhost")
      }
  
      if(pokemon.types[1].type.name == "psychic"){
        div10__2m12.classList.add("TipoPhy")
      }
  
      if(pokemon.types[1].type.name == "rock"){
        div10__2m12.classList.add("TipoRock")
      }
  
      if(pokemon.types[1].type.name == "ground"){
        div10__2m12.classList.add("TipoGround")
      }
  
      if(pokemon.types[1].type.name == "steel"){
        div10__2m12.classList.add("TipoSteel")
      }
  
      if(pokemon.types[1].type.name == "fairy"){
        div10__2m12.classList.add("TipoFairy")
      }
  
      if(pokemon.types[1].type.name == "ice"){
        div10__2m12.classList.add("TipoIce")
      }
    }
    

  }
  //carta.classList.add("carta");
  

  function byepoke(div2m12){
    div2m12.remove();
}

const escuchar = (pokelista) => {
  let input$$ = document.querySelector("input");
  input$$.addEventListener('keyup', () => buscarpokemon(input$$.value, pokelista));
}

const buscarpokemon = (name, pokelista) => {
  let div$$ = document.querySelector(".BuscarPokemonDiv");
const filtrarpokemon = pokelista.filter((poke)=> poke.name.toLowerCase().includes(name.toLowerCase()));
div1m12.innerHTML = "";
for (let i = 0; i < filtrarpokemon.length; i++){
  const element = filtrarpokemon[i];
  carta(element);
}
}




const jugador = document.querySelector(".Jugadorxd");
jugador.addEventListener("click", () => {
  pipipupu(jugador);
});
function pipipupu(jugador){
  alert("ESTE PROYECTO SE HA REALIZADO POR MATTHEW ;)");
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}



POKEMON();









//const Pokemon = (pokemons)=>{
  //for (const pokemon of pokemons.results){
   // const divm12 = document.createElement("div");
    //divm12.innerHTML = '<img width="300" src="'+pokemon.url+'" alt=""><figcaption>'+pokemon.name+'</figcaption>';
    //divm12.innerHTML = `<img width="300" src="${pokemons.results[0].url}"/>`;
    //const h1m12 = document.createElement("h1");
    //h1m12.textContent = pokemons.results.name;
    //divm12.appendChild(h1m12);
    //document.body.appendChild(divm12);
    

 // }
//}








//function pokemon(xd){
    //const div1m12 = document.createElement("div");
   // const div2m12 = document.createElement("div");
   // div2m12.innerHTML = `<img width="300" src="${xd[0].url}"/>`;

   // div1m12.appendChild(div2m12);
  //  document.body.appendChild(div1m12);
//}

//const brCharacters = (characters) =>{
  //  for (const character of characters.results) {
  //      const figure$$ = document.createElement('figure')
      // figure$$.innerHTML = '<img src="'+character.img+'" alt=""><figcaption>'+character.name+'</figcaption>'        
 //       document.body.appendChild(figure$$)
 //   }
//}

