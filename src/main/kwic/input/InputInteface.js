var readlineSync = require('readline-sync');

/**
 * Classe abstrata responsável pela criação da interface de tipos diferentes de entradas
 */
export default class InputInterface{
  constructor(){

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === InputInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

    // Requerindo a criação do método read para 
    if(this.read === undefined){
      throw new TypeError("Must create method read.");
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

}
