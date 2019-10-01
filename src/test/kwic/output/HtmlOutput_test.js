import HtmlOutput from '../../../main/kwic/output/HtmlOutput';
import Phrase from "../../../main/utils/WordsManager/DefaultLineManager";

describe("Output -> HtmlOutput", ()=>{
  var p1 = new Phrase("First phrase testing");
  var p2 = new Phrase("Second phrase that we are testing");


  test("doesn't throw error", ()=>{
    var my_t = new HtmlOutput();
    var a = ()=>{
      my_t.generateOutput([p1, p2], ()=>{});
    }

    expect(a).not.toThrow();
  })
  // More tests here...
  //
})