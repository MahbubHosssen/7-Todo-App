const todoApp = document.querySelector(".Todo-app");
const todoForm = document.querySelector(".form");
const todoInput = todoForm.querySelector("#todo-input");
const todoBtn = document.querySelector("#todo-btn");
const message = document.querySelector(".message");
const lists = document.querySelector(".list");

//addTodo
function addTodo(e) {
    e.preventDefault()
    createTodo(todoInput.value);
    showMessage("Added Your Todo","success");
}

function createTodo(value) {
    const list = document.createElement("li");
    list.classList.add("todo-style");

    list.innerHTML = `
        <span>${value}</span>
        <span>
            <button class="deleteBtn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </span>
    `
    lists.appendChild(list)

    const deleteBtn = list.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", deleteTodo);
}
// showMessage
function showMessage(text, style){
    message.innerText = text;
    message.classList.add("message-" + style);

    setTimeout(() => {
        message.innerText = "";
        message.classList.remove("message-" + style);
    }, 1000)

}
function deleteTodo (e) {
    showMessage("Remove Your Todo","danger")
    const selectElement = e.target.parentElement.parentElement.parentElement;
    lists.removeChild(selectElement)
    
}

todoForm.addEventListener("submit", addTodo)
