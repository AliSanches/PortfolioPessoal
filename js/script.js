// INICIO EFEITO ESCREVER
var titulo = document.querySelector('#titulo');
var texto = titulo.innerHTML;
var index = 0;

function escrever()
{
    titulo.innerHTML = titulo.innerHTML.replace('|', '')

    if (texto.length > index)
    {
        if(index == 0)
        {
            titulo.innerHTML = texto.charAt(index)
        }
        else
        {
            titulo.innerHTML += texto.charAt(index)
        }

        titulo.innerHTML += '|'

        index++
        setTimeout(escrever, 110)
    }
}

escrever();
// FINAL EFEITO ESCREVER

// INICIO EFEITO FADE IN
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll()
{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(e) {

        if((windowTop) > e.offsetTop)
        {
            e.classList.add(animationClass);
        }
        else
        {
            e.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) 
{
    window.addEventListener('scroll', function() 
    {
        animeScroll();
    })
}
// FINAL EFEITO FADE IN

