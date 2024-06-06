let btnOpen = document.querySelector(".menu-btn_ativar");
let btnClose = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu-mobile");
let lista = document.getElementById("listaNav");

function open ()
{
    btnOpen.classList.add("none");
    menu.classList.add("flex");
    btnClose.classList.add("flex");
    lista.style.display = ("block");
}

function close ()
{
    menu.classList.remove("flex");
    lista.classList.remove("flex");
    btnOpen.classList.remove("none");
    btnClose.classList.remove("flex");
}

btnOpen.addEventListener("click", open);
btnClose.addEventListener("click", close);