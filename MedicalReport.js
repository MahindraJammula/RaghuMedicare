class MedicalReport {
    // Section show/hide
    toggleSection(id) {
        let el = document.getElementById(id);
        el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
    }

    // Row hide/show using ID (This is what you need for the buttons)
    toggleRow(rowId) {
        let row = document.getElementById(rowId);
        if (row) {
            row.classList.toggle('hidden-row');
        }
    }
}

// Create instance
const reportApp = new MedicalReport();
