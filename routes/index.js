var express = require('express');
const fetch = require("node-fetch")
var router = express.Router();

const TIME = 10 * 60 * 1000

getNumberWord = (number) => {
  return 
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 20)
}

const generateNumberArray = () => {
  const randomNumbers = Array.from([, , , , ], getRandomNumber)
  // remove duplicates
  if (new Set(randomNumbers).size !== randomNumbers.length) {
    return generateNumberArray()
  }
  return randomNumbers.map(number => {
      return {
        number,
        string: getNumberWord(number)
      }
    })
}

async function pingSelf() {
  await fetch("https://ollie-numbers-game.herokuapp.com/health")
}

setInterval(pingSelf, TIME)


/* GET home page. */
router.get('/', function(req, res, next) {
  const options = generateNumberArray()
  res.render('index', { 
      options,
      main: options[Math.floor(Math.random() * options.length)]
  });
});

router.get('/health', function(req, res, next) {
  res.sendStatus(200)
});

module.exports = router;
