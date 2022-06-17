
class Personaje{
    constructor(){
        this.nombre
        this.velocidad = 25
        this.puntaje
        this.mario =document.getElementById("personaje")
        this.posicionX = 0
        this.direccion = ""
        
        
    };
    hola(){
        console.log("hola")
    }
    moverpersonaje(){
        this.hola()
        if(this.direccion == "derecha"){
            
            this.posicionX += this.velocidad
        }else{
            this.posicionX -= this.velocidad
        }
        
        this.mario.style.left = this.posicionX + "px"
        if (this.posicionX > window.innerWidth - this.mario.width) {
            this.posicionX = window.innerWidth - this.mario.width;
        } else if (this.posicionX < 0) {
            this.posicionX = 0;
        }
        
        
    }
    
}