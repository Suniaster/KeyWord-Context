
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
  var test_text=`
import Phrase from '../../../main/utils/WordsManager/DefaultLineManager';
import myModule from '../../../main/kwic/arranger/`+module_name+`';

describe("`+module_name+`", ()=>{
  var p1 = new Phrase("First phrase testing");
  var p2 = new Phrase("Second phrase that we are testing");
  var instance = new myModule([p1, p2]);


  describe("arrange", ()=>{
    test('returned value is array', () => {
      var is_array = Array.isArray(instance.arrange())

      expect(is_array).toBe(true);
    })
    
  });

})
  `
  return {text, test_text};
}
