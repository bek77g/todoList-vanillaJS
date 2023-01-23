let todoData = [
  {
    key: 1,
    text: 'It is very important to know that the patient is suffering from obesity ',
    isDone: false,
    isEditable: false,
  },
  {
    key: 2,
    text: 'Complete ',
    isDone: false,
    isEditable: false,
  },
  {
    key: 3,
    text: 'Complete 2',
    isDone: true,
    isEditable: false,
  },
  {
    key: 4,
    text: 'It is very important to know that the patient is suffering from obesity ',
    isDone: false,
    isEditable: false,
  },
];

let searchValue = '';
let filterValue = 'all';

//elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const searchInput = document.querySelector('#search-input');

const showTodosData = () => {
  todoList.innerHTML = '';
  todoData
    .filter((todo) => todo.text.includes(searchValue))
    .filter((el) => {
      switch (filterValue) {
        case 'all':
          return el;
          break;
        case 'done':
          if (el.done) return el;
          break;
        case 'todo':
          if (!el.done) return el;
          break;
        default:
          break;
      }
    })
    .forEach(({ key, text, isDone, isEditable }) => {
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

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    addTodo(inputValue);
  }
});

searchInput.addEventListener('input', (e) => {
  let value = e.target.value;
  if (value) {
    searchValue = value;
  }
});

showTodosData();
