let todos = [
  { id: 1719134000000, text: "Finish JavaScript Stopwatch", completed: false },
  { id: 1719134088888, text: "Push code to GitHub", completed: true },
];
// DOM refs

const inputTask = document.getElementById("todo-input");
const addBtn = document.getElementById("add-Btn");
const list = document.getElementById("todo-list");
const markc = document.getElementsByClassName("markComplete");
let removetasks = document.getElementsByClassName("removeTask");

function creatli(id, text) {
  let li = document.createElement("li");
  li.id = id;
  li.insertAdjacentHTML(
    "beforeend",
    `
    <span class="taskText">${text}</span>
              <div class="taskControls">
                <span class="markComplete">✓</span>
                <span class="removeTask" onclick="remove(event)">X</span>
              </div>
    
    `,
  );

  return li;
}
function addTask() {
  if (inputTask.value != "") {
    let id = Date.now();
    list.appendChild(creatli(id, inputTask.value));
    inputTask.value = "";
  }
}
// OLD LOGIC

// console.log(removetasks);
// for (const task of removetasks) {
//   console.log(removetasks);
//   task.addEventListener("click", (e) => {
//     taskToRemove = e.target.parentElement.parentElement;
//     rm = document.getElementById(taskToRemove.id);
//     list.removeChild(rm);
//   });
// }
function remove(e) {
  taskToRemove = e.target.parentElement.parentElement;
  rm = document.getElementById(taskToRemove.id);
  list.removeChild(rm);
}

function clearAll() {
  if (confirm("Do you want to clear all tasks?")) {
    list.replaceChildren();
  }
}
