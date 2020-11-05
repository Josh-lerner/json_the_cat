const request = require('request');
const fs = require('fs');
const myLocalPath = './index.html';


// console.log(request)
let myUrl = 'https://api.thecatapi.com/v1/breeds';
let notFound = "Can not find this breed";
const fetchBreedDescription = function(breedName, callback) {
  request(myUrl, (error, response, body) => {
    fs.writeFile(myLocalPath, body, (err) => {
      if (err) throw err;
      const data = JSON.parse(body);
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == breedName) {
          return console.log(data[i].description);
        }
      }
      return console.log(notFound);
    });
  });
};

module.exports = { fetchBreedDescription };
