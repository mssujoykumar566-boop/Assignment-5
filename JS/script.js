


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

