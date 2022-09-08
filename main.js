let input = document.querySelector('#input');
let clear = document.querySelector('#clear');
let del = document.querySelector('#delete');
let percent = document.querySelector('#percent');
let divide = document.querySelector('#divide');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let multiply = document.querySelector('#multiply');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let minus = document.querySelector('#minus');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let add = document.querySelector('#adds');
let dot = document.querySelector('#dot');
let zero = document.querySelector('#zero');
let equal = document.querySelector('#eq');


// percent.addEventListener('click', show);

function Show(a) {
    input.value += a;
}

function cal() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert('Invalid!')
    }

}

function Clear() {
    input.value = '';
}

function Del() {
    // let num = input.value;
    // console.log(num[num.length - 1]);
    input.value = input.value.slice(0, -1);
}

//styling hover

let design = document.querySelector('.style');
let style = getComputedStyle(design, ':hover');
style.color = red;