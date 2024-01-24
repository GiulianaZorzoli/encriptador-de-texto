const textarea = document.getElementById("textarea");
const imgResultado = document.getElementById("imgResultado");
const h3Resultado = document.getElementById("h3Resultado");
const pResultado = document.getElementById("pResultado");

function encriptarTexto(){
    const texto = textarea.value;
    if(texto==""){
        mostrarDefault();
    }else{
        let textoEncriptado="";
         for(let i=0; i<texto.length;i++){
            if(texto[i]=='a'){
                textoEncriptado+="ai";
            }else if(texto[i]=='e'){
                textoEncriptado+="enter";
            }else if(texto[i]=='i'){
                textoEncriptado+="imes";
            }else if(texto[i]=='o'){
                textoEncriptado+="ober";
            }else if(texto[i]=='u'){
                textoEncriptado+="ufat";
            }else{
                textoEncriptado+=texto[i];
            }
         }
        console.log(textoEncriptado);
        mostrarRespuesta(textoEncriptado);
    }
    
    limpiarTextArea();
   
}
function desencriptarTexto(){
    const texto = textarea.value;
    if(texto==""){
        mostrarDefault();
    }else{
        let textoDesencriptado="";
        let i=0;
        while(i<texto.length){
            switch(texto[i]){
                case 'a':
                    textoDesencriptado+="a";
                    i=i+2;
                    break;
                case 'e':
                    textoDesencriptado+="e";
                    i=i+5;
                    break;
                case 'i':
                    textoDesencriptado+="i";
                    i=i+4;
                    break;
                case 'o':
                    textoDesencriptado+="o";
                    i=i+4;
                    break;
                case 'u':
                    textoDesencriptado+="u";
                    i=i+4;
                    break;
                default:
                    textoDesencriptado+=texto[i];
                    i++;

            }
        }
        
        console.log(textoDesencriptado);
        mostrarRespuesta(textoDesencriptado);
    }
    limpiarTextArea();
   
}

function limpiarTextArea(){
    textarea.value="";
}

function mostrarRespuesta(respuesta){
    imgResultado.classList.add("oculto");
    h3Resultado.classList.add("oculto");
    pResultado.classList.add("respuesta");
    pResultado.innerHTML=respuesta;
}

function mostrarDefault(){
    imgResultado.classList.remove("oculto");
    h3Resultado.classList.remove("oculto");
    pResultado.classList.remove("respuesta");
    pResultado.innerHTML="Ingresa el texto que desees encriptar o desencriptar.";
}