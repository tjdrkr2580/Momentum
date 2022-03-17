const clock = document.querySelector(".momentum_layout .clock");
const todoinput = document.querySelector(".todo_input");
const form = document.querySelector("form");
const timeText = document.querySelector(".time_text");

const todoArray = [];

setInterval(function () {
    let timer = new Date();
    let h = String(timer.getHours()).padStart(2, "0");
    switch (h) {
        case "6":
            timeText.innerText = "Good morning , user";
            break;
        case "7":
            timeText.innerText = "Good morning , user";
            break;
        case "8":
            timeText.innerText = "Good morning , user";
            break;
        case "9":
            timeText.innerText = "Good morning , user";
            break;
        case "10":
            timeText.innerText = "Good morning , user";
            break;
        case "11":
            timeText.innerText = "Good morning , user";
            break;
        case "12":
            timeText.innerText = "Good morning , user";
            break;
        case "13":
            timeText.innerText = "Good afternoon , user";
            break;
        case "14":
            timeText.innerText = "Good afternoon , user";
            break;
        case "15":
            timeText.innerText = "Good afternoon , user";
            break;
        case "16":
            timeText.innerText = "Good afternoon , user";
            break;
        case "17":
            timeText.innerText = "Good evening , user";
            break;
        case "18":
            timeText.innerText = "Good evening , user";
            break;
        case "19":
            timeText.innerText = "Good evening , user";
            break;
        case "20":
            timeText.innerText = "Good evening , user";
            break;
        case "21":
            timeText.innerText = "Good evening , user";
            break;

        default:
            timeText.innerText = "Good night , user";
            break;
    }
    let m = String(timer.getMinutes()).padStart(2, "0");
    let s = String(timer.getSeconds()).padStart(2, "0");
    clock.innerText = `${h}:${m}:${s}`;
}, 1000);

function submitTodo(e) {
    e.preventDefault();
    const ul = document.querySelector(".todo");
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = todoinput.value;
    todoinput.value = "";
    todoArray.push(li);
}

form.addEventListener("submit", submitTodo);
