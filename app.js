const stateSelect = document.getElementById("stateSelect");
const monthSelect = document.getElementById("monthSelect");
const taskList = document.getElementById("taskList");
const stateTip = document.getElementById("stateTip");
const yearlyChecklist = document.getElementById("yearlyChecklist");

const states = Object.keys(MAINTENANCE_DATA);

function fillSelect(selectElement, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.append(option);
  });
}

function renderList(container, entries) {
  container.replaceChildren();
  entries.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    container.append(item);
  });
}

function renderTasks() {
  const state = stateSelect.value;
  const month = monthSelect.value;
  const profile = MAINTENANCE_DATA[state];
  const monthlyTasks = profile.monthlyTasks[month] ?? [
    "No custom tasks for this month yet. Focus on filter changes, leak checks, and exterior inspection."
  ];

  renderList(taskList, monthlyTasks);
  renderList(yearlyChecklist, profile.yearlyChecklist);
  stateTip.textContent = profile.climateTip;
}

fillSelect(stateSelect, states);
fillSelect(monthSelect, MONTHS);

const currentMonth = MONTHS[new Date().getMonth()];
monthSelect.value = currentMonth;

stateSelect.addEventListener("change", renderTasks);
monthSelect.addEventListener("change", renderTasks);

renderTasks();
