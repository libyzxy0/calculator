let screen = [];

let display = document.getElementById('display');
let numberClick = document.querySelectorAll('.number');
let operatorClick = document.querySelectorAll('.operator');
let delClick = document.querySelectorAll('#del');

for (var i = 0; i < numberClick.length; i++) {
    numberClick[i].addEventListener('click', function(e) {
        e.preventDefault();
        let clicked = e.target.textContent;
        screen.push(clicked)
        display.textContent= screen.join('');
    });
}

for (var i = 0; i < operatorClick.length; i++) {
    operatorClick[i].addEventListener('click', function(e) {
        e.preventDefault();
        let clicked = e.target.textContent;
        screen.push(clicked)
        display.textContent= screen.join('');
    });
}
for (var i = 0; i < delClick.length; i++) {
    delClick[i].addEventListener('click', function(e) {
        e.preventDefault();

        // Join the 'screen' array into a string
        var currentContent = screen.join('');

        // Check if the last character is a space
        if (currentContent.charAt(currentContent.length - 1) === " ") {
            // Remove the last two characters if it's a space
            currentContent = currentContent.substring(0, currentContent.length - 2);
        } else {
            // Otherwise, remove only the last character
            currentContent = currentContent.substring(0, currentContent.length - 1);
        }

        // Update the 'screen' array with the new content
        screen = currentContent.split('');

        // Update the display with the joined 'screen' content
        display.textContent = screen.join('');
    });
}


document.getElementById('equal').addEventListener('click', () => {
    let val = screen.join('');
    let finalRes = val.replace(/×/g, "*").replace(/÷/g, "/");
    console.log(finalRes);
    let answer = eval(finalRes);
    screen = [];
    screen.push(answer);
    display.textContent = screen.join('');
})


document.getElementById('clear-all').addEventListener('click', () => {
    screen = [];
    display.textContent= screen.join('');
})