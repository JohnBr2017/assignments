let str = ")((("




console.log(including(str));


// Given a string including parentheses, write a function that returns true if every opening
//  parenthesis has a closing parenthesis.

// "()()" // -> true
// "(())" // -> true
// "()))" // -> false
// Also, every closing parentheses needs an opening partner before it.

// ")()(" // -> false
// "())(" // -> false