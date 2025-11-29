fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network reponse was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (reports.length === 0 && Array.isArray(data)) {
      reports = reports.concat(data);
      console.log("Data from data.json successfully loaded");
      updateLocalStorage();
    }

    renderReportsTable();
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
    renderReportsTable();
  });

let reports = [];
reportString = localStorage.getItem("reports");

if (reportString) {
  try {
    reports = JSON.parse(reportString);
  } catch (e) {
    console.error("Error data", e);
    reports = [];
  }
}
let editId = null;

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

document.getElementById("reportsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const product = document.getElementById("reportProduct").value;
  const manufacturer = document.getElementById("reportManu").value;
  const category = document.getElementById("reportCategory").value;
  const dateReleased = document.getElementById("reportDateReleased").value;
  const title = document.getElementById("reportTitle").value;
  if (editId === null) {
    const newReport = {
      id: uuidv4(),
      product,
      manufacturer,
      category,
      dateReleased,
      title,
    };
    reports.unshift(newReport);
    localStorage.setItem("reports", JSON.stringify(reports));
  } else {
    console.log(editId);
    const report = reports.find((report) => report.id === editId);
    report.product = product;
    report.manufacturer = manufacturer;
    report.category = category;
    report.dateReleased = dateReleased;
    report.title = title;
    disableEditMode();
  }
  updateLocalStorage();
  clearForm();
  renderReportsTable();
});
function clearForm() {
  document.getElementById("reportProduct").value = "";
  document.getElementById("reportManu").value = "";
  document.getElementById("reportCategory").value = "";
  document.getElementById("reportDateReleased").value = "";
  document.getElementById("reportTitle").value = "";
}
function disableEditMode() {
  editId = null;
  document.getElementById("submitBtn").innerText = "Create Report";
  document.getElementById("submitBtn").style.backgroundColor = "#ecba6eda";
  toggleCancelButton(false);
  clearForm();
}
function updateLocalStorage() {
  localStorage.setItem("reports", JSON.stringify(reports));
}
function renderReportsTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  reports.forEach((report) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${report.product}</td>
        <td>${report.manufacturer}</td>
        <td>${report.category}</td>
        <td>${report.dateReleased}</td>
        <td>${report.title}</td>
        <td class="action-btns">
        <button onclick="editReport('${report.id}')"> ✎𓂃</button>

        <button onclick="deleteReport('${report.id}')">🗑️</button>
</td>`;

    tableBody.appendChild(tr);
  });
}

function editReport(id) {
  console.log(id);

  report = reports.find((report) => report.id === id);
  console.log(report);
  editId = id;

  document.getElementById("reportProduct").value = report.product;
  document.getElementById("reportManu").value = report.manufacturer;
  document.getElementById("reportCategory").value = report.category;
  document.getElementById("reportDateReleased").value = report.dateReleased;
  document.getElementById("reportTitle").value = report.title;

  document.getElementById("submitBtn").innerText = "Update Report";
  document.getElementById("submitBtn").style.backgroundColor = "#75d3afff";
  toggleCancelButton(true);
}
function toggleCancelButton(show) {
  const cancelBtn = document.getElementById("cancelBtn");
  cancelBtn.style.display = show ? "inline-block" : "none";
}
document.getElementById("cancelBtn").addEventListener("click", function () {
  disableEditMode();
});
function deleteReport(reportId) {
  reports = reports.filter((report) => report.id !== reportId);
  console.log("Deleting the report with id:", reportId);

  if (editId === reportId) {
    disableEditMode();
  }
  updateLocalStorage();
  renderReportsTable();
}
