const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

const text = taskInput.value.trim();

if(text===""){
alert("Enter a task");
return;
}

tasks.push({
text:text,
completed:false
});

taskInput.value="";

saveTasks();

displayTasks();

}

function displayTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

if(task.completed){

li.classList.add("completed");

}

li.innerHTML=`
<span>${task.text}</span>

<div class="actions">

<button class="complete" onclick="toggleTask(${index})">✓</button>

<button class="edit" onclick="editTask(${index})">✎</button>

<button class="delete" onclick="deleteTask(${index})">🗑</button>

</div>
`;

taskList.appendChild(li);

});

taskCount.innerHTML="Total Tasks : "+tasks.length;

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();

displayTasks();

}

function editTask(index){

let newTask=prompt("Edit Task",tasks[index].text);

if(newTask!==null && newTask.trim()!==""){

tasks[index].text=newTask;

saveTasks();

displayTasks();

}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}