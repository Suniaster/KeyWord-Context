import myModule from '../../../main/kwic/input/fileReader';

describe("input -> FileReader", ()=>{
  var instance = new myModule()
  
  /*****  Read tests  ******/
  describe("read", ()=>{
    
    test("expect read to not throw error", ()=>{
      var f = ()=> {
        instance.read(instance.dedaultQuery, '', ()=>{
          return 'algo foi lido';
        });
      }
      expect(f).not.toThrow()
    })
  
    test("expect read to save data", ()=>{
      instance.read(instance.dedaultQuery, '', ()=>{
        return 'algo foi lido';
      });
  
      expect(typeof instance.data).toBe('string');
    })

  })


  /****** defaultQuery ********/
  describe("defaultQuery", ()=>{

    test("default query exists", ()=>{
      expect(typeof myModule.defaultQuery()).toBe("string");
    })

  })


  /******* Process Data *********/
  describe("processData", ()=>{
    
    test("process data returns array",()=>{
      instance.read(instance.dedaultQuery, '', ()=>{
        return 'algo foi lido\na';
      });

      var is_array = Array.isArray(instance.processData())

      expect(is_array).toBe(true);
    })
    test("array content is string",()=>{
      var first_element = instance.processData()[0] 
      expect(typeof first_element).toBe("string");
    })

  });

})