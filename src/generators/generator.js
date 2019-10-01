var fs = require('fs');

export default (module_, module_name, text, test_text)=>{

  var inputs_path = './src/main/kwic/'+module_+'/';

  try{
    var input_files = fs.readdirSync(inputs_path)
  }
  catch(e){
    console.log("Modulo não encontrado.");
    process.exit();
  }

  var interface_name;
  input_files.forEach((v,i)=>{
    if(v.includes("Interface"))
      interface_name = v.replace(".js", "");
  });

  var path='./src/main/kwic/'+module_+'/'+module_name+'.js';
  var test_path = './src/test/kwic/'+module_+'/'+module_name+'.test.js';
  fs.writeFileSync(path, text);
  fs.writeFileSync(test_path, test_text);

  console.log("-> Generated files at: ".bold);
  console.log("\t -> + ".green + path.green);
  console.log("\t -> + ".green + test_path.green);

  return path;
}
