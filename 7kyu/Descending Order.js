/**Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

/*
input: any non-negative integer
0,1,2,3.3

output:largest in front
3.3,2,1,0

transform input into string
transform string into an array.
sort it.
join it
number it
return it
*/

function descendingOrder(n) {
  var ordered = '';
  var string = '' + n;

  for (var i = 0; i < string.length; i++) {
    if (string[i] == 9) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 8) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 7) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 6) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 5) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 4) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 3) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 2) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 1) {
      ordered += string[i];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 0) {
      ordered += string[i];
    }
  }

  return Number.parseInt(ordered);
}
