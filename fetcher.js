const request = require('request');
const fs = require('fs')

const args = process.argv.slice(2); //take in argument from command line
const URL = String(args[0]);
const localFilePath = String(args[1]);

let content = 'Some content!'

request(URL, (error, response, body) => {
  fs.writeFile(localFilePath, body, err => {
    fs.stat(localFilePath, (err, stats) => {
      if (err || response.statusCode !== 200) {
        console.error(err)
        return
      }
      console.log(`Downloaded & saved ${stats.size} bytes to ${localFilePath}.`);
      })
    //file written successfully
  })  
});

