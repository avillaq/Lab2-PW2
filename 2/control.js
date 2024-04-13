document.addEventListener('DOMContentLoaded',init);
function init(){
    const boton = document.querySelector("#Enviar");
    const loquesea = document.querySelector("#valor");
   

    let div = document.querySelector("#Contenido");
    
    boton.addEventListener('click',function(){

        let contenido = inversor(loquesea.value)
        
        //div.innerHTML = `<p>${contenido}</p>`

        div.replaceChildren(contenido)

    });

    function inversor(texto) {
        let tam = texto.length
        let resultado = ""
        for(let i=tam; i>0; i--) {
            resultado += texto.charAt(i-1)
        }
        return resultado
    } 
}