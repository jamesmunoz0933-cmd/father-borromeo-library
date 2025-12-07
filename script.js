console.log("JS is loaded!");

// Fetch JSON file
fetch("data/library_collection")
    .then(res => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
    })
    .then(data => {
        if (!data || !data.length) return;

        const table = document.createElement("table");
        table.classList.add("data-table"); // apply CSS style

        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // Create headers
        const headers = Object.keys(data[0]);
        const headerRow = document.createElement("tr");
        headers.forEach(h => {
            const th = document.createElement("th");
            th.textContent = h;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Create table rows
        data.forEach(row => {
            const tr = document.createElement("tr");
            headers.forEach(h => {
                const td = document.createElement("td");
                td.textContent = row[h];
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        // Append table to page container
        const container = document.querySelector(".page-container");
        container.appendChild(table);
    })
    .catch(err => console.error("Failed to fetch JSON:", err));

