const inputTask = document.getElementById("todo-input");
const addBtn = document.getElementById("add-Btn");
const list = document.getElementById("todo-list");
const markc = document.getElementsByClassName("markComplete");
let removetasks = document.getElementsByClassName("removeTask");

document.addEventListener("DOMContentLoaded", () => {
  let prevData = JSON.parse(localStorage.getItem("TodoList")) || [];
  console.log("working");

  prevData.forEach((task) => {
    let addLi = creatli(task.id, task.text, task.completed);
    list.appendChild(addLi);
  });
  // console.log(prevData);
});

function creatli(id, text, complt) {
  let li = document.createElement("li");
  li.id = id;
  li.insertAdjacentHTML(
    "beforeend",
    `
    <span class="taskText ${complt ? "completed" : ""}">${text}</span>
              <div class="taskControls">
                <span class="markComplete" onclick="complete(event)">✓</span>
                <span class="removeTask" onclick="remove(event)">X</span>
              </div>
    
    `,
  );
  return li;
}
inputTask.addEventListener("keydown", function (ev) {
  if (ev.key === "Enter") {
    addTask();
  }
});
function addTask() {
  if (inputTask.value != "") {
    let nid = Date.now();
    list.appendChild(creatli(nid, inputTask.value, false));
    let newObj = {
      id: nid,
      text: inputTask.value,
      completed: false,
    };
    const TodoList = JSON.parse(localStorage.getItem("TodoList")) || [];
    TodoList.push(newObj);
    console.log(TodoList);
    console.log(newObj);

    localStorage.setItem("TodoList", JSON.stringify(TodoList));
    inputTask.value = "";
  }
}

function complete(e) {
  taskComplete = e.target.parentElement.parentElement;
  tasktext = taskComplete.firstElementChild;
  tasktext.classList.toggle("completed");
  const Data = JSON.parse(localStorage.getItem("TodoList")) || [];
  const taskComp = Data.find((task) => task.id == taskComplete.id);
  if (taskComp) {
    taskComp.completed = !taskComp.completed;
    localStorage.setItem("TodoList", JSON.stringify(Data));
  }
}

function remove(e) {
  taskToRemove = e.target.parentElement.parentElement;
  const Data = JSON.parse(localStorage.getItem("TodoList")) || [];
  let fltData = [];
  fltData = Data.filter((task) => taskToRemove.id != task.id);
  localStorage.setItem("TodoList", JSON.stringify(fltData));
  rm = document.getElementById(taskToRemove.id);
  list.removeChild(rm);
}

function clearAll() {
  if (confirm("Do you want to clear all tasks?")) {
    list.replaceChildren();
    localStorage.setItem("TodoList", JSON.stringify([]));
  }
}
