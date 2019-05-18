const cotizador = new API('f30482d5c273f47706ddb98194e8b312c1a7fc0bcdf1eae8bf21a50896306f93');
const ui = new Interfaz();


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
        //Arrojar un alerta de error
        ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
        .then(data => {
            ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);
        })
    }
})