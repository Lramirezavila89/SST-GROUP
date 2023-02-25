//::::::::::PUNTO # 4:::::::::::::::::

//clase
class Aleatorio {
    //constructor
    constructor(superior,inferior){
        this.superior = superior,
        this.inferior = inferior
    }
   
    Generar(){
        let arrayAleatorio = []
        for(let i= 1; i <=20; i++){
            let superior = 100, inferior = 1
            let rango = superior - inferior
            let aleatorio = Math.random() * (rango + 1)
            aleatorio = Math.floor(aleatorio)
            arrayAleatorio.push(inferior + aleatorio)[i]            
        }
        return arrayAleatorio
    }
    

    Ordenar(arrayAleatorio){
        const arrayOrdenado = [...arrayAleatorio]
        for (let i = 0; i < arrayOrdenado.length; i++) {
            //let length = arrayOrdenado.length-1
            let length = arrayOrdenado.length //le quitamos el -1 para que ejecute el metodo correctamente
            for (let j = 0; j < length; j++) {
                if(arrayOrdenado[j-1] > arrayOrdenado[j]){
                    const temp = arrayOrdenado[j-1]
                    arrayOrdenado[j-1] = arrayOrdenado[j]
                    arrayOrdenado[j] = temp
                }
            }
        }
        return `
        <div class="alert alert-secondary text-center alertArray" role="alert">
            ${arrayAleatorio}
        </div>
        <div class="alert alert-secondary text-center alertArray" role="alert">
            ${arrayOrdenado}
        </div>
        ` 
    }
}
    


//controlador
const btnAleatorio= document.getElementById('nAleatorio')
btnAleatorio.addEventListener('click', () =>{

const aleatorio = new Aleatorio(100,1)
mostrarArray(aleatorio.Ordenar(aleatorio.Generar()))
        
})



//vista
const mostrarArray=  (dato) =>{
    const resultado4 = document.getElementById('resultado4')
    resultado4.innerHTML = dato
    resultado4.style.display = 'block'
    
}
