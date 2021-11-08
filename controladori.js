let gif=document.getElementById("gif")
let frase=document.getElementById("frase")

let boton1=document.getElementById("boton1");
let boton2=document.getElementById("boton2");
let boton3=document.getElementById("boton3");


boton1.addEventListener("click",comprobar1);
boton2.addEventListener("click",comprobar2);
boton3.addEventListener("click",comprobar3);


function comprobar1(){

    let letra1=document.getElementById("letra1").value;

    if(letra1=="m"){

        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/kGp7RShgoXIYXhB5zw";
        frase.textContent="muy bien"

        setTimeout (function(){
        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="";
        frase.textContent="";
    },3000)

    }else{

       
        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/UX06yZ6erE0fQtU1Sd";
        frase.textContent="fallaste"

        setTimeout (function(){
          gif.src=""
          gif.classList.remove("visible");
          gif.classList.add("invisble");
          frase.textContent="";
        },3000)
    }

}


function comprobar2(){

    let letra2=document.getElementById("letra2").value;

    if(letra2=="m"){

        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/kGp7RShgoXIYXhB5zw";
        frase.textContent="muy bien"

        setTimeout (function(){
        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="";
        frase.textContent="";
    },3000)

    }else{

       
        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/UX06yZ6erE0fQtU1Sd";
        frase.textContent="fallaste"

        setTimeout (function(){
          gif.src=""
          gif.classList.remove("visible");
          gif.classList.add("invisble");
          frase.textContent="";
        },3000)
    }

}

function comprobar3(){

    let letra3=document.getElementById("letra3").value;

    if(letra3=="m"){

        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/kGp7RShgoXIYXhB5zw";
        frase.textContent="muy bien"

        setTimeout (function(){
        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="";
        frase.textContent="";
    },3000)

    }else{

       
        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/UX06yZ6erE0fQtU1Sd";
        frase.textContent="fallaste"

        setTimeout (function(){
          gif.src=""
          gif.classList.remove("visible");
          gif.classList.add("invisble");
          frase.textContent="";
        },3000)
    }

}