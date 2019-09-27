import InputInterface from './InputInteface';
var request = require('sync-request');

/**
 * Classe para leitura da entrada por arquivo.
 * @extends InputInterface
 */
export default class DblpReader extends InputInterface{

  constructor(){
    super();
    this.default_query = 'parnas'
    this.data = '';
  }
  
  
  read(query = this.default_query, message = '', searcher_f= request ){
    var url = 'https://dblp.org/search/publ/api?q='+query+'&format=json'
    
    if(query === undefined){

    }

    var raw_response = searcher_f('GET', url)
    if(raw_response.statusCode != 200){
      console.log('Problema no servidor, tentar novamente mais tarde..');
      process.exit();
    }

    var raw_data = raw_response.body.toString()

    var data = JSON.parse(raw_data)
    /** data é um objeto nesse formato:
     * { result:
        { query: 'parnas*',
          status: { '@code': '200', text: 'OK' },
          time: { '@unit': 'msecs', text: '22.91' },
          completions:
            { '@total': '4', '@computed': '4', '@sent': '4', c: [Array] },
          hits:
            { '@total': '229',
              '@computed': '100',
              '@sent': '30',
              '@first': '0',
              hit: [Array] } } }
    */

    this.data = data;
    return this.data;
  }

  /**
   * 
   * @param {string} read_content 
   * @returns array with the content read separeated
   */
  processData(read_content = this.data){
    var titles = []

    /** cada um dos objetos do array abaixo segue o formato
     * { '@score': '3',
          '@id': '4174549',
          info:
          { authors: [Object],
            title: 'Parnas on Parnas - a life of indecision.',
            venue: 'ACM SIGSOFT Software Engineering Notes',
            volume: '24',
            number: '4',
            pages: '47-49',
            year: '1999',
            type: 'Journal Articles',
            key: 'journals/sigsoft/Parnas99a',
            doi: '10.1145/329155.329163',
            ee: 'https://doi.org/10.1145/329155.329163',
            url: 'https://dblp.org/rec/journals/sigsoft/Parnas99a' },
          url: 'URL#4174549' }
     */
    // pegando os titulos
    read_content.result.hits.hit.forEach((val, index)=>{
      var title = val.info.title;
      titles.push(title);
    })
    return titles;
  }


}