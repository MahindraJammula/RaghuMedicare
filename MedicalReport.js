class MedicalReport {

    constructor() {
        this.hiddenSections = [];
    }

    toggleSection(id) {

        const section = document.getElementById(id);

        if (section) {
            section.classList.toggle("hidden");
        }

    }

    preparePrint() {

        this.hiddenSections = [];

        document.querySelectorAll(".report-section").forEach(section => {

            // Already manually hidden section
            if (section.classList.contains("hidden")) {
                this.hiddenSections.push(section.id);
                return;
            }

            let visibleRows = 0;

            section.querySelectorAll(".report-row").forEach(row => {

                const input = row.querySelector("input");

                if (input) {

                    if (input.value.trim() === "") {

                        row.classList.add("row-empty");

                    } else {

                        row.classList.remove("row-empty");
                        visibleRows++;

                    }

                }

            });

            if (visibleRows === 0) {

                section.classList.add("row-empty-section");

            }

        });

    }

    restorePrint() {

        document.querySelectorAll(".row-empty").forEach(row => {
            row.classList.remove("row-empty");
        });

        document.querySelectorAll(".row-empty-section").forEach(section => {
            section.classList.remove("row-empty-section");
        });

    }

    printReport() {

        this.preparePrint();

        setTimeout(() => {

            window.print();

        },100);

    }

}

const report = new MedicalReport();

window.onbeforeprint = () => report.preparePrint();
window.onafterprint = () => report.restorePrint();
