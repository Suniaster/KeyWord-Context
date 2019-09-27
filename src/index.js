

//Importando main
import main_kwc from './main/main_kwc';

// Importando readers
import FileReader from './main/kwic/input/fileReader';
import DblpReader from './main/kwic/input/DblpReader';

// Importando Shifters
import KwicShifter from './main/kwic/Shifter/KwicShifter';

// Importando arrangers
import AlphabetizerArranger from './main/kwic/ArrangeManager/AlphabetizerArranger';
import ImportanceArranger from './main/kwic/ArrangeManager/ImportanceArranger';

// Importando outputers
import HtmlOutput from './main/kwic/output/HtmlOutput';
import Phrase from './main/utils/WordsManager/DefaultLineManager';


function main(){

  var textinput = {
    reader_type: FileReader,
    query: './src/main/resources/papers.txt',
    shifter_type: KwicShifter,
    arranger_type: ImportanceArranger,
    output_type: HtmlOutput
  }
  
  
  main_kwc(textinput)
}

main();


/**
 * path_file: ./src/main/resources/papers.txt
 */