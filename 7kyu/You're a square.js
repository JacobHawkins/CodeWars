/**A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function (n) {
  if (Math.sign(n) == -1) {
    return false;
    //Check to see if negative number
  } else if (Math.sign(n) == 0 || -0) {
    return true;
    //check to see if 0 or negative zero. Could add a NaN check, but this problem isn't scoping that.
  } else {
    if (Number.isInteger(Math.sqrt(n))) {
      return true;
      //My math is bad. Followed advice that if you check the square root is an integer or not. Pray that math god smiles today.
    } else {
      return false;
    }
  }
};
