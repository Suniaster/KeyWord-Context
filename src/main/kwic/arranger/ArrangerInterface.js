// Alfabetica
// Mais aparecem
// menos aparecem
// ordem alfabetica ao contrario

import Phrase from '../../utils/WordsManager/DefaultLineManager';

/**
 * Classe abstrata responsável pela criação da interface de tipos diferentes de organizadores de frases
 */
export default class ArrangerInterface{
  
  /**
   * 
   * @param {array} phrase_list Lista de frases a serem ordenadas
   */
  constructor(phrase_list){

    this.phrase_list = phrase_list;

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === ArrangerInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

  }

  /**
   * 
   * @param {array} phrase_list pega lista de Phrase's e organiza-as
   * @returns Lista organizada 
   */
  arrange(phrase_list = this.phrase_list){}

}
