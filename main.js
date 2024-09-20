let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor o igual que 8");
        return;
    }

    let password = '';
    for(let i=0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+= caracterAleatorio;
        

    }

    contrasena.value = password;

    validarContrasena(password);
}

function limpiar(){
    document.getElementById("contrasena").value = '';
}

function validarContrasena(password){
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()]/.test(password);

    if(tieneMayuscula && tieneNumero && tieneEspecial){
        alert("La contrasena es fuerte");
    } else {
        alert("La contraseña es débil. Debe contener al menos una mayúscula, un número y un carácter especial");
    }
}






