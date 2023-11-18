document.addEventListener("DOMContentLoaded", function(){
    const taskInput = document.getElementById("newTask");
    const addButton = document.getElementById("addTask");
    const taskList = document.getElementById("tasklist");
    const completedTask = document.getElementById("completed")


    addButton.addEventListener("click", function(){
        let TaskName = taskInput.value.trim();
        taskInput.value='';

        addTask(TaskName)
       
    });

    function addTask(TaskName){
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${TaskName}</span>
            <button class="complete"> Complete </button>
            <button class="delete"> Delete </button>
        `;
        taskList.appendChild(li);
        
    };

    
    taskList.addEventListener("click", function(event){

        if (event.target.classList.contains("complete")){

            const Task = event.target.parentElement;
            Task.classList.toggle("completed");

            if (Task.classList.contains("completed")){
                CompleteTask(Task);
            } else {
                MoveTaskBack(Task);
            };

        } else if (event.target.classList.contains("delete")){
            event.target.parentElement.parentElement.remove();
        }
    });


    function CompleteTask(Task){
        const taskText = Task.querySelector('span').textContent;
        const newRow = completedTask.insertRow();
        newRow.innerHTML = `
            <td>${taskText}</td>
        `;

        Task.remove();

    };

    function MoveTaskBack(Task){
        Task.classList.remove('completed');
        taskList.appendChild(Task)
    };
    
});