import i from './main/kwic/input/InputInterface';
import setter from './main/kwic/Setter';
import main_kwc from './main/main_kwc';



async function main(){


  var input = await setter('input');
  var output = await setter('output');
  var shifter = await setter("Shifter");
  var arranger = await setter("ArrangeManager");
  var query = i.getConsoleInput("Digite query a ser procurada\n(enter para ["+input.defaultQuery()+"]) r: ");

  if(query == ""){
    console.log("adwad")
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