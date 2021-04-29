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
        usersChoiceDOM.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
        usersChoiceDOM.style.transform = "scale(1.3)";
        usersChoiceDOM.style.transition = "250ms";

        computersChoiceDOM.style.border = "1px solid red";
        computersChoiceDOM.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        computersChoiceDOM.style.transform = "scale(0.5)";
        computersChoiceDOM.style.transition = "250ms";

        setTimeout(() => {
            usersChoiceDOM.style.border = "1px solid var(--blue)";
            usersChoiceDOM.style.backgroundColor = "#222222";
            usersChoiceDOM.style.transform = "scale(1)";

            computersChoiceDOM.style.border = "1px solid var(--blue)";
            computersChoiceDOM.style.backgroundColor = "#222222";
            computersChoiceDOM.style.transform = "scale(1)";
        }, 750);
    } else if (winner == "computer") {
        computersScoreDOM.textContent = score;

        usersChoiceDOM.style.border = "1px solid red";
        usersChoiceDOM.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        usersChoiceDOM.style.transform = "scale(0.5)";
        usersChoiceDOM.style.transition = "250ms";

        computersChoiceDOM.style.border = "1px solid green";
        computersChoiceDOM.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
        computersChoiceDOM.style.transform = "scale(1.3)";
        computersChoiceDOM.style.transition = "250ms";

        setTimeout(() => {
            computersChoiceDOM.style.border = "1px solid var(--blue)";
            computersChoiceDOM.style.transform = "scale(1)";
            computersChoiceDOM.style.backgroundColor = "#222222";

            usersChoiceDOM.style.border = "1px solid var(--blue)";
            usersChoiceDOM.style.backgroundColor = "#222222";
            usersChoiceDOM.style.transform = "scale(1)";
        }, 750);
    }

    let i = document.createElement('i');
    i.className = `far fa-hand-${usersChoice}`;

    usersChoiceDOM.appendChild(i);

    document.body.className = "";
}

start = (usersChoice) => {

    if(usersChoice == computersChoice) {
        let i = document.createElement('i');
        i.className = `far fa-hand-${usersChoice}`;

        usersChoiceDOM.appendChild(i);

        computersChoiceDOM.style.border = "1px solid red";
        computersChoiceDOM.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        computersChoiceDOM.style.transform = "scale(0.5)";
        computersChoiceDOM.style.transition = "250ms";

        usersChoiceDOM.style.border = "1px solid red";
        usersChoiceDOM.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        usersChoiceDOM.style.transform = "scale(0.5)";
        usersChoiceDOM.style.transition = "250ms";

        setTimeout(() => {
            computersChoiceDOM.style.border = "1px solid var(--blue)";
            computersChoiceDOM.style.backgroundColor = "#222222";
            computersChoiceDOM.style.transform = "scale(1)";

            usersChoiceDOM.style.border = "1px solid var(--blue)";
            usersChoiceDOM.style.backgroundColor = "#222222";
            usersChoiceDOM.style.transform = "scale(1)";
        }, 750);

        document.body.className = "";

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
    if(document.body.className != "isPlaying") {
        document.body.classList.add('isPlaying');
        var usersChoice = e.target.id;

        let random = Math.floor(Math.random() * selects.length);
        computersChoice = selects[random];

        let i = document.createElement('i');
        i.className = `far fa-hand-${usersChoice}`;

        usersChoiceDOM.innerHTML = "";
        usersChoiceDOM.appendChild(i);

        computersChoiceDOM.innerHTML = `<i class="far fa-hand-rock rollingIcon"></i>`;

        setTimeout(() => {
            computersChoiceDOM.innerHTML = `<i class="far fa-hand-paper rollingIcon"></i>`;
        }, 750);

        setTimeout(() => {
            computersChoiceDOM.innerHTML = `<i class="far fa-hand-scissors rollingIcon"></i>`;
        }, 1500);

        setTimeout(() => {
            computersChoiceDOM.innerHTML = "";
            i.className = `far fa-hand-${computersChoice}`;
            computersChoiceDOM.appendChild(i);
            
            start(usersChoice);
        }, 2250);
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', select);
});
