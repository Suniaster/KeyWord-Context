import Phrase from '../../../main/utils/WordsManager/DefaultLineManager';
import myModule from '../../../main/kwic/arranger/AlphabetizerArranger';

describe("AlphabetizerArranger", ()=>{
  var p1 = new Phrase("First phrase testing");
  var p2 = new Phrase("Second phrase that we are testing");
  var instance = new myModule([p1, p2]);


  describe("arrange", ()=>{
    test('returned value is array', () => {
      var is_array = Array.isArray(instance.arrange())

      expect(is_array).toBe(true);
    })
    
  });

})