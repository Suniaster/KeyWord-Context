import ArrangerInterface from './ArrangerInterface';
import Phrase from '../../utils/WordsManager/DefaultLineManager';
/**
 * Classe para leitura da entrada por arquivo.
 * @extends ArrangerInterface
 */
export default class AlphabetizerArranger extends ArrangerInterface{


  arrange(phrase_list = this.phrase_list){
    return phrase_list.sort(this.compare);
  }

  /**
   * 
   * @param {Phrase} a 
   * @param {Phrase} b 
   */
  compare(a, b){
    return a.rm_stp_w.localeCompare(b.rm_stp_w);
  }

}