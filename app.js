



const botones = document.querySelectorAll('.btnMenu')
const iframe = document.querySelector('iframe')
let i, current = document.getElementsByClassName("btn-danger")

for(i= 0; i<botones.length; i++){
    botones[i].addEventListener('click', (e) =>{
        e.preventDefault()

        //activamos el active____________________________
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" btn-danger", "")
        }
            e.target.className += " btn-danger"
        //activamos el active____________________________
        
        
        
       if(e.target.id ==='btn1'){
            iframe.setAttribute('src', '')
            document.title = 'Punto # 1'

        }else if(e.target.id ==='btn2'){
            iframe.setAttribute('src', 'puntos/punto2.html')
            document.title = 'Punto # 2'

        }else if(e.target.id ==='btn3'){
            iframe.setAttribute('src', 'puntos/punto3.html')
            document.title = 'Punto # 3'

        }else if(e.target.id ==='btn4'){
            iframe.setAttribute('src', 'puntos/punto4.html')
            document.title = 'Punto # 4'

        }else if(e.target.id ==='btn5'){
            iframe.setAttribute('src', 'puntos/punto5.html')
            document.title = 'Punto # 5'
            
        }else if(e.target.id ==='btn6'){
            iframe.setAttribute('src', 'puntos/punto6.html')
            document.title = 'Punto # 6'
        }
        
    })     
}




