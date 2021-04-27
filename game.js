// DOMs
const usersScoreDOM = document.querySelector('.users-score');
const computersScoreDOM = document.querySelector('.computers-score');

const usersChoiceDOM = document.querySelector('.container-icon-user');
const computersChoiceDOM = document.querySelector('.container-icon-computer');

const choices = document.querySelectorAll('.footer-choice');

// Game
const selects = ['rock', 'paper', 'scissors'];
let winner = "";

let usersChoice = "";
let usersScore = 0;

let computersChoice = "";
let computersScore = 0;

init = (winner, score, usersChoice) => {
    if(winner == "user") {

        usersScoreDOM.textContent = score;

        usersChoiceDOM.style.border = "1px solid green";
        usersChoiceDOM.style.transform = "scale(1.3)";
        usersChoiceDOM.style.transition = "250ms";

        computersChoiceDOM.style.border = "1px solid red";
        computersChoiceDOM.style.transform = "scale(0.5)";
        computersChoiceDOM.style.transition = "250ms";

        setTimeout(() => {
            usersChoiceDOM.style.border = "1px solid var(--blue)";
            usersChoiceDOM.style.transform = "scale(1)";

            computersChoiceDOM.style.border = "1px solid var(--blue)";
            computersChoiceDOM.style.transform = "scale(1)";
        }, 750);
    } else if (winner == "computer") {
        computersScoreDOM.textContent = score;

        usersChoiceDOM.style.border = "1px solid red";
        usersChoiceDOM.style.transform = "scale(0.5)";
        usersChoiceDOM.style.transition = "250ms";

        computersChoiceDOM.style.border = "1px solid green";
        computersChoiceDOM.style.transform = "scale(1.3)";
        computersChoiceDOM.style.transition = "250ms";

        setTimeout(() => {
            computersChoiceDOM.style.border = "1px solid var(--blue)";
            computersChoiceDOM.style.transform = "scale(1)";

            usersChoiceDOM.style.border = "1px solid var(--blue)";
            usersChoiceDOM.style.transform = "scale(1)";
        }, 750);
    }

    let i = document.createElement('i');
    i.className = `far fa-hand-${usersChoice}`;

    usersChoiceDOM.appendChild(i);
}

start = (usersChoice) => {

    if(usersChoice == computersChoice) {
        let i = document.createElement('i');
        i.className = `far fa-hand-${usersChoice}`;

        usersChoiceDOM.appendChild(i);

        computersChoiceDOM.style.border = "1px solid red";
        computersChoiceDOM.style.transform = "scale(0.5)";
        computersChoiceDOM.style.transition = "250ms";

        usersChoiceDOM.style.border = "1px solid red";
        usersChoiceDOM.style.transform = "scale(0.5)";
        usersChoiceDOM.style.transition = "250ms";

        setTimeout(() => {
            computersChoiceDOM.style.border = "1px solid var(--blue)";
            computersChoiceDOM.style.transform = "scale(1)";

            usersChoiceDOM.style.border = "1px solid var(--blue)";
            usersChoiceDOM.style.transform = "scale(1)";
        }, 750);

    } else if(usersChoice + computersChoice == "paperrock") {
        winner = 'user';
        usersScore++;

        init(winner, usersScore, usersChoice);
    } else if (usersChoice + computersChoice == "rockscissors") {
        winner = 'user';
        usersScore++;

        init(winner, usersScore, usersChoice);
    } else if (usersChoice + computersChoice == 'scissorspaper') {
        winner = "user";
        usersScore++;

        init(winner, usersScore, usersChoice);
    } else {
        winner = "computer";
        computersScore++;

        init(winner, computersScore, usersChoice);
    }

}

select = (e) => {
    var usersChoice = e.target.id;

    let random = Math.floor(Math.random() * selects.length);
    computersChoice = selects[random];

    let i = document.createElement('i');
    i.className = `far fa-hand-${usersChoice}`;

    usersChoiceDOM.innerHTML = "";
    usersChoiceDOM.appendChild(i);

    computersChoiceDOM.innerHTML = `<h3>3</h3>`;

    setTimeout(() => {
        computersChoiceDOM.innerHTML = `<h3>2</h3>`;
    }, 1000);

    setTimeout(() => {
        computersChoiceDOM.innerHTML = `<h3>1</h3>`;
    }, 2000);

    setTimeout(() => {
        computersChoiceDOM.innerHTML = "";
        i.className = `far fa-hand-${computersChoice}`;
        computersChoiceDOM.appendChild(i);
        
        start(usersChoice);
    }, 3000);

}

choices.forEach((choice) => {
    choice.addEventListener('click', select);
});
