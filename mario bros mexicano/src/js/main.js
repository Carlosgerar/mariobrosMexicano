
let personaje1 = new Personaje()
let objeto = new Objetos()

let posicionX
let posicionY
let ancho = window.innerWidth
let alto = window.innerHeight
let tecla
let teclaPrecionada = false
objeto.crear()
objeto.intervalol
document.onkeydown = function(e) {
        
    tecla = e.keyCode

    if(tecla == 39){
        personaje1.mario.style.transform = "scaleX(1)"
        personaje1.direccion = "derecha"
    }
    else if(tecla == 37){
        personaje1.direccion = "izquierda"
        personaje1.mario.style.transform = "scaleX(-1)"
        
    }else{
        
        return false
    }
    
    personaje1.moverpersonaje()
    
}




//personaje1.mario.style.left = personaje1.posicionX + "px";
