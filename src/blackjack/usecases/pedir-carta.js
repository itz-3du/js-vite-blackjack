
/**
 * 
 * @param {Array<String>} deck2 
 * @returns {String} rergresa un carta de todo el deck
 */

// Esta función me permite tomar una carta

export const pedirCarta = (deck2) => {
   
    if(!deck2 || deck2.length === 0){
    throw new Error('deck2 es obligatorio como un arreglo de strings') 
    }
    const carta = deck2.pop();
    return carta;
   };