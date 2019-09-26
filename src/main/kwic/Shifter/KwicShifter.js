import ShifterInterface from './ShifterInterface';
import Phrase from '../../utils/WordsManager/DefaultLineManager';
/**
 * Classe para leitura da entrada por arquivo.
 * @extends ShifterInterface
 */
export default class KwicShifter extends ShifterInterface{

  /**
   * 
   * @param {Phrase} phrase 
   * @returns lista de phrases com os shifts de determinda frase de entrada.
   */
  generateShifts(phrase = this.phrase){
    
    var original_f = phrase.rm_stp_w.split(" ");

    var list_of_shifts = []
    for(var i = 0; i < original_f.length; i+=1){
      var new_shift = [];
      for(var j = 0; j < original_f.length; j+=1){
        new_shift.push(
          original_f[ (i+j) % original_f.length]
        );
      }

      list_of_shifts.push(new Phrase(new_shift.join(" "), phrase.position));
    }

    return list_of_shifts;
  }
}