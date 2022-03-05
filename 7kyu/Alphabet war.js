/** Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!*/

/*

Input is a string of lc characters, no edgecases mentioned
Output is a string with specific words dependent on condition.

Take input and transform it to analyze the individual characters.
depending on what character is, keep score of power.

compare power between two sides to determine winner or other condition.

Grand plan:
Declare dictionary of sorts: object
initialize score keeper

transform input into array,
look at each character and detrmine score, add to score keeper

make a return of string dependent on the score keeper.

*/

function alphabetWar(fight) {
  var powerobj = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };
  var characters = fight.split('');
  var scorekeeper = 0;

  for (var i = 0; i < characters.length; i++) {
    var word = characters[i];
    if (powerobj[word] !== undefined) {
      scorekeeper += powerobj[word];
    }
  }

  if (scorekeeper > 0) {
    return 'Left side wins!';
  } else if (scorekeeper < 0) {
    return 'Right side wins!';
  }

  return "Let's fight again!";
}
