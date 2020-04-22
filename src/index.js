// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });


let taskList = document.querySelector("#tasks")

const newTask = document.querySelector("#create-task-form")

newTask.addEventListener("submit", (e) => {
  e.preventDefault()
  // debugger
  let ourForm = e.target
  let taskInput = ourForm["new-task-description"]
  let taskStr = taskInput.value
  
  takeNewTask(taskStr)
  
})

function takeNewTask(aTaskStr) {
  let taskLi = document.createElement("li")
  taskLi.innerText = aTaskStr
  taskList.append(taskLi)
  
  taskLi.addEventListener("click", () => {
    taskLi.remove()
  })
}

newTask.onsubmit = function(){
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
    label.innerHTML = "Choose your priority: "
    label.htmlfor = "priority";
    
    newTask.appendChild(label).appendChild(select)
}
