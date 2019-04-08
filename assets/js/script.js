var cards = [1, 2, 3, 4, 5, 6, 7, 8];

var game = document.getElementById('game');
var board = document.createElement('div');
// console.log(board);
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
    var div = document.createElement('div');
    // console.log(card);
    div.classList.add('card');
    // div.getElementsByClassName('card').innerHTML;
    // console.log(div);
    div.style.border = 'thick solid blue';
    board.appendChild(div);

    // var number = document.createElement("b");
    // div.appendChild(number);
    // number.classList.add("num");
    // console.log(number);

}

startButton.onclick = function(){
      game.style.display ='grid';
      startButton.remove();
      // shuffle cards
      allCards.sort(function() { return 0.5 - Math.random() });
      [].forEach.call( document.getElementsByClassName( 'card' ), function ( card, i ) {
            card.textContent = allCards[i];
        });

    // let list = document.getElementsByClassName("card");
};

//------Game logic

// To do:
// click play --> Show board (cards flip over)
// after 5'' show cards back over
// start time for playing 50''



// select two cards and compare

let count = 0;
let click1 = '';
let click2 = '';
let target1 = null;


board.addEventListener('click', function(s) {
    var pick = s.target;

    // get div content
    pick.getElementsByClassName('card').textContent;
    console.log(pick);

    if (pick.classList === 'card' || pick === target1) {
        return;
    }

    if (count < 2) {
    count++;
        if (count === 1) {
            click1 = pick;
            // console.log(click1)
            pick.classList.add ('select');
        } else {
            click2 = pick;
            pick.classList.add ('select');
        }

        if (click1 !== '' && click2 !== '') {
          // if the first choice matches the second -> match
          if (click1.textContent === click2.textContent) {
            // run the match function
            match();
          }
        }
        // avoid to select same card twice, set previous target to picked
        target1 = pick;
        }
    });


// add match

const match = () => {
  var select = document.querySelectorAll('.select');
  select.forEach(card => {
    card.classList.add('match');
  });
};

