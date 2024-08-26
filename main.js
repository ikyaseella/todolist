document.addEventListener('DOMContentLoaded', () => {
    
  let todoListArray = []; 
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = todoInput.value.trim();

      if (newTodo !== '') {

          todoListArray.push(newTodo);

          renderTodoList();

          todoInput.value = '';
      }
  });

  
  function renderTodoList() {
      
      todoList.innerHTML = '';

      todoListArray.forEach((todo) => {
          const listItem = document.createElement('li');
          listItem.textContent = todo;

          // Add a delete button
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          listItem.appendChild(deleteButton);

         
          todoList.appendChild(listItem);

          
          deleteButton.addEventListener('click', () => {
              
              todoListArray = todoListArray.filter((item) => item !== todo);

              renderTodoList();
          });
      });
  }
});
