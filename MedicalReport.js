class MedicalReport {

    toggleSection(id) {

        const section = document.getElementById(id);

        if (section) {
            section.classList.toggle("hidden");
        }

    }

    preparePrint() {

        document.querySelectorAll(".report-section").forEach(section => {

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

                section.classList.add("hidden");

            }

        });

    }

    restorePrint() {

        document.querySelectorAll(".row-empty").forEach(row => {

            row.classList.remove("row-empty");

        });

        document.querySelectorAll(".report-section").forEach(section => {

            section.classList.remove("hidden");

        });

    }

    printReport() {

        this.preparePrint();

        setTimeout(() => {

            window.print();

            this.restorePrint();

        }, 100);

    }

}

const report = new MedicalReport();

window.onbeforeprint = () => report.preparePrint();
window.onafterprint = () => report.restorePrint();
