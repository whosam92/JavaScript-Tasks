document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const table = document.getElementById("dataTable");
  const rows = table.querySelectorAll("tbody tr");

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      let matchFound = false;

      // Reset highlights
      cells.forEach((cell) => {
        cell.innerHTML = cell.textContent; // Remove highlight
      });

      cells.forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(filter)) {
          matchFound = true;

          // Highlight matching text
          const regex = new RegExp(`(${filter})`, "gi");
          cell.innerHTML = cell.textContent.replace(
            regex,
            (match) => `<span class="highlight">${match}</span>`
          );
        }
      });

      // Show or hide row based on match
      row.style.display = matchFound ? "" : "none";
    });
  });
});
