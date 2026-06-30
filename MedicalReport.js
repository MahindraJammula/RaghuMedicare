class MedicalReport {
    toggleSection(id) {
        let el = document.getElementById(id);
        el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
    }

    toggleRow(rowId) {
        let row = document.getElementById(rowId);
        if (row) row.classList.toggle('hidden-row');
    }

    printReport() {
        let container = document.querySelector('.report-container');
        let tempContainer = container.cloneNode(true); // అసలు డేటా పోకుండా కాపీ చేసుకుంటున్నాం

        // ఎంప్టీ ఇన్పుట్స్ ఉన్న రోస్ ని రిమూవ్ చేయడం
        let rows = tempContainer.querySelectorAll('.row');
        rows.forEach(row => {
            let input = row.querySelector('input[type="text"]');
            if (input && input.value.trim() === "") {
                row.remove(); // ఇక్కడ ఎలిమెంట్ డిలీట్ అవుతుంది, గ్యాప్ ఉండదు
            }
        });

        // సెక్షన్ లో టెస్ట్ లు లేకపోతే సెక్షన్ ని రిమూవ్ చేయడం
        tempContainer.querySelectorAll('.section').forEach(section => {
            if (section.querySelectorAll('.row').length === 0) {
                section.remove();
            }
        });

        // ప్రింట్ చేయడానికి ఒక కొత్త విండో
        let printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Lab Report</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">'); // నీ CSS ని లోడ్ చేస్తుంది
        printWindow.document.write('</head><body>');
        printWindow.document.write(tempContainer.innerHTML);
        printWindow.document.write('</body></html>');
        
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    }
}
const reportApp = new MedicalReport();
