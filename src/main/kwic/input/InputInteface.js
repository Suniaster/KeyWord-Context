var readlineSync = require('readline-sync');
const fs = require('fs');
/**
 * Classe abstrata responsável pela criação da interface de tipos diferentes de entradas
 */
export default class InputInterface{
  constructor(){

    this.default_query;

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === InputInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

    // Requerindo a criação do método read para 
    if(this.read === undefined){
      throw new TypeError("Must create method read.");
    }

    if(this.processData === undefined){
      throw new TypeError("Must create method processData.");
    }

  }


  /**
   * 
   * @param {string} message mensagem escrita no console
   * @returns {string} resposta do console 
   */
  static getConsoleInput(message, readline = readlineSync){
    var resp = '';
    resp = readline.question(message);

    return resp;
  }

  /**
   * 
   * @param {string} query parametro de procura para o input 
   * @param {string} message mensagem no console caso seja passado 'undefined' como query 
   * @param {*} readerFunction 
   * @returns string contendo a conteudo que foi lido
   */
  read(query = this.default_query, message = '', auxiliary_f = ()=>{}){}
  
  /**
   * 
   * @param {*} read_content conteudo a ser processado de alguma forma 
   * deve ter o mesmo formato de this.data
   * @returns array with the content read separeated
   */
  processData(read_content = this.data){}
}
