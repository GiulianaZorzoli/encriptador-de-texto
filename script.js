const textarea = document.getElementById("textarea");
const imgResultado = document.getElementById("imgResultado");
const h3Resultado = document.getElementById("h3Resultado");
const pResultado = document.getElementById("pResultado");
const copiarResultado = document.getElementById("copiarResultado");

let textoProcesado="";

function encriptarTexto(){
    const texto = textarea.value;
    if(texto==""){
        mostrarDefault();
    }else{
        textoProcesado="";
         for(let i=0; i<texto.length;i++){
            if(texto[i]=='a'){
                textoProcesado+="ai";
            }else if(texto[i]=='e'){
                textoProcesado+="enter";
            }else if(texto[i]=='i'){
                textoProcesado+="imes";
            }else if(texto[i]=='o'){
                textoProcesado+="ober";
            }else if(texto[i]=='u'){
                textoProcesado+="ufat";
            }else{
                textoProcesado+=texto[i];
            }
         }
        console.log(textoProcesado);
        mostrarRespuesta(textoProcesado);
    }
    
    limpiarTextArea();
   
}
function desencriptarTexto(){
    const texto = textarea.value;
    if(texto==""){
        mostrarDefault();
    }else{
        textoProcesado="";
        let i=0;
        while(i<texto.length){
            switch(texto[i]){
                case 'a':
                    textoProcesado+="a";
                    i=i+2;
                    break;
                case 'e':
                    textoProcesado+="e";
                    i=i+5;
                    break;
                case 'i':
                    textoProcesado+="i";
                    i=i+4;
                    break;
                case 'o':
                    textoProcesado+="o";
                    i=i+4;
                    break;
                case 'u':
                    textoProcesado+="u";
                    i=i+4;
                    break;
                default:
                    textoProcesado+=texto[i];
                    i++;

            }
        }
        
        console.log(textoProcesado);
        mostrarRespuesta(textoProcesado);
    }
    limpiarTextArea();
   
}

const copiarTexto= async () =>{
    try{
        await navigator.clipboard.writeText(textoProcesado);
        console.log("copiado");
    }catch(err){
        console.log("error al copiar");
    }
}

function limpiarTextArea(){
    textarea.value="";
}

function mostrarRespuesta(respuesta){
    imgResultado.classList.add("oculto");
    h3Resultado.classList.add("oculto");
    copiarResultado.classList.remove("oculto");
    pResultado.classList.add("respuesta");
    pResultado.innerHTML=respuesta;
}

function mostrarDefault(){
    imgResultado.classList.remove("oculto");
    h3Resultado.classList.remove("oculto");
    copiarResultado.classList.add("oculto");
    pResultado.classList.remove("respuesta");
    pResultado.innerHTML="Ingresa el texto que desees encriptar o desencriptar.";
}