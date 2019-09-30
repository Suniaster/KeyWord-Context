import InputInteface from './kwic/input/InputInterface';
import ShifterInterface from './kwic/Shifter/ShifterInterface';
import ArrangerInterface from './kwic/ArrangeManager/ArrangerInterface';
import OutputInterface from './kwic/output/OutputInterface';

import Phrase from './utils/WordsManager/DefaultLineManager';


export default function main_kwc({
      reader_type = InputInteface,
      query =  '',
      shifter_type =  ShifterInterface,
      arranger_type = ArrangerInterface,
      output_type = OutputInterface
    }
  ){
  var reader = new reader_type()
  // Lendo entrada
  reader.read(query, 'Por favor coloque criterio de procura da entrada.');
  
  // Separando strings em cada linha
  var frases = reader.processData();

  // Criando um objeto de frase para cada frase lida
  var lista_frases = []
  for(var i=0; i< frases.length;i+=1){
    var new_p = new Phrase(frases[i], i);
    lista_frases.push(new_p);
  }

  // Criando um objeto para usar como shifter
  var shifter =  new shifter_type();

  var todos_shifts = [];
  lista_frases.forEach(function(value, index){
    // Pega shifts dessa frase
    var new_shifts = shifter.generateShifts(value);

    // Armazena shifts novos
    new_shifts.forEach((v,i)=>{
      todos_shifts.push(v);
    });
  });

  // Criando um objeto organizador
  var arranger = new arranger_type();

  // Organizando os shifts
  todos_shifts = arranger.arrange(todos_shifts);

  // Gerando output
  var outputer = new output_type()
  outputer.generateOutput(todos_shifts)

}