const randomNumber = Math.floor(Math.random() * 30) + 1;
let attempts = 0;
let found = false;

while (attempts < 10) {
    let guess = prompt("1-dan 30-gacha son o'yladim. U nimani o'ylaganini toping:");

    if (guess === null) {
        break; // Game ends if the user cancels
    }

    let guesses = guess.split(' ').map(num => parseInt(num));

    if (guesses.length === 1 && !isNaN(guesses[0]) && guesses[0] >= 1 && guesses[0] <= 30) {
        attempts++;
        if (guesses[0] === randomNumber) {
            found = true;
            alert(`Tabriklayman! Siz ${randomNumber} sonini ${attempts} urinishda topdingiz.`);
            break;
        } else if (guesses[0] < randomNumber) {
            alert("Kattaroq son kiriting.");
        } else {
            alert("Kichikroq son kiriting.");
        }
    } else {
        alert("Iltimos, haqiqiy son kiriting, masalan: 10 yoki bir nechta son, masalan: 10 20");
    }
}

if (!found) {
    alert(`Afsuski, 10 ta urinishda sonni topa olmadingiz. To'g'ri javob: ${randomNumber}.`);
}