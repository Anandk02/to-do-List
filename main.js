const form = document.getElementById("form")
const input = document.getElementById("input")
const TodoUL = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener('submit', (e) => {
e.preventDefault();

addTodo()
})


function addTodo(todo){
    let todoText = input.value
    if(todo){
        todoText = todo.text
    }
   if(todoText){
       const todoEl = document.createElement('li')
       if(todo && todo.Completed){
       todoEl.classList.add('Completed');
    }
       todoEl.innerText = todoText

/******************** Add Todo Form The List with Left Click*********************** */
        todoEl.addEventListener('click',() =>{
              todoEl.classList.toggle('Completed')
              UpdateSl()
            })

/******************** remove Todo Form The List with Right Click*********************** */
        todoEl.addEventListener('contextmenu',(e) =>{
                e.preventDefault();
                todoEl.remove();
        })
       TodoUL.appendChild(todoEl)
       input.value = ''
       UpdateSl()
   }
}

function UpdateSl(){
   todoEl = document.querySelectorAll('li')
   const todos = []
   todoEl.forEach(todoEl =>{
       todos.push({
           text: todoEl.innerText,
           Completed: todoEl.classList.contains('completed')

       })
   })
   localStorage.setItem('todos', JSON.stringify(todos))
}