
console.log("JS is loaded!");
fetch("data/library_collection.json")






    .then(res => res.json())
    .then(data => {
        if (!data || !data.length) return;

        const table = document.createElement("table");
        table.classList.add("data-table"); // Use your CSS styling

        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        const headers = Object.keys(data[0]);
        const headerRow = document.createElement("tr");
        headers.forEach(h => {
            const th = document.createElement("th");
            th.textContent = h;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

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

        const container = document.querySelector(".page-container");
        container.appendChild(table);
    })
    .catch(err => console.error(err));
