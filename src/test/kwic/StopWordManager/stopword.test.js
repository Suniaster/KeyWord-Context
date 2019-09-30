import StopWordsManager from '../../../main/kwic/StopWordManager/DefaultStopWordManager';


describe('stop word Manager', ()=>{
  var obj = new StopWordsManager()
  test('it creates an instance',()=>{
    expect(obj).toBeDefined();
  });

  test('stop words is not empty', ()=>{
    expect(obj.stopWords).toBeDefined();
  });

  test('remove some letter', ()=>{
    class r{
      read(){
        return 'an\na\n'
      }
    }
    var obj2 = new StopWordsManager(r)


    var str = "Hey man lets eat an apple and a banana";
    str = str.replace(" an ", " ");
    str = str.replace(" a ", " ");
    var str_2 = obj2.removeStopWords(str)

    expect(str_2).toBe(str)
  });

  test("get words from file", ()=>{
    class r{
      read(){
        return 'an\na this\n'
      }
    }
    var obj2 = new StopWordsManager(r)

    expect(obj2.stopWords).toStrictEqual(['an', 'a', 'this'])
  })
})
