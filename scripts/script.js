// namespace declaration
const tarot = {};

// number of cards to draw
tarot.num = 3;

// category selection
tarot.question = '';

tarot.cardMeaning = {

    'AC': 'Ace of Clubs: Wealth, prosperity, unexpected money/gain. However, in a difficult spread, this money may disappear almost as quickly as it appears.',

    '2C': '2 of Clubs: Obstacles to success; malicious gossip.',

    '3C': '3 of Clubs: Love and happiness; successful marriage; a favorable long-term proposition. A second chance, particularly in an economical sense.',

    '4C': '4 of Clubs: Beware of dishonesty or deceit; avoid blind acceptance of others at this time.',

    '5C': '5 of Clubs: New friendships, alliances are made.',

    '6C': '6 of Clubs: Financial aid or success.',

    '7C': '7 of Clubs: Business success, although there may be problems in love. A change in business that may have been expected or earned, such as a promotion.',

    '8C': '8 of Clubs: Work/business problems that may have to do with jealousy. This is generally thought to be quite unfavorable.',

    '9C': '9 of Clubs: Achievement; sometimes a wealthy marriage or a sudden windfall.',

    '0C': '10 of Clubs: Business success. Good luck with money. A trip taken now may result in a new friend or love interest.',

    'JC': 'Jack of Clubs: A dark-haired or fiery youth. Popular youth who is good-hearted and playful. Can also indicate an admirer.',

    'QC': 'Queen of Clubs: Dark-haired, confident woman; or a woman with Fire predominating in her chart. She may give you good advice.',

    'KC': 'King of Clubs: Dark-haired, kind-hearted man; or a man with Fire predominating in his chart. A generous, spirited man.',

    'AD': 'Ace of Diamonds: Change; a message, often about money, and usually good news.',

    '2D': '2 of Diamonds: A business partnership; a change in relationship; gossip.',

    '3D': '3 of Diamonds: A legal letter. Be tactful with others in order to avoid disputes.',

    '4D': '4 of Diamonds: Financial upswing; an older person may give good advice.',

    '5D': '5 of Diamonds: Happiness and success. A change for the better. A birth, or good news for a child. A good time to start new projects.',

    '6D': '6 of Diamonds: Relationship problems, arguments. Separation.',

    '7D': '7 of Diamonds: An argument concerning finances, or on the job. Generally expected to be resolved happily.',

    '8D': '8 of Diamonds: New job; change in job situation. The young or the old may find love on a trip.',

    '9D': '9 of Diamonds: A new business deal; travel; restlessness; a change of residence.',

    '0D': '10 of Diamonds: A change in financial status, often for the better.',

    'JD': 'Jack of Diamonds: A youth, possibly in uniform. Or, a jealous person who may be unreliable. A person who brings news, generally negative, but relatively minor.',

    'QD': 'Queen of Diamonds: Fair-haired woman; or a woman with Earth predominating in her chart. A gossip.',

    'KD': 'King of Diamonds: Fair-haired or graying man, or a man with Earth predominating in his chart. A man of authority, status, or influence.',

    'AH': 'Ace of Hearts: Love and happiness. The home, a love letter. This card is a particularly favorable card that indicates troubles and problems lifting.',

    '2H': '2 of Hearts: A warm partnership or engagement. This is a very favorable card that indicates strength and support coming from a partner.',

    '3H': '3 of Hearts: Love and happiness when the entire spread is generally favorable. In a difficult spread, this can indicate emotional problems and an inability to decide who to love.',

    '4H': '4 of Hearts: Travel, change of home or business.',

    '5H': '5 of Hearts: Jealousy; some ill-will from people around you.',

    '6H': '6 of Hearts: A sudden wave of good luck. Someone takes care of you, takes warm interest in you.',

    '7H': '7 of Hearts: Someone whose interest in you is unreliable; someone with fickle affections for you. This card can indicate lovesickness.',

    '8H': '8 of Hearts: Unexpected gift or visit; an invitation to a party.',

    '9H': '9 of Hearts: The card of wishes. A wish/dream fulfilled. Look to the card just preceding this one to determine what the querent desires.',

    '0H': '10 of Hearts: Good luck, success. This is an important card that suggests good fortune after difficulty.',

    'JH': 'Jack of Hearts: A warm-hearted friend. A fair-haired youth; or a young person with Water signs predominating in his or her chart. Often this points to a younger admirer.',

    'QH': 'Queen of Hearts: A fair-haired woman with a good nature; or a woman with Water signs predominating in her chart. Kind advice. Affectionate, caring woman. Sometimes, this card can indicate the mother or a mother figure.',

    'KH': 'King of Hearts: A fair-haired man with a good nature; or a man with Water signs predominating in his chart. Fair, helpful advice. Affectionate, caring man. This man helps you out without much talk. His actions reveal his kindness and concern.',

    'AS': 'Ace of Spades: Misfortune; sometimes associated with death or, more often, a difficult ending.',

    '2S': '2 of Spades: Breaks in relationships; deceit. A break in an important process in the querent’s life. If the question concerns a particular romantic interest, this is considered a warning card – infidelity or separation is quite likely.',

    '3S': '3 of Spades: Breaks in relationships. Sometimes indicates that a third person is breaking into a relationship somehow.',

    '4S': '4 of Spades: Small worries, problems. Financial difficulties, personal lows.',

    '5S': '5 of Spades: Opposition and obstacles that are temporary; a blessing in disguise. Sometimes indicates a negative or depressed person.',

    '6S': '6 of Spades: Small changes and improvements.',

    '7S': '7 of Spades: Advice that is best not taken; loss. There is some obstacle to success, and this indicates that obstacles may be coming from within the querent.',

    '8S': '8 of Spades: Temptation, misfortune, danger, upsets.',

    '9S': '9 of Spades: Illness, accident, bad luck. The querent is at his/her personal low.',

    '0S': '10 of Spades: Worry; bad news.',

    'JS': 'Jack of Spades: A youth who is hostile or jealous.',

    'QS': 'Queen of Spades: Widowed or divorced woman; or a woman with Air predominating in her chart.',

    'KS': 'King of Spades: Dark-haired man; or a man with Air predominating in his chart. An ambitious man, perhaps self-serving.',

};

