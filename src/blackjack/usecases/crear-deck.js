import _ from 'underscore' 

// export const miNombre = 'Edu';

// Esta función crea un nuevo deck

/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tipoDeCartas ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
 export const crearDeck = (tipoDeCartas, tiposEspeciales) => {

    if( !tipoDeCartas || tipoDeCartas === 0  ) throw new Error('tiposDeCartas es obligatorio como un arreglo string'); 
    if( !tiposEspeciales || tiposEspeciales === 0  ) throw new Error('tiposEspeciales es obligatorio como un arreglo string');
    
    
    let deck = []; 

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCartas) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCartas) {
        for( let esp of tiposEspeciales) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck();
