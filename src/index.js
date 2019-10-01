import i from './main/kwic/input/InputInterface';
import setter from './main/kwic/Setter';
import main_kwc from './main/main_kwc';



async function main(){

  // var gerar_fonte = i.getConsoleInput("Deseja gerar codigo fonte do codigo criado? (y/n): ");

  // if(gerar_fonte == "y")gerar_fonte = true;
  // else gerar_fonte = false
  // var name_dist = undefined;
  // if(gerar_fonte) name_dist = i.getConsoleInput("Digite o nome do criado")


  var input = await setter('input');
  var output = await setter('output');
  var shifter = await setter("shifter");
  var arranger = await setter("arranger");
  var query = i.getConsoleInput("Digite query a ser procurada\n(enter para ["+input.defaultQuery()+"]) r: ");

  if(query == ""){
    console.log("Usando query padrão")
    query = input.defaultQuery();
  }

  var textinput = {
    reader_type: input,
    query: query,
    shifter_type: shifter,
    arranger_type: arranger,
    output_type: output
  }
  
  
  main_kwc(textinput)
}

main();


/**
 * path_file: ./src/main/resources/papers.txt
 * query: "parnas"
 */