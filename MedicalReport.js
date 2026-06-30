class MedicalReport {
    // Section show/hide
    toggleSection(id) {
        let el = document.getElementById(id);
        el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
    }

    // Row hide/show using ID
    toggleRow(rowId) {
        let row = document.getElementById(rowId);
        if (row) {
            row.classList.toggle('hidden-row');
        }
    }

    // New Print Functionality
    printReport() {
        // 1. Hide empty rows
        document.querySelectorAll('.row').forEach(row => {
            let input = row.querySelector('input[type="text"]');
            if (input && input.value.trim() === "") {
                row.classList.add('row-empty');
            }
        });

        // 2. Hide empty sections
        document.querySelectorAll('.section').forEach(section => {
            let visibleRows = section.querySelectorAll('.row:not(.row-empty)');
            // హెడర్ రో తప్ప ఇంకేమీ లేకపోతే సెక్షన్ హైడ్ చెయ్
            if (visibleRows.length <= 1) {
                section.classList.add('hidden-section');
            }
        });

        window.print();

        // 3. Cleanup after print
        setTimeout(() => {
            document.querySelectorAll('.row-empty').forEach(r => r.classList.remove('row-empty'));
            document.querySelectorAll('.hidden-section').forEach(s => s.classList.remove('hidden-section'));
        }, 500);
    }
}

// Create instance
const reportApp = new MedicalReport();
