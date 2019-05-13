//Leer el formulario

const formulario = document.querySelector('#formulario');

//eventListener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //Leer la cryptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    //Comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        console.log('selecciona algo');
    } else {
        console.log('todo bien');
    }
})