const fetch = require("node-fetch")

function randomNumberGenerator() {
    return Math.ceil((Math.random() *100))
}

const toUpperCase = (string) => {
    return string.toUpperCase()
}

function lastLetter(string) {
    return string.slice(-1)
}

function concatStrings(a,b) {
    return a+b
}

function fetchDog() {
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
  }



console.log(fetchDog())


module.exports = {
    randomNumberGenerator,
    toUpperCase,
    lastLetter,
    concatStrings,
    fetchDog
};

// const firstFunction = (str) => str.toUpperCase();
// const secondFunction = (str) =>  str.charAt(0);
// const thirdFunction = (str1, str2) => str1.concat(str2);

// module.exports = {
//   firstFunction,
//   secondFunction,
//   thirdFunction,
// };