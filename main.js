
const randomNr = Math.floor(Math.random() * 10) + 1;


function guessNumber() {

    let guess = parseInt(prompt('Guess a number from 1 to 10: '));
    let attempt = 1

    while(guess !== randomNr && attempt < 3) {

        guess = parseInt(prompt('Wrong answer! Please try again.'));
        attempt++;
    }

    if (guess === randomNr && attempt <= 3){

        alert('You guessed the correct number.');
        
    } else {

        alert(`Sorry you failed to guess the number in three attemps. The number was ${randomNr}`)
    } 

} 

guessNumber();