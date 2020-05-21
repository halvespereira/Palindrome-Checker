const button = document.querySelector('#checkButton');
const reset = document.querySelector('#resetButton');

const answer = document.querySelector('p');

function palindrome() {
        const input1 = document.querySelector('#input').value;

        const regex = /[^\W+_]/g;
        const myArr = input1.match(regex);
        const newStr = myArr.join('').toLowerCase();
        const forward = [];
        const backward = [];

        for (let i = 0; i < newStr.length; i++) {
                forward.push(newStr[i].charCodeAt(newStr[i]));
        }
        for (let i = newStr.length - 1; i >= 0; i--) {
                backward.push(newStr[i].charCodeAt(newStr[i]));
        }
        for (let i = 0; i < newStr.length; i++) {
                if (forward[i] !== backward[i]) {
                        answer.textContent = 'Not a palindrome!';
                } else {
                        answer.textContent = "That's a palindrome!";
                }
        }
}

function resetPage() {
        window.location.reload();
}

button.addEventListener('click', palindrome);
reset.addEventListener('click', resetPage);
