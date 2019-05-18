class Interfaz {

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
        .then(monedas => {
            //crear un select de opciones
            const select = document.querySelector('#criptomoneda');
            //iterar por los resultados de la api
            for(const [key, value] of Object.entries(monedas.monedas.Data) ) {
                //añadir el Symbol y el Nombre como opciones
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);
            }
        })
    }
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        //mostrar contenidos
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }
    //imprime el resultado de la cotizacion
    mostrarResultado(resultado, moneda, crypto){
        console.log(resultado[crypto] [moneda]);
    }
}