$("button").click(function() {
    $("button").removeClass("activo");
    $(this).addClass("activo");
    $(document.getElementById('valor-custom').value = "0");
    calcularValorPorPersona();
 });
let porcentaje;
let cuenta;
let personas;
let valor_custom;

function validarCantidadIngresada(personas){

    if(personas.value<=0 || isNaN(personas.value)){
        document.getElementById('valor-invalido').style.display = '';
        document.getElementById('valor-invalido').innerHTML = "Can't be zero";
        document.getElementById('valor-invalido').style.color = "red";
        document.getElementsByTagName('label')[1].style.border = "2px solid red";
    }
    else{
        document.getElementById('valor-invalido').style.display = "none";
        document.getElementsByTagName('label')[1].style.border = "none";
        calcularValorPorPersona();
    }
}

function calcularValorPorPersona(){
    porcentaje = document.getElementsByClassName('activo')[0].value;
    cuenta = document.getElementById('cuenta').value;
    personas = document.getElementById('personas').value;
    valor_custom = document.getElementById('valor-custom').value;
    if(valor_custom!=0){
        porcentaje = `${1 + parseFloat(parseInt(valor_custom)/100)}`;
    }
    if(cuenta != 0 && personas!=0){
        document.getElementById("propina").innerHTML =`
            $${((parseFloat(cuenta)*parseFloat(porcentaje) - parseFloat(cuenta))/parseInt(personas)).toFixed(2)}
        `;
        document.getElementById("total").innerHTML = `
            $${(parseFloat(cuenta)*parseFloat(porcentaje)/parseInt(personas)).toFixed(2)}
        `; 
    }
}

