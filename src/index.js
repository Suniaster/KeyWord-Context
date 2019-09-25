import Phrase from './main/utils/WordsManager/DefaultLineManager';
import KwicShifter from './Shifter/KwicShifter';


var s = new Phrase("Hi i am an apple");

var shifter = new KwicShifter(s);

console.log(shifter.generateShifts())