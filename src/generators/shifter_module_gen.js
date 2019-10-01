
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
  var test_text=`
import myModule from '../../../main/kwic/shifter/`+module_name+`';
import Phrase from '../../../main/utils/WordsManager/DefaultLineManager';

describe('`+module_name+`', ()=>{
  var phrase_1 = new Phrase("Oi eu sou legal");
  var phrase_2 = new Phrase("Bom dia feliz");

  test("it generate correct shifts", ()=>{
    var shifter = new myModule(phrase_2);

    var s_1 = new Phrase("Bom dia feliz")
    var s_2 = new Phrase("dia feliz Bom")
    var s_3 = new Phrase("feliz Bom dia")

    expect(shifter.generateShifts()).toStrictEqual(
      [s_1, s_2, s_3]
    )
  })
  
})
  `
  return {text, test_text};
}