tarot.positionMeaning = {
  '3': {
    'bad luck': {
      '0': 'The nature of your problem',
      '1': 'The cause of your problem',
      '2': 'The solution to your problem',
    },
    'careers': {
      '0': 'What will help you',
      '1': 'What will hinder you',
      '2': 'Your unrealised potential',
    },
    'fate': {
      '0': 'Your past',
      '1': 'Your present',
      '2': 'Your future',
    },
    'insight': {
      '0': 'What you think',
      '1': 'What you feel',
      '2': 'What you do',
    },
    'love': {
      '0': 'You',
      '1': 'The other person',
      '2': 'Your relationship',
    },
    'money': {
      '0': 'The best bet',
      '1': 'The safest bet',
      '2': 'The worst bet',
    },
    'relationships': {
      '0': 'What brings you together',
      '1': 'What pulls you apart',
      '2': 'What needs your attention',
    },
  },
};

// in case of borked API server, break glass
tarot.failDeck = [

  {
    code: 'AC',
    suit: 'clubs',
    value: 'ace',
  },

  {
    code: '2C',
    suit: 'clubs',
    value: '2',
  },

  {
    code: '3C',
    suit: 'clubs',
    value: '3',
  },

  {
    code: '4C',
    suit: 'clubs',
    value: '4',
  },

  {
    code: '5C',
    suit: 'clubs',
    value: '5',
  },

  {
    code: '6C',
    suit: 'clubs',
    value: '6',
  },

  {
    code: '7C',
    suit: 'clubs',
    value: '7',
  },

  {
    code: '9C',
    suit: 'clubs',
    value: '9',
  },

  {
    code: '9C',
    suit: 'clubs',
    value: '9',
  },

  {
    code: '0C',
    suit: 'clubs',
    value: '10',
  },

  {
    code: 'JC',
    suit: 'clubs',
    value: 'jack',
  },

  {
    code: 'QC',
    suit: 'clubs',
    value: 'queen',
  },

  {
    code: 'KC',
    suit: 'clubs',
    value: 'king',
  },

  {
    code: 'AD',
    suit: 'diamonds',
    value: 'ace',
  },

  {
    code: '2D',
    suit: 'diamonds',
    value: '2',
  },

  {
    code: '3D',
    suit: 'diamonds',
    value: '3',
  },

  {
    code: '4D',
    suit: 'diamonds',
    value: '4',
  },

  {
    code: '5D',
    suit: 'diamonds',
    value: '5',
  },

  {
    code: '6D',
    suit: 'diamonds',
    value: '6',
  },

  {
    code: '7D',
    suit: 'diamonds',
    value: '7',
  },

  {
    code: '9D',
    suit: 'diamonds',
    value: '9',
  },

  {
    code: '9D',
    suit: 'diamonds',
    value: '9',
  },

  {
    code: '0D',
    suit: 'diamonds',
    value: '10',
  },

  {
    code: 'JD',
    suit: 'diamonds',
    value: 'jack',
  },

  {
    code: 'QD',
    suit: 'diamonds',
    value: 'queen',
  },

  {
    code: 'KD',
    suit: 'diamonds',
    value: 'king',
  },

  {
    code: 'AH',
    suit: 'hearts',
    value: 'ace',
  },

  {
    code: '2H',
    suit: 'hearts',
    value: '2',
  },

  {
    code: '3H',
    suit: 'hearts',
    value: '3',
  },

  {
    code: '4H',
    suit: 'hearts',
    value: '4',
  },

  {
    code: '5H',
    suit: 'hearts',
    value: '5',
  },

  {
    code: '6H',
    suit: 'hearts',
    value: '6',
  },

  {
    code: '7H',
    suit: 'hearts',
    value: '7',
  },

  {
    code: '9H',
    suit: 'hearts',
    value: '9',
  },

  {
    code: '9H',
    suit: 'hearts',
    value: '9',
  },

  {
    code: '0H',
    suit: 'hearts',
    value: '10',
  },

  {
    code: 'JH',
    suit: 'hearts',
    value: 'jack',
  },

  {
    code: 'QH',
    suit: 'hearts',
    value: 'queen',
  },

  {
    code: 'KH',
    suit: 'hearts',
    value: 'king',
  },

  {
    code: 'AS',
    suit: 'spades',
    value: 'ace',
  },

  {
    code: '2S',
    suit: 'spades',
    value: '2',
  },

  {
    code: '3S',
    suit: 'spades',
    value: '3',
  },

  {
    code: '4S',
    suit: 'spades',
    value: '4',
  },

  {
    code: '5S',
    suit: 'spades',
    value: '5',
  },

  {
    code: '6S',
    suit: 'spades',
    value: '6',
  },

  {
    code: '7S',
    suit: 'spades',
    value: '7',
  },

  {
    code: '9S',
    suit: 'spades',
    value: '9',
  },

  {
    code: '9S',
    suit: 'spades',
    value: '9',
  },

  {
    code: '0S',
    suit: 'spades',
    value: '10',
  },

  {
    code: 'JS',
    suit: 'spades',
    value: 'jack',
  },

  {
    code: 'QS',
    suit: 'spades',
    value: 'queen',
  },

  {
    code: 'KS',
    suit: 'spades',
    value: 'king',
  },
];

