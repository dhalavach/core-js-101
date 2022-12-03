/* eslint-disable */
function evaluateTicTacToePosition(game) {
  const lines = [];
  let winner;

  game.map((row) => lines.push(row.join('')));
  lines.push(game[0][0] + game[1][0] + game[2][0]);
  lines.push(game[0][1] + game[1][1] + game[2][1]);
  lines.push(game[0][2] + game[1][2] + game[2][2]);
  lines.push(game[0][0] + game[1][1] + game[2][2]);
  lines.push(game[0][2] + game[1][1] + game[2][0]);

  for (line of lines) {
    if (line === '000') winner = '0';
    if (line === 'XXX') winner = 'X';
  }
  return winner;
}

const X = 'X';
const O = '0';
const game = [
  [O, X, O],
  [X, X, O],
  [O, X],
];
console.log(evaluateTicTacToePosition(game));
