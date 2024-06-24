function unroll(squareArray) {
  let input = [...squareArray.map(row => [...row])]; 
  const answer = [];
  
  while (input.length > 0 && input[0].length > 0) {
    answer.push(...input.shift());

    for (let i = 0; i < input.length; i++) {
      answer.push(input[i].pop());
    }

    if (input.length > 0) {
      answer.push(...input.pop().reverse());
    }

    for (let i = input.length - 1; i >= 0; i--) {
      answer.push(input[i].shift());
    }
  }
  
  return answer;
}

module.exports = unroll;
