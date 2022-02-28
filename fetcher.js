const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2); //take in argument from command line
const URL = String(args[0]);
const localFilePath = String(args[1]);

request(URL, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error(err);
    return;
  }
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.log(err);
    }
    fs.stat(localFilePath, (err, stats) => {
      if (err) {
        console.log(err);
      }
      console.log(`Downloaded & saved ${stats.size} bytes to ${localFilePath}.`);
    });
    //file written successfully
  });
});

