import OutputInterface from './OutputInterface';
var fs = require('fs');

/**
 * Classe para leitura da entrada por arquivo.
 * @extends OutputInterface
 */
export default class HtmlOutput extends OutputInterface{

  constructor(){
    super();
  }

  generateOutput(phrases_list){
    var textinic = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" type="text/css" href="css/main.css">
      <title>Key Word X Context</title>
    </head>
    <body>
        <h1><span class="blue">&lt;</span>KeyWord<span class="blue">&gt;</span> <span class="yellow">Context</pan></h1>
          
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table class="container">
            <thead>
              <tr>
                <th><h1>Posição</h1></th>
                <th><h1>Frases</h1></th>
              </tr>
            </thead>
            <tbody>
                  `
    var textfim = `
    </tbody>
    </table>
    </div>
    <h2>credits to <a href="https://codepen.io/heypablete/pen/qdIsm" target="_blank">codepen</a></h2>
</body>
</html>`
    var tablebody = ''
    phrases_list.forEach((val, ind)=>{
      tablebody += '<tr>'
      
      tablebody +='<td>' + val.position + '</td>'
      
      tablebody += '<td>'+ val.rm_stp_w + '</td>'
      
      tablebody += '</tr>'
    });

    var data = textinic+tablebody+textfim
    fs.writeFile('./outputs/html/output.html', data, ()=>{});
  }

}