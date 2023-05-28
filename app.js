const inputTodo = document.getElementById("input-todo");
const button = document.getElementById("todo-btn");
const todoUL = document.getElementById("todo-container");

button.addEventListener("click", ()=>{
    addbutton()
    inputTodo.value = "";
})
inputTodo.addEventListener("keypress", (Add)=>{
   if(Add.key === "Enter"){
    addbutton()
    inputTodo.value = "";
   }
})
   function addbutton(){
    if(inputTodo.value !== ""){
        let todoList = document.createElement("li");
    todoList.innerHTML = inputTodo.value;
    todoUL.appendChild(todoList);
    let remove = document.createElement("span");
    remove.innerHTML = "✖";
    todoList.appendChild(remove);
    }
    saveTodo()
   }
todoUL.addEventListener("click", (render) => {
    if (render.target.tagName === "LI") {
        render.target.classList.toggle("checked");
        saveTodo()
    } else if(render.target.tagName === "SPAN"){
        render.target.parentElement.remove();
        saveTodo()
    }
}, false);

function saveTodo(){
    localStorage.setItem("Todo", todoUL.innerHTML);
}
function displayTodo(){
    todoUL.innerHTML = localStorage.getItem("Todo")
}
displayTodo()

