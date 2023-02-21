//----to-do list--------------------
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    const taskText = todoInput.value;

    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    todoList.appendChild(newTask);
    todoInput.value = '';
    todoInput.focus();

    // adaugam buton delete
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', function (){
     this.closest('li').remove()
    })

}

//------------------timer----------------------------------------
const counterElement = document.querySelector('#counter')
let counter = 0;
let timerID;

//Start
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
    timerID = setInterval(function () {
    counter++;
    counterElement.innerText = counter;
}, 1000)
}

//Pause
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
    clearInterval(timerID);
}

//Reset
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);
}

//------------------curs valutar--------------------

async function getCurrencies(){
   const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
   const data = await response.json();
   const currencyUSD = data.Valute.USD.Value.toFixed(2);
   const currencyEUR = data.Valute.EUR.Value.toFixed(2);

   const usd = document.querySelector('#usd');
   const eur = document.querySelector('#eur');

   usd.innerText = currencyUSD;
   eur.innerText = currencyEUR;
}

getCurrencies();
