import output_generator from './output_module_gen';
import input_generator from './input_module_gen';
import shifter_gen from './shifter_module_gen';
import arranger_gen from './arranger_module_gen';

import generator from './generator';

var colors = require('colors');

var module_type = process.argv[2];
var module_name = process.argv[3];
var text_gen;

if(module_type.toLocaleLowerCase() == "output"){
  text_gen = output_generator
}
else if(module_type.toLocaleLowerCase() == "input"){
  text_gen = input_generator
}
else if(module_type.toLocaleLowerCase()== "shifter"){
  text_gen = shifter_gen
}
else if(module_type.toLocaleLowerCase()== "arranger"){
  text_gen = arranger_gen
}
else{
  console.log("Tipo de módulo invalido.");
  process.exit(1);
}

var {text, test_text} = text_gen(module_name);
generator(module_type, module_name, text, test_text);


