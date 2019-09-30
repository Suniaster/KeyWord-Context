import fileReader from '../input/fileReader';

/**
 * Classe abstrata responsável pela criação da interface de armazenadores de "linhas" ou seja, coleções de palavras
 * 
 * Classe deve ser incializada com a string contendo a frase.
 * Em classes que herdam dessa, deve existir implementação do método:

 */
export default class StopWordsManager{

  constructor(input_type = fileReader, query='./src/main/resources/stop_words.txt'){
    this.input = new input_type()
    
    var file_str = this.input.read(query);

    var words = []
    
    // Separando palavras por linahs e espaços e criando uma lista com essas palavras
    file_str.split("\n").forEach(function (item, index) {
      item.split(" ").forEach(function(item_2, index){
        if(item_2 != "")words.push(item_2);
      })
    });

    this.words = words
  }


  get stopWords(){
    return this.words;
  }

  /**
   * 
   * @param {string} phrase Frase a ser removida as stopwords
   */
  removeStopWords(phrase_string){

    var list = phrase_string.split(" ");
    var new_phrase = [];
    var sw = this.stopWords
    list.forEach((value, index)=>{
      if(! sw.includes(value.toLowerCase())){
        new_phrase.push(value)
      }
    });

    return new_phrase.join(" ");
  }

}
