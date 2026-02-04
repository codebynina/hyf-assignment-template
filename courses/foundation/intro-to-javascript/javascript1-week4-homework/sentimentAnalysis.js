let positiveWords = ["happy", "awesome", "super", "optimistic", "passionate"];
let negativeWords = [
  "dreadful",
  "arrogant",
  "selfish",
  "pissimistic",
  "grumpy",
];

function sentimentScoreObject(positiveWords, negativeWords, score) {
  let phrase = [
    "I",
    "am",
    "mega",
    "super",
    "awesome",
    "happy",
    "Glad",
    "dreadful",
    "grumpy",
    "Selfish",
  ];
  let positiveWordsFound = [];
  let negativeWordsFound = [];

  for (let wordIndex = 0; wordIndex < phrase.length; wordIndex++) {
    const word = phrase[wordIndex];
    const lowerWord = word.toLowerCase();
    if (positiveWords.includes(lowerWord)) {
      positiveWordsFound.push(lowerWord);
      score += 1;
    } else if (negativeWords.includes(lowerWord)) {
      negativeWordsFound.push(lowerWord);
      score -= 1;
    }
  }
  return {
    positiveWords: positiveWordsFound,
    negativeWords: negativeWordsFound,
    score: score,
  };
}

const result = sentimentScoreObject(positiveWords, negativeWords, 5);
console.log(result);
