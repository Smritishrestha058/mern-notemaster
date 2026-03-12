document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const listItem = e.target.parentElement;
            todoList.removeChild(listItem);
        }
    });
    

    function addTodoItem(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        listItem.appendChild(deleteBtn);

        todoList.appendChild(listItem);
    }
});

// Get the forms and lists
const expensesForm = document.getElementById('expenses-form');
const incomeForm = document.getElementById('income-form');
const expensesList = document.getElementById('expenses-list');
const incomeList = document.getElementById('income-list');

// Add event listeners to the forms
expensesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('expenses-input').value;
    const newListItem = document.createElement('li');
    newListItem.textContent = inputValue;
    expensesList.appendChild(newListItem);
    document.getElementById('expenses-input').value = '';
});

incomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('income-input').value;
    const newListItem = document.createElement('li');
    newListItem.textContent = inputValue;
    incomeList.appendChild(newListItem);
    document.getElementById('income-input').value = '';
});

// Get all delete buttons
const deleteBtns = document.querySelectorAll('.delete-btn');

// Add event listener to each delete button
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Get the parent list item
    const li = e.target.parentNode;
    // Remove the list item
    li.remove();
  });
});