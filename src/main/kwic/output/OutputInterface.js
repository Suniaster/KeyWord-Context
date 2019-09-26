import Phrase from '../../utils/WordsManager/DefaultLineManager';

/**
 * Classe abstrata responsável pela criação da interface de tipos diferentes de entradas
 */
export default class OutputInterface{
  constructor(){

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === OutputInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

  }

  /**
   * 
   * @param {array} phrases_list array de frases a serem usadas 
   * na criação do output
   */
  generateOutput(phrases_list){}
}

