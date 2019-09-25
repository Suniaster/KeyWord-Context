import ShifterInterface from './ShifterInterface';
import Phrase from '../LineManager/WordsManager/DefaultLineManager';
/**
 * Classe para leitura da entrada por arquivo.
 * @extends ShifterInterface
 */
export default class KwicShifter extends ShifterInterface{


  generateShifts(phrase_str = this.phrase.rm_stp_w){
    var original_f = phrase_str.split(" ");

    var list_of_shifts = []
    for(var i = 0; i < original_f.length; i+=1){
      var new_shift = [];
      for(var j = 0; j < original_f.length; j+=1){
        new_shift.push(
          original_f[(i+j)%original_f.length]
        );
      }

      list_of_shifts.push(new_shift);
    }

    return list_of_shifts;
  }
}