const mail = document.querySelector('input');
const formulario = document.querySelector('.campo-email');
const boton = document.querySelector('button');
const mensaje_alerta = document.querySelector('.alerta');
const icono_alerta = document.querySelector('.alerta-imagen');
boton.addEventListener('click',(evento)=>{

    evento.preventDefault();
    if(mail.value == '' || !mail.value.includes('@') || !mail.value.includes('.')){
        mail.classList.add("mensaje-error");
        mensaje_alerta.classList.remove("alerta-escondida");
        icono_alerta.classList.remove("alerta-escondida");
        
    }
    else{
        mail.value = "";
    }

});

formulario.addEventListener('focusout', () => {
    mail.classList.remove("mensaje-error");
    mensaje_alerta.classList.add("alerta-escondida");
    icono_alerta.classList.add("alerta-escondida");
})