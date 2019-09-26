import Phrase from '../../utils/WordsManager/DefaultLineManager';

/**
 * Classe abstrata responsável pela criação da interface dos Shifter do problemas de KeyWord
 * 
 * Classe deve ser incializada com o.
 * Em classes que herdam dessa, deve existir implementação do método:
 * 
 */
export default class ShifterInterface{
  /**
   * 
   * @param {Phrase} phrase Frase a ser usada na geração dos Shifts 
   */
  constructor(phrase){

    this.phrase = phrase

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === ShifterInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

    // Requerindo a criação do método read para 
    if(this.generateShifts === undefined){
      throw new TypeError("Must create method read.");
    }

  }


}
