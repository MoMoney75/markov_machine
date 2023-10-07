/** Command-line tool to generate Markov text. */
const fs = require('fs');
const process = require('process');
const argv = process.argv
const markov = require("./markov")

function makeText(){
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText())

}

function readText(path){
    fs.readFile(path, 'utf8', function(e,data){
        if(e){
            console.log(e);
            process.exit(1);
        }
        else{
            makeText(data)
        }
    })
}

async function makeURLText(url) {
    let response
  
    try {
      response = await axios.get(url);
    } catch (err) {
      console.error(`Cannot read URL: ${url}: ${err}`);
      process.exit(1);
    }
    generateText(response.data)
  }

  let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeText(path);
}

else if (method === "url") {
  makeURLText(path);
}

else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}