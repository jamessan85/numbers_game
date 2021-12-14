var express = require('express');
var router = express.Router();

getNumberWord = (number) => {
  let word = ""
  switch (number) {
    case 0:
      word = "Zero"
      break;
    case 1:
      word = "One"
      break;
    case 2:
      word = "Two"
      break;
    case 3:
      word = "Three"
      break;
    case 4:
      word = "Four"
      break;
    case 5:
      word = "Five"
      break;
    case 6:
      word = "Six"
      break;
    case 7:
      word = "Seven"
      break;
    case 8:
      word = "Eight"
      break;
    case 9:
      word = "Nine"
      break;
    default:
      break;
  }
  return word
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10)
}

const generateNumberArray = () => {
  const randomNumbers = Array.from([, , , , , ,], getRandomNumber)
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


/* GET home page. */
router.get('/', function(req, res, next) {
  const options = generateNumberArray()
  res.render('index', { 
      options,
      main: options[Math.floor(Math.random() * options.length)]
  });
});

module.exports = router;
