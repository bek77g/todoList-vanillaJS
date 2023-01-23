let todoData = [
  {
    key: 1,
    text: 'It is very important to know that the patient is suffering from obesity ',
    isDone: false,
    isEditable: false,
  },
];

//elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

let oldInputValue;

//functions

const showTodosData = () => {
  todoList.innerHTML = '';
  todoData.forEach(({ key, text, isDone, isEditable }) => {
    todoList.innerHTML += `
        <div class="todo ${isDone ? 'done' : ''}">
          <h3>
            ${text}
          </h3>
          <button class="finish-todo">
            <i class="fa-solid fa-check"></i>
          </button>
          <button class="edit-todo">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="remove-todo">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
    `;
  });
};

const addTodo = (text) => {
  let todoBody = {
    key: new Date().getTime(),
    text: text,
    isDone: false,
    isEditable: false,
  };
  todoData.push(todoBody);
  todoInput.value = '';
  todoInput.focus();
  showTodosData(todoData);
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll('.todo');

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector('h3');

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  });
};

// events

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    addTodo(inputValue);
  }
});

showTodosData();
