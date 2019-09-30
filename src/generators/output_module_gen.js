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
  return text;
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