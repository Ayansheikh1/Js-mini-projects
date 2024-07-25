
const todoList = JSON.parse(localStorage.getItem('todoLIst')) || [];

renderTodoList();

function renderTodoList(){
let todoListHtml='';

for(let i=0; i<todoList.length; i++){
  const todoObject = todoList[i];

  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  // const{name , dueDate} = todoObject;//shorthand
  
  const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
  
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    saveToStorage();
    " class="delete-button" >Delete</button>
  
  `;
  todoListHtml += html;
  
}
document.querySelector('.js-todo-list').innerHTML=todoListHtml;


}

function addTodo(){
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;


todoList.push({
  name: name,
  dueDate: dueDate
  // name,
  // dueDate;//shorthand
});//add to array


inputElement.value ='';// empty name input



renderTodoList();

saveToStorage();



}

function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}
