// Helper function to split CSV rows while respecting quotes
function splitCSV(row) {
  return row
    .match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)
    .map(cell => cell.replace(/^"|"$/g, ''));
}

// Fetch and process CSV
fetch("data/core-data-repos-table.csv")
  .then(response => response.text())
  .then(csvText => {
    const rows = csvText.trim().split("\n").map(splitCSV);
    const table = document.getElementById("data-table");

    rows.forEach((row, rowIndex) => {
      const tr = document.createElement("tr");

      row.forEach(cell => {
        const el = document.createElement(rowIndex === 0 ? "th" : "td");

        // Render one or more hyperlinks via label|url, separated by commas
        if (rowIndex !== 0 && cell.includes("|")) {
          const parts = cell.split(","); // multiple links

          parts.forEach((part, index) => {
            const [label, url] = part.split("|", 2);

            if (url && url.trim().startsWith("http")) {
              const link = document.createElement("a");
              link.href = url.trim();
              link.textContent = label.trim();
              link.target = "_blank";
              el.appendChild(link);

              // Add separator between links
              if (index < parts.length - 1) {
                el.appendChild(document.createTextNode(", "));
              }
            } else {
              el.appendChild(document.createTextNode(part));
            }
          });
        } else {
          el.textContent = cell;
        }

        tr.appendChild(el);
      });

      table.appendChild(tr);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("data-table").innerHTML =
      "<tr><td>Error loading CSV data</td></tr>";
  });
