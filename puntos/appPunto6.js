//::::::::::PUNTO # 6:::::::::::::::::
function fInicio(d) {
    let z  = n =>  ('0' + n).slice(-2);
    let dias = 5
    return d.getFullYear() + '-'
           + z(d.getMonth()+1) + '-' +
           (z(d.getDate())-dias)
}

function fFin(d) {
    let z  = n =>  ('0' + n).slice(-2);
    return d.getFullYear() + '-'
           + z(d.getMonth()+1) + '-' +
           z(d.getDate()) 
}
  
  //console.log(fFin(new Date()));
  //console.log(fInicio(new Date()));


//https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP74665,SF61745,SF60634,SF43718,SF43773/datos/2015-01-01/2015-01-08
let token = '23fbb7ebedd9cd997db4e42fc018fb583f47a7f4bb7af179f519e242e24059b2'
let serieTasaCambioReal = 'SR28,SR464,SR465,SR1501,SR1503'
let serieTasaCambio = 'SP74665,SF61745,SF60634,SF43718,SF43773'
let fechaIni = fInicio(new Date())
let fechaFin = fFin(new Date())

let url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${serieTasaCambio}/datos/${fechaIni}/${fechaFin}?token=${token}`


const dato = async () =>{

    const datos = await fetch(url)
    const dato = await datos.json()
    try {
        let series = dato.bmx.series
        //console.log(series)
        let tabla = '<table class="table table-striped">'
            tabla += '<thead><tr><th>SERIE</th><th>FECHA</th><th>DATO</th></tr><thead>'
            tabla += '<tbody>'
            for (let i in series) {
                let serie=series[i]
                tabla += '<tr><td>'+serie.titulo+'</td><td>'+serie.datos[0].fecha+'</td><td>'+serie.datos[0].dato+'</td></tr>'
                const resultado6 = document.getElementById('resultado6')
                resultado6.style.display ='block'
                resultado6.innerHTML += tabla
                
            }
        tabla += '</tbody>'
        tabla += '</table>'
   
        
    } catch (error) {
        console.log(error)
    }
}
       
    


const btnBanco= document.getElementById('banco')
btnBanco.addEventListener('click', () =>{
   dato()
})





