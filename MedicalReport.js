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

function toggleRow(rowId) {
    let row = document.getElementById(rowId);
    row.classList.toggle('hidden-row'); // ఇది కొత్త క్లాస్ ని యాడ్/రిమూవ్ చేస్తుంది
}

// Create instance
const reportApp = new MedicalReport();
