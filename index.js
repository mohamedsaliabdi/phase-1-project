// script.js
document.addEventListener('DOMContentLoaded', () => {
  const chessboard = document.getElementById('chessboard');

  const createChessboard = () => {
      for (let row = 0; row < 8; row++) {
          for (let col = 0; col < 8; col++) {
              const tile = document.createElement('div');
              tile.classList.add('tile');
              tile.dataset.row = row;
              tile.dataset.col = col;
              tile.dataset.color = (row + col) % 2 === 0 ? 'white' : 'black';
              chessboard.appendChild(tile);
          }
      }
  };

  const placePieces = () => {
      const initialPositions = [
          { row: 0, col: 4, piece: '♚' },
          { row: 7, col: 4, piece: '♔' },
      ];

      initialPositions.forEach(({ row, col, piece }) => {
          const tile = document.querySelector(`.tile[data-row='${row}'][data-col='${col}']`);
          tile.textContent = piece;
          tile.classList.add('piece');
      });
  };

  createChessboard();
  placePieces();
});
