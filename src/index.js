let taskList = document.querySelector("#tasks")
const newTask = document.querySelector("#create-task-form")


let redList = document.createElement("ul")
redList.id = "red";
taskList.append(redList);

let yellowList = document.createElement("ul");
yellowList.id = "yellow";
taskList.append(yellowList);

let greenList = document.createElement("ul")
greenList.id = "green";
taskList.append(greenList);

choosePriority(newTask)

newTask.addEventListener("submit", (e) => {
  e.preventDefault()
  let ourForm = e.target
  let taskStr = ourForm["new-task-description"].value
  let taskPriority = ourForm["priority"].value
  takeNewTask(taskStr, taskPriority)
})

function takeNewTask(taskStr, taskPriority) { 
  let taskLi = document.createElement("li");
  taskLi.innerText = taskStr;
  taskLi.style.color = taskPriority;
  if (taskPriority === "red") {
    redList.append(taskLi);
  } else if (taskPriority === "yellow") {
    yellowList.append(taskLi);
  } else {
    greenList.append(taskLi);
  }
  
  taskLi.addEventListener("click", () => {
    taskLi.remove()
  })
}

function choosePriority(object){
  let priority = ["red", "yellow", "green"]

  let select = document.createElement("select");
  select.name = "priority";
  select.id = "priority"

  for (const val of priority) {
    let option = document.createElement("option")
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.append(option)
  }

  let label = document.createElement("label")
  label.innerText = "Choose task priority: "
  label.htmlFor = "priority";
  
  object.prepend(select)
  object.prepend(label)
}