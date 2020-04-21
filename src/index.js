// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

let priority = [red, yellow, green]

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