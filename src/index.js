
import main from './main/main_kwc';


import FileReader from './main/kwic/input/fileReader';
import KwicShifter from './main/kwic/Shifter/KwicShifter';
import AlphabetizerArranger from './main/kwic/ArrangeManager/AlphabetizerArranger';

var textinput = {
  reader_type: FileReader,
  query: './src/main/resources/papers.txt',
  shifter_type: KwicShifter,
  arranger_type: AlphabetizerArranger
}


main(textinput)