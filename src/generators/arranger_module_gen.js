
export default (module_name)=>{
  var text = `
import ArrangerInterface from './ArrangerInterface';
import Phrase from '../../utils/WordsManager/DefaultLineManager';
/**
 * Classe para leitura da entrada por arquivo.
 * @extends ArrangerInterface
 */
export default class `+module_name+` extends ArrangerInterface{

  /**
   * 
   * @param {array} phrase_list Lista de frases a serem ordenadas
   */
  constructor(phrase_list){
    super(phrase_list);
  }
  /**
   * 
   * @param {array} phrase_list array com frases para serem organizadas
   * @returns lista de entrada ordenada de certa forma
   */
  arrange(phrase_list = this.phrase_list){
    // Fazer implementação.
    return phrase_list;
  }

}
  `;
  return text;
}
