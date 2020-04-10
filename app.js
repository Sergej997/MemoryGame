document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name:"smiley1",
            img:"images/smiley1.png"
        },
        {
            name:"smiley1",
            img:"images/smiley1.png"
        },
        {
            name:"smiley2",
            img:"images/smiley2.png"
        },
        {
            name:"smiley2",
            img:"images/smiley2.png"
        },
        {
            name:"smiley3",
            img:"images/smiley3.png"
        },
        {
            name:"smiley3",
            img:"images/smiley3.png"
        },
        {
            name:"smiley4",
            img:"images/smiley4.png"
        },
        {
            name:"smiley4",
            img:"images/smiley4.png"
        },
        {
            name:"smiley5",
            img:"images/smiley5.png"
        },
        {
            name:"smiley5",
            img:"images/smiley5.png"
        },
        {
            name:"smiley6",
            img:"images/smiley6.png"
        },
        {
            name:"smiley6",
            img:"images/smiley6.png"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector(".grid");
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var resultDisplay = document.querySelector("#result");
    var finalDisplay = document.querySelector("h2");
    var numerator = 0;
    var attempts = 0;
    resultDisplay.textContent = "0";

    function createBoard() {
        for(let i=0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src","images/1.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]) {
            //alert("You found match");
            cards[optionOneId].setAttribute("src", "images/2.png");
            cards[optionTwoId].setAttribute("src", "images/2.png");
            cardsWon.push(cardsChosen[0]);
            //cardsWon.push(cardsChosen[1]);
        }else  {
            cards[optionOneId].setAttribute("src", "images/1.png");
            cards[optionTwoId].setAttribute("src", "images/1.png");
            //alert("Sorry, try again");
        }

        attempts++;
        numerator = 0;
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = attempts;

        if(cardsWon.length === cardArray.length / 2) {
            if(attempts <=10) {
                finalDisplay.style.border = "2px solid green";
                finalDisplay.textContent =" Congratulations, you won !!!";
                alert(attempts+"\n"+"Excellent result");
            }else if(attempts >10 && attempts <20) {
                finalDisplay.style.border = "2px solid yellow";
                finalDisplay.textContent =" Your result is average.";
                alert(attempts+"\n"+"Average result");
            }else {
                finalDisplay.style.border = "2px solid red";
                finalDisplay.textContent ="You can do it better :(";
                alert(attempts+"\n"+"Bad result");
            }
        }
    }

    function flipCard() {
        var cardId = this.getAttribute("data-id");
        var imageName = cardArray[cardId].name;
        numerator++;
        if(numerator <3 && (cardsWon.indexOf(imageName) < 0)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute("src", cardArray[cardId].img);
        }

        if(numerator === 2 && !cardsWon.includes(imageName)) {
            setTimeout(checkForMatch, 1000);
        }
    }


    createBoard();

}) 