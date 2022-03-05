/**The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

function openOrSenior(data) {
  let list = data;
  let i = 0;
  let p = 0;
  const A = 0;
  const B = 1;
  let output = [];

  //Declared variables and lists above

  while (i < list.length) {
    let person = list[i];
    //wanted to capture just the info of a single person here in this declaration. repeated in a while loop to initialize each person.

    if (person[A] >= 55 && person[B] > 7) {
      output.push('Senior');
    }
    //First If statement solves the issue of finding if they are a senior or not based on problem parameters
    else {
      output.push('Open');
    }
    //else handles all other cases
    i++;
    //increment i so while loop will finish
  }

  return output;
  //made a mistake of doing console.log and forgot to actually put the return here. need to remember.
}
