
/*CAMBIO DE COLOR DE FONDO*/

function cambioFondo(){
    if(window.scrollY > window.innerHeight / 1){
       
        document.body.classList.add('bg-color');
    }else{
        document.body.classList.remove('bg-color');
    }
}

window.addEventListener('scroll', cambioFondo);




