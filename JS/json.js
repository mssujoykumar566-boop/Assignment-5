

// ===== Elements =====
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");
const issueCount = document.getElementById("issueCount");
const container = document.getElementById("issueContainer");
const loading = document.getElementById("loading");

let issues = [];

// ===== Load Issues from API =====
const loadIssues = async () => {
  try {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const result = await res.json();
    issues = result.data || [];
    displayIssues(issues);
    issueCount.innerText = issues.length + " Issues";
  } catch (err) {
    console.error("Failed to load issues:", err);
    container.innerHTML = "<p class='text-red-500'>Failed to load issues.</p>";
  }
};
loadIssues();

function showLoading() {
  loading.classList.remove("hidden");
  container.innerHTML = "";
}

function hideLoading() {
  loading.classList.add("hidden");
}

// ===== Modal JS =====
const task_modal = document.getElementById("task_modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalLabels = document.getElementById("modalLabels");
const modalDescription = document.getElementById("modalDescription");
const modalAssignee = document.getElementById("modalAssignee");
const modalPriority = document.getElementById("modalPriority");

// Close modal on X button or background click
closeModalBtn.addEventListener("click", () => task_modal.close());
task_modal.addEventListener("click", (e) => {
  if (e.target === task_modal) task_modal.close();
});

// Open modal & fetch issue
function openIssueModal(issueId) {
  // Reset modal
  modalTitle.innerText = "Loading...";
  modalDescription.innerText = "";
  modalMeta.innerText = "";
  modalLabels.innerHTML = "";
  modalAssignee.innerText = "-";
  modalPriority.innerText = "-";
  modalDescription.style.color = "#374151"; // default gray

  task_modal.showModal();

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`)
    .then(res => res.json())
    .then(res => {
      if (res.status === "success" && res.data) {
        const issue = res.data;

        // Title
        modalTitle.innerText = issue.title;

        // Status color
        const statusColor = issue.status === "open" ? "#22c55e" : "#7c3aed"; // Open green, Closed purple

        // Meta info with colored status
        modalMeta.innerHTML = `<span style="color:${statusColor}; font-weight:600;">${issue.status.toUpperCase()}</span> • Opened by ${issue.author} • ${new Date(issue.createdAt).toLocaleDateString()}`;

        // Description stays default color
        modalDescription.innerText = issue.description;

      
      // Labels
modalLabels.innerHTML = "";
issue.labels.forEach(label => {
  const span = document.createElement("span");
  span.className = "badge badge-outline text-xs bg-yellow-100 text-yellow-600"; // Tailwind yellow border
  span.innerText = label.toUpperCase();
  modalLabels.appendChild(span);
});

        // Assignee
        modalAssignee.innerText = issue.assignee || "-";

        // Priority
        modalPriority.innerText = issue.priority.toUpperCase();
      }
    })
    .catch(err => console.error("Failed to fetch issue:", err));
}
// ===== Display Issues in Cards =====
function displayIssues(issueList) {
  container.innerHTML = "";

  issueList.forEach(issue => {
    const statusClass = issue.status === "open" ? "card-open" : "card-closed";

    const labels = issue.labels.map(label => `
      <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">
        ${label.toUpperCase()}
      </span>
    `).join("");

    const card = document.createElement("div");
    card.className = `card ${statusClass} bg-white rounded-lg shadow p-4 border-t-4 cursor-pointer ${issue.status === "open" ? "border-green-500" : "border-purple-500"}`;
    
    card.innerHTML = `
      <div class="flex justify-between mb-2">
        <img src="assets/Open-Status.png" alt="">
        <span class="bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
          ${issue.priority.toUpperCase()}
        </span>
      </div>
      <h3 class="font-semibold text-sm mb-2">${issue.title}</h3>
      <p class="text-gray-500 text-xs mb-3">${issue.description}</p>
      <div class="flex gap-2 mb-3 flex-wrap">${labels}</div>
      <p class="text-gray-400 text-xs">
        #${issue.id} by ${issue.author} <br>
        ${new Date(issue.createdAt).toLocaleDateString()}
      </p>
    `;

    // Attach modal click
    card.onclick = () => openIssueModal(issue.id);

    container.appendChild(card);
  });
}

// ===== Active Tab Function =====
function setActive(btn) {
  [allBtn, openBtn, closedBtn].forEach(b => b.classList.remove("active-tab"));
  btn.classList.add("active-tab");
}

// ===== Filter Buttons =====
allBtn.addEventListener("click", () => {

  setActive(allBtn);
  showLoading();

  setTimeout(() => {
    displayIssues(issues);
    issueCount.innerText = issues.length + " Issues";
    hideLoading();
  }, 400);

});

openBtn.addEventListener("click", () => {

  setActive(openBtn);
  showLoading();

  setTimeout(() => {
    const openIssues = issues.filter(i => i.status === "open");
    displayIssues(openIssues);
    issueCount.innerText = openIssues.length + " Issues";
    hideLoading();
  }, 400);

});

closedBtn.addEventListener("click", () => {

  setActive(closedBtn);
  showLoading();

  setTimeout(() => {
    const closedIssues = issues.filter(i => i.status === "closed");
    displayIssues(closedIssues);
    issueCount.innerText = closedIssues.length + " Issues";
    hideLoading();
  }, 400);

});