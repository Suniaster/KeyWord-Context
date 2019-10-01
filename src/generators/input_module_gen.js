
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

  var test_text = `
import myModule from '../../../main/kwic/input/`+ module_name +`';

describe("input -> `+ module_name + `", ()=>{
  var instance = new myModule()
  
  /*****  Read tests  ******/
  describe("read", ()=>{
    
    test("expect read to not throw error", ()=>{
      var f = ()=> {
        instance.read(instance.dedaultQuery, '', ()=>{
          return 'algo foi lido';
        });
      }
      expect(f).not.toThrow()
    })
  
    test("expect read to save data", ()=>{
      instance.read(instance.dedaultQuery, '', ()=>{
        return 'algo foi lido';
      });
  
      expect(typeof instance.data).toBe('string');
    })

  })


  /****** defaultQuery ********/
  describe("defaultQuery", ()=>{

    test("default query exists", ()=>{
      expect(typeof myModule.defaultQuery()).toBe("string");
    })

  })


  /******* Process Data *********/
  describe("processData", ()=>{
    
    test("process data returns array",()=>{
      instance.read(instance.dedaultQuery, '', ()=>{
        return 'algo foi lido';
      });

      var is_array = Array.isArray(instance.processData())

      expect(is_array).toBe(true);
    })
    test("array content is string",()=>{
      var first_element = instance.processData()[0] 
      expect(typeof first_element).toBe("string");
    })

  });

})
  `;
  return {text, test_text};
}
