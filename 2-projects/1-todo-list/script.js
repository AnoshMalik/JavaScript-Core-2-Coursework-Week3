let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
let listCounter = 0;
let list = document.getElementById("todo-list");

function populateTodoList(todo) {
  let itemAdded = todo;

  const liTag = document.createElement("li");
  const spanTag = document.createElement("span");
  const iTagOne = document.createElement("i");
  const iTagTwo = document.createElement("i");

  liTag.innerText = itemAdded.task;
  liTag.style.listStyleType = "none";
  liTag.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  iTagOne.classList.add("fa", "fa-check");
  iTagTwo.classList.add("fa", "fa-trash");
  spanTag.classList.add("badge", "bg-primary", "rounded-pill");
  iTagOne.ariaHidden = true;
  iTagTwo.ariaHidden = true;

  iTagOne.style.padding = "5px";
  iTagOne.style.margin = "5px";

  iTagTwo.style.padding = "5px";
  iTagTwo.style.margin = "5px";

  spanTag.appendChild(iTagOne);
  spanTag.appendChild(iTagTwo);

  liTag.appendChild(spanTag);

  // APPENDING VARIABLES
  list.appendChild(liTag);

  let iTagOneClickCounter = 0;
  iTagOne.onclick = function () {
    iTagOneClickCounter++;
    if (iTagOneClickCounter % 2 != 0) {
      liTag.style.textDecoration = "line-through";
      itemAdded.completed = true;
    } else {
      liTag.style.textDecoration = "none";
      itemAdded.completed = false;
    }
  };

  iTagTwo.onclick = function () {
    // listCounter--;
    // delete iTagTwo.parentNode.inner
    iTagTwo.parentNode.parentNode.parentNode.removeChild(liTag);
  };
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  listCounter++;
  const todoInput = document.getElementById("todoInput");
  const newObject = {
    task: todoInput.value,
    completed: false,
    id: listCounter,
  };
  todos.push(newObject);
  let lastElement = todos[todos.length - 1];

  populateTodoList(lastElement);
}

const clearTodosButton = document.createElement("button");
clearTodosButton.innerText = "Clear All";
clearTodosButton.classList.add("btn", "btn-primary", "mb-3");
const divContainer = document.querySelector("#col2");
divContainer.appendChild(clearTodosButton);

clearTodosButton.addEventListener("click", deleteAllCompletedTodos);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let val = todos.filter((todo) => todo.completed == true);
  // delete todos.
  let listArray = list.chil;

  console.log(val);
}
