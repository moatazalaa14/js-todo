class Todo{
    constructor(item){
        this.item =item;
    }
}
class UI{
    addtask(task){
        const task_list=document.querySelector('#list')
        const newTask=document.createElement('li')
        newTask.className='item'
        newTask.innerHTML=`
        <div>${task.item}<button id ="delete" onclick="del();"><i class="fa fa-trash" aria-hidden="true"></i>
        <button></div>
        `
        task_list.appendChild(newTask)
    }
    resetForm(){
        document.querySelector('form').reset();
    }
    deleteTask(elem){
           elem.parentElement.parentElement.remove();
    }}
    
class Store{
    getTasks(tasks){
        if(localStorage.getItem('tasks') === null){
            tasks =[];

        }else{
            tasks=JSON.parse(localStorage.getItem("tasks"))
        }
        return tasks;
    }
    addTaskToLocal(todo){
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'))
        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
    }
   
}
document.querySelector('#form').addEventListener('submit' ,(e)=>{
    e.preventDefault();
    const item =document.querySelector('.input').value ;
    const task = new Todo(item)
    const ui =new UI();
    const store =new Store()
    if(item === ""){
        window.alert('NO ITEM YET')
}
else{
    ui.addtask(task);
    ui.resetForm();
    store.addTaskToLocal(item);

}})
document.addEventListener('onload',()=>{
    const store = new Store()
    store.getTasks()
})
function del(){
    const ui = new UI()
    ui.deleteTask(document.querySelector('#delete'))
}





 



















