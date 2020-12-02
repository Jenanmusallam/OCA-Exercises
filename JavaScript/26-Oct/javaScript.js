
var elem = document.querySelector('#elem');
document.addEventListener('click', function (event) {

    if (event.target.matches('.show')) {
        elem.removeAttribute('hidden');
        elem.classList.add('fadeInDown');

    }

    if (event.target.matches('.hide')) {
        elem.setAttribute('hidden', 'true');
        elem.classList.remove('fadeInDown');
    }

}, false);

