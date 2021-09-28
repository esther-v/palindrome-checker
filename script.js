const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

const palindrome = () => {
    const word = document.querySelector('.input-text').value;
    let len = word.length;

    let startLetters = word.substring(0, Math.floor(len / 2)).toLowerCase();

    let endLetters = word.substring(len - Math.floor(len / 2)).toLowerCase();

    //flip endLetters, 2 methods :
    // let flip = endLetters.split("").reverse().join("");
    let flip = [...endLetters].reverse().join("");

    if (startLetters == flip) {
        result.innerHTML = `${word.toUpperCase()} is a Palindrome`
    } else {
        result.innerHTML = `${word.toUpperCase()} is not a Palindrome`
    }
}

btn.addEventListener('click', palindrome)