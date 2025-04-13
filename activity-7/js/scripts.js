//Array of tasks
var tasks = [];

//Task status
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task constructor
function Task(id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

//Creates and adds new task element
function addTaskElement(task){

    //Element creation
    var listElm = document.getElementById('active-list');
    var taskElm = document.createElement('li');
    var textElm = document.createTextNode(task.name);

    //Set attributes
    taskElm.setAttribute('id',task.id);

    //Add text to task element
    taskElm.appendChild(textElm);

    //Add task element to list
    listElm.appendChild(taskElm);
}

//Add new task on click
function addTask(event){

    var inputElm = document.getElementById('input-task');
    if(inputElm.value != ''){

        //Create unique id
        var id= 'item=' + tasks.length;

        //Create new task
        var task = new Task(id, inputElm.value, taskStatus.active);
        tasks.push(task);

        //add task element to the DOM
        addTaskElement(task);
        
        //Reset input
        inputElm.value = '';
    }
}

//Complete task on click
function completeTask(event){

    //Get the task element
    var taskElm = event.target;
    var id = taskElm.id;

    //Find corresponding task in task array and update its status
    for (var i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //Move task element from active list to completed list
    taskElm.remove();
    document.getElementById('completed-list').appendChild(taskElm);
}

//Initialize app
function init(){

    //Wire add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //Wire completed task list item click handler
    document.getElementById('active-list').onclick = completeTask;
}

init();