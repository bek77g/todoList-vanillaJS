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
const filterInput = document.querySelector('#filter-select');

const showTodosData = () => {
  todoList.innerHTML = '';
  todoData
    .filter((todo) =>
      todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .filter((el) => {
      if (filterValue === 'all') return el;
      if (filterValue === 'done' && el.isDone) return el;
      if (filterValue === 'todo' && !el.isDone) return el;
    })
    .forEach(({ key, text, isDone, isEditable }) => {
      todoList.innerHTML += `
        <div class="todo ${isDone ? 'done' : ''}">
          ${isEditable ? <h3>${text}</h3> : <input />}
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
  showTodosData();
};

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;
  if (inputValue) {
    addTodo(inputValue);
  }
});

searchInput.addEventListener('input', (e) => {
  searchValue = e.target.value;
  showTodosData();
});
filterInput.addEventListener('input', (e) => {
  filterValue = e.target.value;
  showTodosData();
});

//Edit

showTodosData();
