import string from "./css.js";
// debugger
console.log(string)
let n = 1
const code = document.querySelector('#code')
const style = document.querySelector('#style')
console.log(code);

code.innerText = string.substr(0, n)
style.innerHTML = string.substr(0, n)
console.log(n);
let timeCode = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
    }
    code.innerText = string.substr(0, n)
    style.innerHTML = string.substr(0, n)
    // console.log(n)
    code.scrollTop = code.scrollHeight
}
let time = 50
let id = setInterval(() => {
    timeCode()
}, time)

btnSlow.onclick = () => {
    window.clearInterval(id)
    time = 100
    id = setInterval(() => {
        timeCode()
    }, time)
}
btnFast.onclick = () => {
    window.clearInterval(id)
    time = 10
    id = setInterval(() => {
        timeCode()
    }, time)

}