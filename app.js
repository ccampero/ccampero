const stateSelect = document.getElementById("stateSelect");
const monthSelect = document.getElementById("monthSelect");
const taskList = document.getElementById("taskList");
const stateTip = document.getElementById("stateTip");

const states = Object.keys(MAINTENANCE_DATA);

function fillSelect(selectElement, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.append(option);
  });
}

function renderTasks() {
  const state = stateSelect.value;
  const month = monthSelect.value;
  const profile = MAINTENANCE_DATA[state];
  const tasks = profile.monthlyTasks[month] ?? [
    "No custom tasks for this month yet. Focus on filter changes, leak checks, and exterior inspection."
  ];

  taskList.replaceChildren();
  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.textContent = task;
    taskList.append(item);
  });

  stateTip.textContent = profile.climateTip;
}

fillSelect(stateSelect, states);
fillSelect(monthSelect, MONTHS);

const currentMonth = MONTHS[new Date().getMonth()];
monthSelect.value = currentMonth;

stateSelect.addEventListener("change", renderTasks);
monthSelect.addEventListener("change", renderTasks);

renderTasks();
