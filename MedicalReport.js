class MedicalReport {
    toggleSection(id) {
        let el = document.getElementById(id);
        el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
    }

    toggleRow(checkbox) {
        let row = checkbox.parentElement;
        row.style.display = checkbox.checked ? "grid" : "none";
    }
}

// Create instance
const reportApp = new MedicalReport();
