
export default (module_name)=>{
  var text = `
import ShifterInterface from './ShifterInterface';
import Phrase from '../../utils/WordsManager/DefaultLineManager';
/**
 * Classe para leitura da entrada por arquivo.
 * @extends ShifterInterface
 */
export default class `+module_name+` extends ShifterInterface{

  /**
   * 
   * @param {Phrase} phrase Frase a ser usada na geração dos Shifts 
   */
  constructor(phrase){
    super(phrase);
    // Uso facultativo
  }
  
  /**
   * 
   * @param {Phrase} phrase 
   * @returns lista de phrases com os shifts de determinda frase de entrada.
   */
  generateShifts(phrase = this.phrase){
    // Fazer implementação
    return "list_of_shifts";
  }
}
  `;
  return text;
}