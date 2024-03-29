import PositionInterface from '../PositionManger/PositionInterface';
import StopWordsManager from '../../kwic/StopWordManager/DefaultStopWordManager'
/**
 * Classe abstrata responsável pela criação da interface de armazenadores de "linhas" ou seja, coleções de palavras
 * 
 * Classe deve ser incializada com a string contendo a frase e sua psoição.
 */
export default class Phrase{
  /**
   * 
   * @param {string} str_line string que contem a frase.
   * @param {number} position Numero da posição designada a frase
   */
  constructor(str_line='', position=undefined){

    this.str_line = str_line
    this.position = position
    this.rm_stp_w = this.withoutStopWords();
    
  }
  
  getPosition(){
    return 'posição ' + this.getPosition;
  }

  get setOfWords(){
    return this.str_line.split(" ");
  }

  withoutStopWords(stopWord_Object = new StopWordsManager()){
    return stopWord_Object.removeStopWords(this.str_line);
  }

}
