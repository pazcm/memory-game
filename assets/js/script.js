var cards = [1, 2, 3, 4, 5, 6, 7, 8];

var game = document.getElementById('game');
var board = document.createElement('div');
var startButton = document.getElementById('start');
var displayGame = game.style.display;

var allCards = cards.concat(cards);


board.setAttribute('id', 'board');
board.setAttribute('class', 'box board');
game.insertBefore(board, game.children[3]);

allCards.forEach(item => {
  var card = document.createElement('div');
  card.classList.add('card');
  card.style.border = "thick solid blue";
  board.appendChild(card);
});


startButton.onclick = function(){
    game.style.display ='grid';
    startButton.remove();
    [].forEach.call( document.getElementsByClassName( 'card' ), function ( card, i ) {
        card.textContent = allCards[i];
    });
}