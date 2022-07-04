const btnAdd = document.querySelector("#btn");
const btnRmv = document.querySelector("#rmv");
let todos = [];
const todoList = document.querySelector("#list");

btnAdd.addEventListener("click", createTodoElement);
btnRmv.addEventListener("click", (e) => {
  todos = todos.filter((todo) => !todo.done);
  renderTodos();
});

renderTodos();

function letterCheck(todoText) {
  return /[a-z]/i.test(todoText);
}

function createTodoElement() {
  const todoTextInput = document.querySelector("#todo-text");
  const todoText = todoTextInput.value;

  if (letterCheck(todoText) === false) {
    return;
  } else {
    const todo = {
      description: todoText,
      done: false,
      id: todoText.trim().replaceAll(" ", "").toLowerCase(),
    };

    todos.push(todo);
    todoTextInput.value = "";
    renderTodos();
  }
}

function renderTodos() {
  todoList.innerText = "";

  for (let todo of todos) {
    const listEl = document.createElement("li");
    const todoDescription = document.createElement("label");
    todoDescription.innerText = todo.description;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = todo.id;

    checkbox.addEventListener("change", () => {
      todo.done = !todo.done;
      console.log(todo.done);
    });

    todoDescription.setAttribute("for", checkbox.id);
    listEl.append(checkbox, todoDescription);
    todoList.append(listEl);
  }
}
