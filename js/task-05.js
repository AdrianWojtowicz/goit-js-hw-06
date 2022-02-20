const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const text = event => {
    output.textContent = event.currentTarget.value;
}

textInput.addEventListener("input", text);