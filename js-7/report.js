const reportsString = localStorage.getItem("reports");
const reports = JSON.parse(reportsString);

console.log(reports);

const reportsContainer = document.getElementById ("reports");
reports.forEach((report) => {
    reportsContainer.innerHTML += `
    <div class="report">
    <h2>${report.product}</h2>
    <p> ${report.manufacturer}</p>
    <p> ${report.category}</p>
    <h3>${report.title}</h3>
    </div>
    `;
});
