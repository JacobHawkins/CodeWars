/**Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org */

String.prototype.toJadenCase = function () {
  var input = this;
  var wordArr = input.split(' ');
  var jaden = '';

  for (var i = 0; i < wordArr.length; i++) {
    var word = wordArr[i];
    var firstLetter = word[0];
    jaden += firstLetter.toUpperCase();

    if (word.length === 1) {
      jaden += ' ';
      continue;
    }

    for (var j = 1; j < word.length; j++) {
      jaden += word[j];
      if (j === word.length - 1 && i < wordArr.length - 1) {
        jaden += ' ';
      }
    }
  }

  return jaden;
};
