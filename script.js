const AllDeck = [
    "c/A", "c/2", "c/3", "c/4", "c/5", "c/6", "c/7", "c/8", "c/9", "c/10", "c/J", "c/K", "c/Q",
    "d/A", "d/2", "d/3", "d/4", "d/5", "d/6", "d/7", "d/8", "d/9", "d/10", "d/J", "d/K", "d/Q",
    "h/A", "h/2", "h/3", "h/4", "h/5", "h/6", "h/7", "h/8", "h/9", "h/10", "h/J", "h/K", "h/Q",
    "s/A", "s/2", "s/3", "s/4", "s/5", "s/6", "s/7", "s/8", "s/9", "s/10", "s/J", "s/K", "s/Q",
]

let end_components = document.querySelectorAll("._playing");
let start_components = document.querySelectorAll("._start");

let Deck = [];

let dealerCards = [];
let playerCards = [];

function startGame()
{
    Deck = AllDeck;

    document.querySelector(".main").classList.remove('stretch-to-end');
    for (comp of end_components) {
        comp.classList.remove("hidden");
    }
    for (comp of start_components) {
        comp.classList.add("hidden");
    }

    hitNewCard("V", "Player");
    hitNewCard("V", "Player");
    hitNewCard("V", "Dealer");
    hitNewCard("H", "Dealer");
}

function restartGame()
{
    //
    // dealerCards = [
    //     {
    //         "value": ,
    //         "picture":
    //     }
    // ]
    dealerCards = [];
    playerCards = [];
    //
    document.querySelector(".main").classList.add('stretch-to-end');
    for (comp of end_components) {
        comp.classList.add("hidden");
    }
    for (comp of start_components) {
        comp.classList.remove("hidden");
    }
}

function revealCard(card)
{
    card.classList.add("unshown-card")
}

function hideCard(card)
{
    card.classList.remove("unshown-card");
}

function hitNewCard(visbility, player)
{
    const randomCardValue = Deck[(Math.random() * Deck.length)]
    
    let CardHand;
    let NewCard

    if (player == "Player") {
        playerCards.unshift(randomCard);
    } else {
        dealerCards.unshift(randomCard);
    }
    if (visbility == "H") {

    }
}