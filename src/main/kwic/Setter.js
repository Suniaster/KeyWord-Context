import I from './input/InputInterface';
const fs = require('fs');

export default async (module_name) => {

  var inputs_path = './src/main/kwic/'+module_name+'/';
  try{
    var input_files = fs.readdirSync(inputs_path)
  }
  catch(e){
    console.log("Modulo não encontrado.");
    process.exit();
  }

  var input_names = []
  input_files.forEach((v,i)=>{
    if(v.includes("Set") || v.includes("Interface"))
      return null;
    input_names.push( v.replace(".js", "") );
  });
  var options = "";
  input_names.forEach((v, i)=>{
    if(i%2==0){
      options += "("+i+") "+ v + "\t";
    }
    else{
      options += "("+i+") "+ v + "\n";
    }
  })
  var sel_str = I.getConsoleInput("Selecione qual tipo de "+module_name+" escolhido:\n"+options+"\n");
  var sel = parseInt(sel_str)
  if(sel < 0 || sel > input_names.length-1 || isNaN(sel_str)){
    console.log("Opção inválida. tente novamente");
    process.exit();
  };
  
  var path = './'+module_name+'/'+input_names[sel]+".js";
  var a = await import(path);
  a = a.default
  
  return a
}
