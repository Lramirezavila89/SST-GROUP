//::::::::::PUNTO # 3:::::::::::::::::

//clase
class Tabla {
    //constructor
    constructor(fila,columna){
        this.fila = fila,
        this.columna =columna

    }
    //metodo
    crear(){ 
        let i, j
        let tabla = '<table class="table table-striped">'
            for(i=0; i<this.fila;i++){
                    tabla +='<tr>'
                for(j=0; j<this.columna;j++){
                    tabla +=`<td> tabla de ${this.fila} x ${this.columna}</td>`
                }
                    tabla +='</tr>'
            }
        tabla +='</table>'

        return tabla
         
    }
}
    


//controlador
const crearTabla = document.querySelector('.crear-tabla')
crearTabla.addEventListener('submit', (e) =>{
    e.preventDefault()
          const fila = e.target[0].value
          const columna = e.target[1].value

          const tabla = new Tabla (fila,columna)
          const tablaCreada = tabla.crear()
          
          mostrarTabla(tablaCreada)
    e.target.reset()
    e.stopPropagation()
})



//vista
const mostrarTabla =  (tablaCreada) =>{
    const resultado3 = document.getElementById('resultado3')
    resultado3.innerHTML = tablaCreada
    resultado3.style.display = 'block'
    
}
