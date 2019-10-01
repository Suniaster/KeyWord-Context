import KwicShifter from '../../../main/kwic/Shifter/KwicShifter';
import Phrase from '../../../main/utils/WordsManager/DefaultLineManager';

describe('KwicShifter', ()=>{
  var phrase_1 = new Phrase("Oi eu sou legal");
  var phrase_2 = new Phrase("Bom dia feliz");
  test("it generate correct shifts", ()=>{
    var shifter = new KwicShifter(phrase_2);

    var s_1 = new Phrase("Bom dia feliz")
    var s_2 = new Phrase("dia feliz Bom")
    var s_3 = new Phrase("feliz Bom dia")

    expect(shifter.generateShifts()).toStrictEqual(
      [s_1, s_2, s_3]
    )
  })

  
})