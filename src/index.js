import FileReader from "./input/fileReader";
import StopWordsManager from './LineManager/StopWordManager/DefaultStopWordManager'
import Phrase from './LineManager/WordsManager/DefaultLineManager';
import KwicShifter from './Shifter/KwicShifter';
/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @since      x.x.x
 * @deprecated x.x.x Use new_function_name() instead.
 * @access     private
 *
 * @class
 * @augments parent
 * @mixes    mixin
 *
 * @alias    realName
 * @memberof namespace
 *
 * @see  Function/class relied on
 * @link URL
 * @global
 *
 * @fires   eventName
 * @fires   className#eventName
 * @listens event:eventName
 * @listens className~event:eventName
 *
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @yield {type} Yielded value description.
 *
 * @return {string} Return value description.
 */
function testing(x, y){
  return "aaaa";
}


var sw = new StopWordsManager();

var s = new Phrase("Hi i am an apple");

var shifter = new KwicShifter(s);

console.log(shifter.generateShifts())