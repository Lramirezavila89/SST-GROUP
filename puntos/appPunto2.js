//::::::::::PUNTO # 2:::::::::::::::::

//clase
class Calendario {
    //constructor
    constructor(year){
        this.year = year
    }
    //metodo
    calcularBisiesto(){ 
        if( (this.year % 400 === 0 && this.year % 100 != 0) || this.year % 4 === 0){
            return `<div  class='si'> El año ${this.year} es bisiesto en el calendario gregoriano</div>`
            }else{
            return `<div  class='no'> El año ${this.year} NO es bisiesto</div>`
            }
    }
}
    


//controlador
const calendarioBisiesto = document.querySelector('.calendario-bisiesto')
calendarioBisiesto.addEventListener('submit', (e) =>{
    e.preventDefault()
          const valor = e.target[0].value
          const calendario = new Calendario (valor)
          const resultado = calendario.calcularBisiesto()
          mostrarPunto2(resultado)
    e.target.reset()
    e.stopPropagation()
})



//vista
const mostrarPunto2 =  (resultado) =>{
    const resultado2 = document.getElementById('resultado2')
    resultado2.style.display = "block"
    resultado2.innerHTML = resultado
}
