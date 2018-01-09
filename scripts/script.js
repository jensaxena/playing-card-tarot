// namespace declaration
const tarot = {};

// number of cards to draw
tarot.num = 3;

// category selection
tarot.question = '';

tarot.cardMeaning = {

  'AC': 'Ace of Clubs: Wealth, fame, prosperity. These blessings may be at risk of disappearing as fast as they come in.',

  '2C': '2 of Clubs: Bad luck, obstacles, malicious gossip. Do not rely on friends and family, they will let you down.',

  '3C': '3 of Clubs: Second chances, in money or in love. A successful marriage or a favorable long-term proposition.',

  '4C': '4 of Clubs: Misfortune, failure, dishonesty or deceit. Do not trust blindly, others may sabotage or betray you.',

  '5C': '5 of Clubs: New marriages, friendships or partnerships. The creation of long-standing alliances.',

  '6C': '6 of Clubs: Partnership, financial aid. Shared successes based on mutual goals and friendship.',

  '7C': '7 of Clubs: Success and good luck in business, but with a risk of interference from someone of the opposite sex.',

  '8C': '8 of Clubs: Desperation, an urgent need for money. Business problems may have to do with jealousy.',

  '9C': '9 of Clubs: Trouble, arguments with good friends. Loss of a relationship, a dispute that will remain unresolved.',

  '0C': '10 of Clubs: Good fortune in money. Taking a long and fun-filled journey may result in a new friend or lover.',

  'JC': 'Jack of Clubs: A good friend or admirer. Someone who uses a lot of flattery to cheer you or make you feel better.',

  'QC': 'Queen of Clubs: A close, long-time friend or partner who knows your deepest secrets. Someone who gives good advice.',

  'KC': 'King of Clubs:  A lifelong companion. A generous and capable person, to be trusted in times of need or sorrow.',

  'AD': 'Ace of Diamonds: A very important message,  letter or package. Usually contans good news, often about money.',

  '2D': '2 of Diamonds: A serious love affair or business partnership. A change in relationship status.',

  '3D': '3 of Diamonds: Disputes, quarrels, lawsuits or legal actions. Separation or divorce. Be tactful.',

  '4D': '4 of Diamonds: Forgotten or neglected relationships. Brewing situations will now come to a head.',

  '5D': '5 of Diamonds: Prosperity, a change for the better. A birth, or good news for a child. A good time to start new projects.',

  '6D': '6 of Diamonds: Relationship problems, arguments, separation. An early marriage, unhappy and destined to fail.',

  '7D': '7 of Diamonds: An argument about finances or on the job. A person who is unreliable, a drinker or gambler.',

  '8D': '8 of Diamonds: Life is too hectic; a need to slow down and get away that cannot be met at present time.',

  '9D': '9 of Diamonds: A new business deal, advancement. Adventure, restlessness, change of residence.',

  '0D': '10 of Diamonds: Greed and selfishness. Money as the driving force of a partnership. A change in financial status.',

  'JD': 'Jack of Diamonds: The bringer of bad news. A selfish, jealous and unreliable person. A particular danger to women.',

  'QD': 'Queen of Diamonds: A flirtatious or gossiping person who is likely to interfere with plans. Not to be trusted.',

  'KD': 'King of Diamonds:  A person of authority, status, or influence. A bitter rival or dangerous competitor.',

  'AH': 'Ace of Hearts: Love,  happiness, home. Troubles and problems lifting. A visit, travel or change of address',

  '2H': '2 of Hearts: Success, strength and support beyond expectations. A warm partnership or engagement.',

  '3H': '3 of Hearts: Emotional problems. An unwise decision, made in haste and without proper information.',

  '4H': '4 of Hearts: Travel, change of home or career. An overly picky nature, destined to remain alone or unsatisfied.',

  '5H': '5 of Hearts: Jealousy, ill-will, indecisiveness. A tendency to make and break plans with others.',

  '6H': '6 of Hearts: A warning. A close friend or partner may be trying to use or take advantage of you. Be wary.',

  '7H': '7 of Hearts: Disappointment, lovesickness, broken promises. Someone whose interest is fickle or unreliable.',

  '8H': '8 of Hearts: An event, celebration, wedding or party. An unexpected gift or a ceremony being planned.',

  '9H': '9 of Hearts: Harmony, prosperity, a wish fulfilled. The preceding card indicates your desire.',

  '0H': '10 of Hearts: Good luck, success, good fortune after struggle or difficulty. Triumph over adversity.',

  'JH': 'Jack of Hearts: Friendship, relationships, gathering in celebration. An old friend or close confidant.',

  'QH': 'Queen of Hearts: Trust, honesty, friendship. A caring and knowledgable person, who will always play fair.',

  'KH': 'King of Hearts: Money, wealth, success in love. An influential person, with the power to do something good.',

  'AS': 'Ace of Spades: Misfortune, death, a difficult ending. Illness, loss of someone close. Bad news.',

  '2S': '2 of Spades: A sudden forced change. Relocation, a break in an important relationship, deceit, death.',

  '3S': '3 of Spades: Unhappiness, misfortune in love. Loss of pride or hope, an unreparable break. A need to move on in life.',

  '4S': '4 of Spades: Small worries, minor misfortunes, personal lows. A short illness or temporary financial setback.',

  '5S': '5 of Spades: Temporary obstacles or opposition; a blessing in disguise. A negative or depressed person.',

  '6S': '6 of Spades: Discouragement; much planning with little result, hard work without profit. Small changes.',

  '7S': '7 of Spades: Sorrow, loss, advice that is best not taken. The obstacle to success may be coming from within.',

  '8S': '8 of Spades: Traitors, false friends, someone who will betray you. Danger. Be wary of temptation. Examine your relationships.',

  '9S': '9 of Spades: Illness, accident, misery and death. Financial loss. Depression and defeat. A new personal low.',

  '0S': '10 of Spades: Tremendously bad luck. Worry, anxiety, and the realization of your worst fears. Take caution.',

  'JS': 'Jack of Spades:  Laziness. A hostile or jealous person who impedes progress, or takes but does not give back.',

  'QS': 'Queen of Spades:  Betrayal, interference, manipulation, sabotage. A cruel person who uses others for gain.',

  'KS': 'King of Spades: An ambitious, self-serving person. One who will divide and conquer, then destroy.',

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

tarot.deckID = [];
tarot.drawCards = {};
tarot.errorCards = [];

// get user data
$('form').on('submit', function(e) {
  e.preventDefault();

  tarot.querent = $('input').val();
  if (tarot.querent === ''){

    // demand satisfaction
    $('input').toggleClass('insist');
  } else {

    // display username
    $('#querent').text(`Hello, ${tarot.querent}!`).css('font-size', '250%');
    $('input').hide();


    // display category
    tarot.question = $('#category option:selected').val();

    $('#question').text(`The cards will show you the secrets of:`);
    $('#submit').text('Ask again');
  };

  // reset action
  $('#reset').on('click', function(){
    location.reload(true);
  });

  tarot.getDeck();
});

// API call
tarot.getDeck = function(){

  // get shuffled deck and draw (num) cards
  return $.ajax({
    dataType: 'json',
    method: 'GET',
    url: `https://deckofcardsapi.com/api/deck/new/draw/?count=${tarot.num}`,
  })

  // fallback if the #$@☠&%! server is still down
  .fail(tarot.error = function(){

    // pull random cards from local data
    i = 0;
    while (i < tarot.num){
      tarot.errorCards.push(tarot.failDeck[Math.floor(Math.random()*tarot.failDeck.length)]);
      i++;
    };

    // assign cards to existing object
    Object.assign(tarot.drawCards, tarot.errorCards);

    // spread 'em
    tarot.spread();
  })

  // assign returned data to placeholders
  .done(tarot.data = function(res){
    tarot.deckID.push(res.deck_id);
    Object.assign(tarot.drawCards, res.cards);

    // spread 'em
    tarot.spread();
  });
};


// assign cards to layout
tarot.spread = function(){

  // make sure table is clear
  $('#spread').empty();

  // match returned cards to local data
  for (i = 0; i < tarot.num; i++){

    tarot.cardCode = tarot.drawCards[i].code;
    tarot.cardSuit = tarot.drawCards[i].suit;
    tarot.cardValue = tarot.drawCards[i].value;

    // local or remote path to card image
    if (tarot.drawCards[i].image !== undefined){
      tarot.cardImage = `http://deckofcardsapi.com/static/img/${tarot.cardCode}.png`
    } else {
      tarot.cardImage = `images/PNG-cards-1.3/${tarot.cardValue}_of_${tarot.cardSuit}.png`;
    };

    tarot.cardDesc = tarot.cardMeaning[`${tarot.cardCode}`];
    tarot.positionDesc = tarot.positionMeaning[`${tarot.num}`][`${tarot.question}`][i];

    // lay it all out
    $('#spread').append(
      `<figure class="card" id="card${i}">
        <img src="${tarot.cardImage}" alt="The ${tarot.cardValue} of ${tarot.cardSuit}"/>
        <figcaption class="card">
          <p>${tarot.cardDesc}</p>
        </figcaption>
      </figure>`
    );
    $(`#card${i}`).prepend(`<h2>${tarot.positionDesc}</h2>`);
  };
};

// initiate sequence
tarot.init = function(){};

// document ready
$(tarot.init);
