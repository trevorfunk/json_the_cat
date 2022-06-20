const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("REQUEST FAILED:", error);
    return;
  }
  const data = JSON.parse(body);
  const cat = (data[0]);

  if (cat) {
    console.log(cat.description);
  } else {
    console.log(`The requested breed ${breed} was not found`);
  }
});