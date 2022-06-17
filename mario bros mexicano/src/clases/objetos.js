class Objetos{
    constructor(){
        this.objeto = document.createElement("img")
        this.estado
        this.posicionY = 2
        this.velocidadObjeto = 23
        
    }
    crear(){
        let posicionY = Math.floor(Math.random() *(window.innerHeight-100))
        this.objeto.src = "src/img/Rotten_Flesh_JE3_BE2.png"
        this.objeto.style.top = "0px"    
        this.objeto.style.left = posicionY + "px"
        this.objeto.style.width = "53px"
        this.objeto.style.height = "53px"
        this.objeto.style.position = "absolute"
        this.objeto.style.zIndex = "2"
        document.body.appendChild(this.objeto)
        
        let intervalo = setInterval(this.intervalol(),50)

    }
    
    
    intervalol(){
        console.log(this.objeto)
        this.posicionY += this.velocidadObjeto
        this.objeto.style.top = this.posicionY + "px"
        if(this.posicionY > window.innerHeight-objeto.height){
            this.posicionY = 0
            objeto.style.top = this.posicionY + "px"
        }else{
            this.objeto.style.top = this.posicionY + "px"
        }
        //this.objeto.style.top = this.posicionY + "px"
    }
    
        
        
        



    
}