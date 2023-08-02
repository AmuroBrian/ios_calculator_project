const display = document.querySelector(".display");
const span = document.querySelector("span");
const operation = document.getElementsByClassName("operation");
let num, num1, temp;
let flag = false;

function click_button(i){
    span.innerHTML = '';
    display.innerHTML += i;
}

// operation[0].addEventListener("click", function(){
//     num = Number(display.textContent);
//     display.innerHTML = "";
//     temp = '/';
// })

// operation[1].addEventListener("click", function(){
//     temp = 'x';
// })

for (let i = 0; i < operation.length - 1; i++){
    if (i == 0){
        operation[i].addEventListener("click", function(){
            getValue();
            temp = '/';
        })
    } else if (i == 1){
        operation[i].addEventListener("click", function(){
            getValue();
            temp = 'x';
        })
    } else if (i == 2){
        operation[i].addEventListener("click", function(){
            getValue();
            temp = '-';
        })
    } else if (i == 3){
        operation[i].addEventListener("click", function(){
            getValue();
            temp = '+';
        })
    }
}

function getValue(){
    num = Number(display.textContent);
    display.innerHTML = "";
}

operation[4].addEventListener("click", function(){
    num1 = Number(display.textContent);
    if (temp == '/'){
        display.innerHTML = num / num1;
    }
    if (temp == 'x'){
        display.innerHTML = num * num1;
    }
    if (temp == '-'){
        display.innerHTML = num - num1;
    }
    if (temp == '+'){
        display.innerHTML = num + num1;
    }
})