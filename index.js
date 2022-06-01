function parseText(text) {
    return text.toLowerCase().replace(/[^a-z\s]/ig, "").split(' ');
}

function generateWordpairs(corpus) {
    
    let wordpairs = {};

   
    let words = parseText(corpus);

   
    for (let i = 0; i < words.length - 1; i++) {
      let currentWord = words[i];
      let nextWord = words[i+1];

      if (wordpairs[currentWord]) {
        
        wordpairs[currentWord].push(nextWord);
      }
      else {
        wordpairs[currentWord] = [nextWord];
      }
    }

    return wordpairs;
}

function randomlyChoose(wordArray) {
  let index = Math.floor(wordArray.length * Math.random());
  return wordArray[index];
}

function writeLine(corpus, min_length) {
    let words = parseText(corpus);
    let wordpairs = generateWordpairs(corpus);
    let word = randomlyChoose(words);
    let phrase = [word]; 

    while(wordpairs[word]) {
        let next_words = wordpairs[word];
        word = randomlyChoose(next_words);
        phrase.push(word);

        if(phrase.length > min_length) {
            break;
        }
    }

    return phrase.join(' ');
}

function generatePoem(corpus, lines) {
    for(let i = 0; i < lines; i++) {
        let l = Math.floor(Math.random() * 10) + 1;
        console.log(writeLine(corpus, l))
    }
}