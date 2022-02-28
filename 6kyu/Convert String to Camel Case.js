/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"*/

function toCamelCase(str) {
  if (str == '') return str;
  let s = str.replace(/-/g, ' ').replace(/_/g, ' ');

  let stringArray = s.split(' ');
  console.log(stringArray);

  let i = 1;
  let word = stringArray[0];
  let letter = word.split('');
  let first = letter[0];

  while (i < stringArray.length) {
    let change = first.toUpperCase();
    word = stringArray[i];
    letter = word.split('');
    first = letter[0];
    change = first.toUpperCase();
    letter[0] = change;
    word = letter.join('');
    stringArray[i] = word;
    i++;
  }

  return stringArray.join('');
}
