const request = require('request');


const fetchBreedDescription = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
 

  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const cat = (data[0]);
 
    if (error) {
      callback(error, null);
      return;
    }

    if (cat) {
      callback(null, cat.description);
    } else {
      callback("Couldn't find breed", null);
    }
  });
};

module.exports = { fetchBreedDescription };

