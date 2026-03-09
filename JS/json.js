

// // const loadIssues = () => {
// //     fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
// //     .then((res) => res.json())
// //   .then((json) => displayUssues(json.data))
// // };


// //  const displayUssues = (issues) => {
// // //    1.get the container & empty
// // const issueContainer = document.getElementById("issue-container")
// // issueContainer.innerHTML = "";
// // //    2.get into  every lessons
// // for (let issue of issues){

// //     //    3.create Element
// //     const btnDiv =  document.createElement("div");
// //     btnDiv.innerHTML = `

// //     `
// //     //    4.append into container
// // }

// //  }
// //  loadIssues();
// const allBtn = document.getElementById("allBtn");
// const openBtn = document.getElementById("openBtn");
// const closedBtn = document.getElementById("closedBtn");
// const issueCount = document.getElementById("issueCount");
// const container = document.getElementById("issueContainer");

// let issues = [];

// /* ===============================
// Load API Data
// ================================ */

// const loadIssues = () => {

//   fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//   .then(res => res.json())
//   .then(result => {
//     issues = result.data || [];
//     displayIssues(issues);
//     issueCount.innerText = issues.length + " Issues";
//   });

// };

// loadIssues();


// // Display Cards


// function displayIssues(issueList){

//   container.innerHTML = "";

//   issueList.forEach(issue => {

//     // Add open/closed class dynamically
//     const statusClass = issue.status === "open" ? "card-open" : "card-closed";

//     const labels = issue.labels.map(label => `
//       <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">
//         ${label.toUpperCase()}
//       </span>
//     `).join("");

//     const card = `
//       <div class="card ${statusClass} bg-white rounded-lg shadow p-4 border-t-4 ${issue.status === "open" ? "border-green-500" : "border-purple-500"}">

//         <div class="flex justify-between mb-2">

//     <img src="assets/Open-Status.png" alt="">

//           <span class="bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
//             ${issue.priority.toUpperCase()}
//           </span>
//         </div>

//         <h3 class="font-semibold text-sm mb-2">
//           ${issue.title}
//         </h3>

//         <p class="text-gray-500 text-xs mb-3">
//           ${issue.description}
//         </p>

//         <div class="flex gap-2 mb-3 flex-wrap">
//           ${labels}
//         </div>

//         <p class="text-gray-400 text-xs">
//           #${issue.id} by ${issue.author} <br>
//           ${new Date(issue.createdAt).toLocaleDateString()}
//         </p>
//       </div>
//     `;

//     container.innerHTML += card;
    

//   });

// }

// // Active Tab Function 

// function setActive(btn){
//   [allBtn, openBtn, closedBtn].forEach(json=>{
//     json.classList.remove("active-tab");
//   });
//   btn.classList.add("active-tab");
// }


// // Filter Events


// allBtn.addEventListener("click", ()=>{
//   setActive(allBtn);
//   displayIssues(issues);
//   issueCount.innerText = issues.length + " Issues";
// });

// openBtn.addEventListener("click", ()=>{
//   setActive(openBtn);
//   const openIssues = issues.filter(i=>i.status === "open");
//   displayIssues(openIssues);
//   issueCount.innerText = openIssues.length + " Issues";
// });

// closedBtn.addEventListener("click", ()=>{
//   setActive(closedBtn);
//   const closedIssues = issues.filter(i=>i.status === "closed");
//   displayIssues(closedIssues);
//   issueCount.innerText = closedIssues.length + " Issues";
// });


// // ===============================
// // Modal Elements
// // ===============================
// const issueModal = document.getElementById("issueModal");
// const closeModal = document.getElementById("closeModal");

// const modalTitle = document.getElementById("modalTitle");
// const modalDesc = document.getElementById("modalDesc");
// const modalLabels = document.getElementById("modalLabels");
// const modalPriority = document.getElementById("modalPriority");
// const modalStatus = document.getElementById("modalStatus");


// // ===============================
// // Open Modal & Load Issue Data
// // ===============================
// async function openIssueModal(issueId){

//     try{

//         const res = await fetch(
//             `https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`
//         );

//         const json = await res.json();
//         const issue = json.data;

//         if(!issue) return;

//         modalTitle.innerText = issue.title;
//         modalDesc.innerText = issue.description;

//         modalPriority.innerText = "Priority: " + issue.priority.toUpperCase();
//         modalStatus.innerText = "Status: " + issue.status.toUpperCase();

//         // Labels array render
//         modalLabels.innerHTML = issue.labels.map(label => `
//             <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">
//                 ${label.toUpperCase()}
//             </span>
//         `).join("");

//         // Show modal
//         issueModal.classList.remove("hidden");
//         issueModal.classList.add("flex");

//     }catch(err){
//         console.log(err);
//     }
// }


// // ===============================
// // Close Modal
// // ===============================
// function closeIssueModal(){
//     issueModal.classList.add("hidden");
//     issueModal.classList.remove("flex");
// }


// // ===============================
// // Event Listener
// // ===============================
// if(closeModal){
//     closeModal.addEventListener("click", closeIssueModal);
// }

// if(issueModal){
//     issueModal.addEventListener("click", e=>{
//         if(e.target === issueModal){
//             closeIssueModal();
//         }
//     });
// }
// card.onclick = ()=> openIssueModal(issue.id);
// ===== Elements =====
// ===== Elements =====
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");
const issueCount = document.getElementById("issueCount");
const container = document.getElementById("issueContainer");

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
  displayIssues(issues);
  issueCount.innerText = issues.length + " Issues";
});

openBtn.addEventListener("click", () => {
  setActive(openBtn);
  const openIssues = issues.filter(i => i.status === "open");
  displayIssues(openIssues);
  issueCount.innerText = openIssues.length + " Issues";
});

closedBtn.addEventListener("click", () => {
  setActive(closedBtn);
  const closedIssues = issues.filter(i => i.status === "closed");
  displayIssues(closedIssues);
  issueCount.innerText = closedIssues.length + " Issues";
});