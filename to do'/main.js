let form = document.getElementById('todoform')
let todoInput = document.getElementById('newtodo')

let todos = []

form.addEventListener('submit', function (event) {
    event.preventDefault();

    saveTodo();
    renderTodos();
});


function saveTodo() {
    const todoValue = todoInput.value

    const isEmpty = todoValue === '';

    const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());


    if (isEmpty) {
        alert("todo's input is empty")
    }
    else if (isDuplicate) {
        alert("Todo already exists!")
    }
    else{

        todos.push({
            value: todoValue,
            checked: false,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16)
            });
        todoInput.value= ''
    }
}

function reader() {
    
}
