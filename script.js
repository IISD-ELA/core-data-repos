// Helper function to split CSV rows while respecting quotes
function splitCSV(row) {
  return row
    .match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)
    .map(cell => cell.replace(/^"|"$/g, ''));
}

// Helper function to merge consecutive cells with identical content
// Uses rowspan attribute to visually merge rows with the same values
function mergeSameConsecutiveCells(tableId, columnIndices) {
  const table = document.getElementById(tableId);
  const rows = Array.from(table.querySelectorAll('tr')).slice(1); // Skip header row

  // Process each column that needs merging
  columnIndices.forEach(colIndex => {
    let i = 0;
    while (i < rows.length) {
      const cellText = rows[i].children[colIndex].textContent.trim();
      let groupSize = 1;

      // Count consecutive rows with the same value in this column
      while (i + groupSize < rows.length && 
             rows[i + groupSize].children[colIndex].textContent.trim() === cellText) {
        groupSize++;
      }

      // If multiple rows share the same value, merge them
      if (groupSize > 1) {
        // Set rowspan on the first cell to span all matching rows
        rows[i].children[colIndex].setAttribute('rowspan', groupSize);
        // Hide the duplicate cells below
        for (let j = 1; j < groupSize; j++) {
          rows[i + j].children[colIndex].style.display = 'none';
        }
      }

      // Jump to the next group
      i += groupSize;
    }
  });
}

// Fetch and process Core Data Repos Table CSV
fetch("data/core-data-repos-table.csv")
  .then(response => response.text())
  .then(csvText => {
    const rows = csvText.trim().split("\n").map(splitCSV);
    const table = document.getElementById("core-data-repos-table");

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
    document.getElementById("core-data-repos-table").innerHTML =
      "<tr><td>Error loading CSV data</td></tr>";
  });

// Fetch and process date-ranges CSV
fetch("data/date-ranges.csv")
  .then(response => response.text())
  .then(csvText => {
    const rows = csvText.trim().split("\n").map(splitCSV);
    const table = document.getElementById("date-ranges-table");

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

    // Merge consecutive cells with identical content in columns 0, 1, 2
    mergeSameConsecutiveCells("date-ranges-table", [0, 1, 2]);
  })
  .catch(err => {
    console.error(err);
    document.getElementById("date-ranges-table").innerHTML =
      "<tr><td>Error loading CSV data</td></tr>";
  });
