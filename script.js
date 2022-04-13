(function() {
    'use strict'
    const $BODY = document.querySelector("body");
    const $TEMA = document.querySelector(".tema");
    const $switch = document.getElementById("switch");
   

    $switch.addEventListener("click", alterarModo);

    function alterarModo() {
        $BODY.classList.toggle("claro");

        if ($BODY.className === "claro") {
            $TEMA.innerHTML = "Modo Escuro"
        } else {

            $TEMA.innerHTML = "Modo Claro"
        }

    }    
 }) ();