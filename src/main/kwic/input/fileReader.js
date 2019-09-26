import InputInterface from './InputInteface';
const fs = require('fs');

/**
 * Classe para leitura da entrada por arquivo.
 * @extends InputInterface
 */
export default class FileReader extends InputInterface{

  constructor(){
    super();
    this.data = '';
  }
  /**
   * @param {string} path_to_file Parametro opcional com caminho para o arquivo a ser lido. caso não seja passado
   * será lido do console o nome do arquivo 
   * @param {string} mensagem Parametro necessário caso caminho para o arquivo não seja passado. Mostra mensagem no console
   * antes de esperar por entrada
   * @param {function(string, string)=>string} readerFunction Receives arg0: path to file and arg1: encoding and returns data from
   * the file
   */
  read(path_to_file = undefined, message = '',readerFunction = fs.readFileSync){
    
    if(path_to_file === undefined){
      if(message.slice(-1) !== "\n"){
        message += "\n";
      }
      path_to_file = FileReader.getConsoleInput(message);
    }
    var r; 
    try{
      r = readerFunction(path_to_file, 'utf8');
    }
    catch(e){
      console.log('Caminho para o arquivo não encontrado, por favor verifique a entrada.');
      process.exit();

    }


    this.data = r;
    return this.data;
  }

  /**
   * 
   * @param {string} read_content 
   * @returns array with the content read separeated
   */
  processData(read_content = this.data){
    return read_content.split("\n");
  }


}