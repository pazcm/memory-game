var cards = [1, 2, 3, 4, 5, 6, 7, 8];

var game = document.getElementById('game');
var board = document.createElement('div');
console.log(board);
var startButton = document.getElementById('start');
var displayGame = game.style.display;

var allCards = cards.concat(cards);
// console.log('allCards is --> ', allCards);
// console.log('cards is --> ', cards);

board.setAttribute('id', 'board');
board.setAttribute('class', 'box board');
game.insertBefore(board, game.children[3]);

for(var i=0; i < allCards.length; i++) {
    // console.log('i is', i);
    var card = document.createElement('div');
    // console.log(card);
    card.classList.add('card');
    card.style.border = 'thick solid blue';
    board.appendChild(card);
}

startButton.onclick = function(){
      game.style.display ='grid';
      startButton.remove();
      // shuffle cards
      allCards.sort(function() { return 0.5 - Math.random() });
      [].forEach.call( document.getElementsByClassName( 'card' ), function ( card, i ) {
            card.textContent = allCards[i];
        });
}


// click play --> Show board (cards flip over) + start count down
// after 5'' show cards back over + start time for playing 50''