// listen for submit event
$('form').on('submit', function(e) {

  // prevent page reload
  e.preventDefault();

  // validate, save & display name input
  tarot.querent = $('input').val();
  if (tarot.querent === ''){

    // demand satisfaction
    $('input').toggleClass('insist');
  } else {

    // display username
    $('#querent').text(`Hello, ${tarot.querent}! `);

    // hide input
    $('input').hide();

    // validate category selection
    tarot.question = $('#category option:selected').val();

    // display category
    $('#question').text(`The cards will show you the secrets of ${tarot.question}.`);

    // hide select
    $('select').hide();

    // hide submit
    $('#submit').hide();
  };
  // end if/else

  // reset action
  $('#reset').on('click', function(){
    location.reload(true);
  });

  tarot.getDeck();

});
// end event listener

// get a deck of shuffled cards
tarot.getDeck = function(){

  // empty array for deck ID
  tarot.deckID = [];

  // empty object for card data
  tarot.drawCards = {};

  // get shuffled deck and draw (num) cards
  return $.ajax({
    dataType: 'json',
    method: 'GET',
    url: `https://deckofcardsapi.com/api/deck/new/draw/?count=${tarot.num}`,
  })

  // fallback if the #$@☠&%! server is still down
  .fail(tarot.error = function(){

    // empty array for cards
    tarot.errorCards = [];

    // pull random cards from local data
    i = 0;
    while (i < tarot.num){
      tarot.errorCards.push(tarot.failDeck[Math.floor(Math.random()*tarot.failDeck.length)]);
      i++;
    }

    // assign cards to existing object
    Object.assign(tarot.drawCards, tarot.errorCards);

    // call spread
    tarot.spread();
  })

  // assign returned data to placeholders
  .done(tarot.data = function(res){
    tarot.deckID.push(res.deck_id);
    Object.assign(tarot.drawCards, res.cards);

    // call spread
    tarot.spread();
  })

};
// end tarot.getDeck

// assign cards to layout
tarot.spread = function(){

  // make sure table is clear
  $('#spread').empty();

  // match returned cards to local definitions
  // lay cards on page
  for (i = 0; i < tarot.num; i++){

    tarot.cardCode = tarot.drawCards[i].code;
    tarot.cardSuit = tarot.drawCards[i].suit;
    tarot.cardValue = tarot.drawCards[i].value;

    if (tarot.drawCards[i].image !== undefined){
      tarot.cardImage = `http://deckofcardsapi.com/static/img/${tarot.cardCode}.png`
    } else {
      tarot.cardImage = `images/PNG-cards-1.3/${tarot.cardValue}_of_${tarot.cardSuit}.png`;
    };

    tarot.cardDesc = tarot.cardMeaning[`${tarot.cardCode}`];

    tarot.positionDesc = tarot.positionMeaning[`${tarot.num}`][`${tarot.question}`][i];

    $('#spread').append(
      `<figure class="card" id="card${i}">
        <img src="${tarot.cardImage}" alt="The ${tarot.cardValue} of ${tarot.cardSuit}"/>
        <figcaption class="card">
          <p>${tarot.cardDesc}</p>
        </figcaption>
      </figure>`
    )
    // end #spread.append

    $(`#card${i}`).prepend(`<h2>${tarot.positionDesc}</h2>`)

  };
  // end for loop
}
// end tarot.spread

// initiate sequence
tarot.init = function(){};

// document ready
$(tarot.init);
