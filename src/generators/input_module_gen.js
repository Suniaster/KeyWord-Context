
export default (module_name)=>{
  var text = `
import InputInterface from './InputInterface';

/**
 * Classe para leitura da entrada por arquivo.
 * @extends InputInterface
 */
export default class `+ module_name + ` extends InputInterface{

  constructor(){
    super();
    this.data = '';
  }
  /**
   * @param {string} query Parametro passado para utilizar na procura do local onde está o input (uso obrigatorio)
   * @param {string} mensagem Parametro para caso seja necessário pedir informação do terminal (uso facultativo)
   * @param {function(string, string)=>string} readerFunction função auxiliar (uso facultativo)
   */
  read(query = `+ module_name + `.defaultQuery, message = '',readerFunction = undefined){
    // Fazer implementação
  }


  
  /**
   * 
   * @param {string} read_content conteudo lido pela função read
   * @returns array com strings lidas separadas
   */
  processData(read_content = this.data){
    return [];
  }
  
  
  /**
   *  @returns o nome da query padrão dessa classe
   */
  static defaultQuery(){
    // Mudar o nome
    return 'Something';
  }
}
  `;
  return text;
}
