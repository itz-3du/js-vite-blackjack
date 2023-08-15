
/**
 * 
 * @param {string} cartaShuffle 
 * @returns {number}
 */
// esta  funcion le da valor a la carta
export const valorCarta = ( cartaShuffle ) => {

    const valor = cartaShuffle.substring(0, cartaShuffle.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}