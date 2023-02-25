//::::::::::PUNTO # 5:::::::::::::::::

//clase
class Duo {
    //constructor
    constructor(letras){
        this.letras = letras

    }
  
    ArregloA(){
        //const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        // const letras ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const letras = this.letras
        let arrayA = []
        for(let i= 1; i <=10; i++){
            let aleatorio = letras.charAt(Math.floor(Math.random() * letras.length))
            arrayA.push(aleatorio)[i]            
        }
        return arrayA
    }

    ArregloB(){
        //const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        // const letras ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const letras = this.letras
        let arrayB = []
        for(let i= 1; i <=10; i++){
            let aleatorio = letras.charAt(Math.floor(Math.random() * letras.length))
            arrayB.push(aleatorio)[i]            
        }
        return arrayB
    }

    Union(arregloA,arregloB){
        let arrayA = [...arregloA]
        let arrayB = [...arregloB]
        arrayA=arrayA.concat(arrayB)
        return arrayA
    }

     Interseccion(arregloA,arregloB){
        let arrayA = [...arregloA]
        let arrayB = [...arregloB]
        let intersectar = arrayA.filter(item => arrayB.includes(item))
        //eliminamos valores iguales
        let unicos = []
        for(var i = 0; i < intersectar.length; i++) {
            const elemento = intersectar[i];
            if (!unicos.includes(intersectar[i])) {
              unicos.push(elemento);
            }
          }
        return unicos
    }



    Diferencia(arregloA,arregloB){
        let arrayA = [...arregloA]
        let arrayB = [...arregloB]
        let diferente = arrayA.filter(item => !arrayB.includes(item))
        return diferente
    }

    DiferenciaSimetrica(arregloA,arregloB){
        let arrayA = [...arregloA]
        let arrayB = [...arregloB]
        let diferente1 = arrayA.filter(item => !arrayB.includes(item))
        let diferente2 = arrayB.filter(item => !arrayA.includes(item))
        return `A-B: [ ${diferente1} ] <br> B-A: [ ${diferente2} ] `
    }
}








//controlador
const btnArreglos= document.getElementById('arreglos')
btnArreglos.addEventListener('click', () =>{
     const letras ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     const duo = new Duo(letras)
     let a= duo.ArregloA()
     let b=duo.ArregloB()

     mostrarArreglos(a,b)
     mostrarUnion(duo.Union(a,b))
     mostrarInterseccion(duo.Interseccion(a,b))
     mostrarDiferencia(duo.Diferencia(a,b))
     mostrarDiferenciaS(duo.DiferenciaSimetrica(a,b))
        
})




//vista
const mostrarArreglos = (a,b)=>{
    const arregloA = document.querySelector('.arregloA span')
    const arregloB = document.querySelector('.arregloB span')

    arregloA.innerHTML = a //arreglos
    arregloB.innerHTML = b //arreglos
}

const mostrarUnion = (array)=>{
    //union
    const union = document.querySelector('.union') 
    union.innerHTML = array
}

const mostrarInterseccion= (array)=>{
    //interseccion
    const interseccion = document.querySelector('.interseccion') 
    interseccion.innerHTML = array
}

const mostrarDiferencia= (array)=>{
    //diferencia
    const diferencia= document.querySelector('.diferencia') 
    diferencia.innerHTML = array
}

const mostrarDiferenciaS= (array)=>{
    //diferenciaSimetrica
    const diferenciaS= document.querySelector('.diferenciaS') 
    diferenciaS.innerHTML = array
}