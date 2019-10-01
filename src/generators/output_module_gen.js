export default (module_name)=>{

  var text = `
import OutputInterface from './OutputInterface';
  /**
 * Classe para leitura da entrada por arquivo.
 * @extends OutputInterface
 */
export default class `+ module_name+ ` extends OutputInterface{

  constructor(){
    super();
  }

  /**
   * 
   * @param {array} phrases_list Lista de frases usadas no output
   * @description Cria o output a partir da lista de frases dada como entrada
   */
  generateOutput(phrases_list){
    // Fazer implementação

    return [];
  }

}
  `;

  var test_text = `
import myModule from '../../../main/kwic/output/`+ module_name+ `';
import Phrase from "../../../main/utils/WordsManager/DefaultLineManager";

describe("Output -> `+ module_name+ `", ()=>{
  var p1 = new Phrase("First phrase testing");
  var p2 = new Phrase("Second phrase that we are testing");


  test("doesn't throw error", ()=>{
    var my_t = new myModule();
    var a = ()=>{
      my_t.generateOutput([p1, p2], ()=>{});
    }

    expect(a).not.toThrow();
  })
  // More tests here...
  //
})
  `;
  return {text, test_text};
}


// import OutputInterface from './OutputInterface';

// /**
//  * Classe para leitura da entrada por arquivo.
//  * @extends OutputInterface
//  */
// export default class HtmlOutput extends OutputInterface{

//   constructor(){
//     super();
//   }

//   /**
//    * 
//    * @param {array} phrases_list Lista de frases usadas no output
//    * @description Cria o output a partir da lista de frases dada como entrada
//    */
//   generateOutput(phrases_list){}

// }