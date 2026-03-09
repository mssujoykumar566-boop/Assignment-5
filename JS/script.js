// const allBtn = document.getElementById("allBtn");
// const openBtn = document.getElementById("openBtn");
// const closedBtn = document.getElementById("closedBtn");

// const issueCount = document.getElementById("issueCount");

// const allCards = document.querySelectorAll(".card");
// const openCards = document.querySelectorAll(".card-open");
// const closedCards = document.querySelectorAll(".card-closed");

// // Array of all buttons
// const buttons = [allBtn, openBtn, closedBtn];

// // Function to set active button
// function setActive(btn) {
//     buttons.forEach(b => b.classList.remove("active-tab")); // remove active from all
//     btn.classList.add("active-tab"); // add active to clicked
// }

// // Hide all cards
// function hideAllCards(){
//     allCards.forEach(card=>{
//         card.classList.add("hidden");
//     });
// }

// // Show selected cards
// function showCards(cards){
//     hideAllCards();
//     cards.forEach(card=>{
//         card.classList.remove("hidden");
//     });
// }

// // ===== Initial Load =====
// window.addEventListener("DOMContentLoaded", ()=>{
//     setActive(allBtn); // All selected initially
//     allCards.forEach(card => card.classList.remove("hidden"));
//     issueCount.innerText = allCards.length + " Issues";
// });

// // ===== Button Events =====
// allBtn.addEventListener("click", ()=>{
//     setActive(allBtn);
//     showCards(allCards);
//     issueCount.innerText = allCards.length + " Issues";
// });

// openBtn.addEventListener("click", ()=>{
//     setActive(openBtn);
//     showCards(openCards);
//     issueCount.innerText = openCards.length + " Issues";
// });

// closedBtn.addEventListener("click", ()=>{
//     setActive(closedBtn);
//     showCards(closedCards);
//     issueCount.innerText = closedCards.length + " Issues";
// });

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

  const searchText = searchInput.value.trim();

  if (searchText === "") {
    displayIssues(issues); // empty হলে সব issue দেখাবে
    return;
  }

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
    .then(res => res.json())
    .then(data => {

      if (data.status === "success") {
        displayIssues(data.data); // search result দেখাবে
        issueCount.innerText = data.data.length + " Issues";
      }

    })
    .catch(err => console.error("Search failed:", err));

});