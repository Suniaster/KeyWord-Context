// Alfabetica
// Mais aparecem
// menos aparecem
// ordem alfabetica ao contrario

/**
 * Classe abstrata responsável pela criação da interface de tipos diferentes de organizadores de frases
 */
export default class ArrangerInterface{
  constructor(){

    this.phrase;

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === ApbtInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

    // Requerindo a criação do método read para 
    if(this.arrange === undefined){
      throw new TypeError("Must create method arrange.");
    }

  }

  

}
