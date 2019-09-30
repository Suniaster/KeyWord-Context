import ArrangerInterface from './ArrangerInterface';
import Phrase from '../../utils/WordsManager/DefaultLineManager';
/**
 * Classe para leitura da entrada por arquivo.
 * @extends ArrangerInterface
 */
export default class ImportanceArranger extends ArrangerInterface{


  arrange(phrase_list = this.phrase_list){
    // {name: [string], counter: [number]}

    // Criando um histograma de todas as primeiras palavras
    var hist = []
    phrase_list.forEach((val,i)=>{
      var word = val.rm_stp_w.split(" ")[0]
      
      var idx = hist.findIndex(x => x.name == word);
      if(idx == -1){
        hist.push({name: word, counter: 1})
      }
      else{
        hist[idx].counter+=1;
      }
    })

    // Ordenando pelas palavras que mais aparecem
    hist.sort(this.compare_hist)

    // Procurando resultados na entrada
    var sorted = []
    hist.forEach((val, idx)=>{
      var to_insert = phrase_list.filter(x => x.rm_stp_w.split(" ")[0] ==  val.name)
      to_insert.forEach((v)=>{
        sorted.push(v)
      })
    })

    
    return sorted;
  }

  /**
   * 
   * @param {{name: string, counter: number}} a 
   * @param {{name: string, counter: number}} b 
   */
  compare_hist(a, b){
    return  b.counter - a.counter ;
  }

}