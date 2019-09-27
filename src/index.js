
import main_kwc from './main/main_kwc';


import FileReader from './main/kwic/input/fileReader';
import KwicShifter from './main/kwic/Shifter/KwicShifter';
import AlphabetizerArranger from './main/kwic/ArrangeManager/AlphabetizerArranger';
import HtmlOutput from './main/kwic/output/HtmlOutput';

import DblpReader from './main/kwic/input/DblpReader';

var textinput = {
  reader_type: DblpReader,
  query: 'parnas',
  shifter_type: KwicShifter,
  arranger_type: AlphabetizerArranger,
  output_type: HtmlOutput
}


main_kwc(textinput)