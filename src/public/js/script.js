// sidebar & navbar
const hamburger = document.getElementById("hamburger")
const sidebar = document.querySelector("nav")
const menuSides = document.querySelectorAll(".menu-side")
const logoName = document.querySelector(".logo-name")
const boxDashboard = document.querySelector(".box-dashboard")
const boxNav = document.querySelector(".box-nav")
const profile = document.getElementById("profile")
const logout = document.getElementById("logout")
function addClassesSafe(el, classes) {
    classes.forEach(cls => {
        if (!el.classList.contains(cls)) {
            el.classList.add(cls);
        }
    });
}
function removeClassesSafe(el, classes) {
    classes.forEach(cls => {
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
    });
}
const breakpoints = [
    { name: "sm", min: 640 },
    { name: "md", min: 768 },
    { name: "lg", min: 1024 },
    { name: "xl", min: 1280 }
];
let lastBP = "";
function checkBreakpoint() {
    let width = window.innerWidth;
    let currentBP = breakpoints.reduce((acc, bp) => width >= bp.min ? bp.name : acc, "xs");
    if (currentBP !== lastBP) {
        console.log("Breakpoint berubah ke:", currentBP);
        lastBP = currentBP;
        menuSides.forEach(span => {
            addClassesSafe(span, [
                "not-sm:opacity-0",
                "sm:opacity-0",
                "md:opacity-0",
                "lg:opacity-100",
                "lg:pointer-events-auto",
            ])
            removeClassesSafe(span, [
                "opacity-0",
                "opacity-100",
                "pointer-events-none",
            ])
        })
        addClassesSafe(logoName, [
            "not-sm:opacity-0",
            "sm:opacity-0",
            "md:opacity-0",
            "lg:opacity-100",
        ])
        removeClassesSafe(logoName, [
            "opacity-100",
            "opacity-0",
        ])
        addClassesSafe(sidebar, [
            "not-sm:w-[73px]",
            "sm:w-[73px]",
            "md:w-[73px]",
            "lg:w-[250px]",
        ])
        addClassesSafe(boxDashboard, [
            "not-sm:left-[73px]",
            "sm:left-[73px]",
            "md:left-[73px]",
            "lg:left-[250px]",
            "not-sm:w-[calc(100%-73px)]",
            "sm:w-[calc(100%-73px)]",
            "md:w-[calc(100%-73px)]",
            "lg:w-[calc(100%-250px)]"
        ]);
        addClassesSafe(boxNav, [
            "not-sm:left-[73px]",
            "sm:left-[73px]",
            "md:left-[73px]",
            "lg:left-[250px]",
            "not-sm:w-[calc(100%-73px)]",
            "sm:w-[calc(100%-73px)]",
            "md:w-[calc(100%-73px)]",
            "lg:w-[calc(100%-250px)]"
        ]);
        removeClassesSafe(sidebar, [
            "w-[73px]",
            "w-[250px]",
        ])
        removeClassesSafe(boxDashboard, [
            "left-[73px]",
            "left-[250px]",
            "w-[calc(100%-73px)]",
            "w-[calc(100%-250px)]",
        ])
        removeClassesSafe(boxNav, [
            "left-[73px]",
            "left-[250px]",
            "w-[calc(100%-73px)]",
            "w-[calc(100%-250px)]",
        ])
    }
}
hamburger.addEventListener("click", () => {
    if (lastBP == "xl") {
        console.log("klik xl => ", lastBP);
        sidebar.classList.toggle("w-[73px]")
        sidebar.classList.toggle("not-sm:w-[73px]")
        sidebar.classList.toggle("sm:w-[73px]")
        sidebar.classList.toggle("md:w-[73px]")
        sidebar.classList.toggle("lg:w-[250px]")
        logoName.classList.toggle("opacity-0")
        logoName.classList.toggle("not-sm:opacity-0")
        logoName.classList.toggle("sm:opacity-0")
        logoName.classList.toggle("md:opacity-0")
        logoName.classList.toggle("lg:opacity-100")

        boxDashboard.classList.toggle("left-[73px]")
        boxDashboard.classList.toggle("not-sm:left-[73px]")
        boxDashboard.classList.toggle("sm:left-[73px]")
        boxDashboard.classList.toggle("md:left-[73px]")
        boxDashboard.classList.toggle("lg:left-[250px]")

        boxDashboard.classList.toggle("w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("md:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("lg:w-[calc(100%-250px)]")

        boxNav.classList.toggle("left-[73px]")
        boxNav.classList.toggle("not-sm:left-[73px]")
        boxNav.classList.toggle("sm:left-[73px]")
        boxNav.classList.toggle("md:left-[73px]")
        boxNav.classList.toggle("lg:left-[250px]")

        boxNav.classList.toggle("w-[calc(100%-73px)]")
        boxNav.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("md:w-[calc(100%-73px)]")
        boxNav.classList.toggle("lg:w-[calc(100%-250px)]")
        menuSides.forEach(span => {
            span.classList.toggle("opacity-0")
            span.classList.toggle("not-sm:opacity-0")
            span.classList.toggle("sm:opacity-0")
            span.classList.toggle("md:opacity-0")
            span.classList.toggle("lg:opacity-100")
            span.classList.toggle("pointer-events-none")
            span.classList.toggle("lg:pointer-events-auto")
        })
    } else if (lastBP == "lg") {
        console.log("klik lg => ", lastBP);
        sidebar.classList.toggle("w-[73px]")
        sidebar.classList.toggle("not-sm:w-[73px]")
        sidebar.classList.toggle("sm:w-[73px]")
        sidebar.classList.toggle("md:w-[73px]")
        sidebar.classList.toggle("lg:w-[250px]")
        logoName.classList.toggle("opacity-0")
        logoName.classList.toggle("not-sm:opacity-0")
        logoName.classList.toggle("sm:opacity-0")
        logoName.classList.toggle("md:opacity-0")
        logoName.classList.toggle("lg:opacity-100")

        boxDashboard.classList.toggle("left-[73px]")
        boxDashboard.classList.toggle("not-sm:left-[73px]")
        boxDashboard.classList.toggle("sm:left-[73px]")
        boxDashboard.classList.toggle("md:left-[73px]")
        boxDashboard.classList.toggle("lg:left-[250px]")

        boxDashboard.classList.toggle("w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("md:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("lg:w-[calc(100%-250px)]")

        boxNav.classList.toggle("left-[73px]")
        boxNav.classList.toggle("not-sm:left-[73px]")
        boxNav.classList.toggle("sm:left-[73px]")
        boxNav.classList.toggle("md:left-[73px]")
        boxNav.classList.toggle("lg:left-[250px]")

        boxNav.classList.toggle("w-[calc(100%-73px)]")
        boxNav.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("md:w-[calc(100%-73px)]")
        boxNav.classList.toggle("lg:w-[calc(100%-250px)]")
        menuSides.forEach(span => {
            span.classList.toggle("opacity-0")
            span.classList.toggle("not-sm:opacity-0")
            span.classList.toggle("sm:opacity-0")
            span.classList.toggle("md:opacity-0")
            span.classList.toggle("lg:opacity-100")
            span.classList.toggle("pointer-events-none")
            span.classList.toggle("lg:pointer-events-auto")
        })
    } else if (lastBP == "md") {
        console.log("klik md => ", lastBP);
        sidebar.classList.toggle("w-[250px]")
        sidebar.classList.toggle("not-sm:w-[73px]")
        sidebar.classList.toggle("sm:w-[73px]")
        sidebar.classList.toggle("md:w-[73px]")
        sidebar.classList.toggle("lg:w-[250px]")
        logoName.classList.toggle("opacity-100")
        logoName.classList.toggle("not-sm:opacity-0")
        logoName.classList.toggle("sm:opacity-0")
        logoName.classList.toggle("md:opacity-0")
        logoName.classList.toggle("lg:opacity-100")

        boxDashboard.classList.toggle("left-[250px]")
        boxDashboard.classList.toggle("not-sm:left-[73px]")
        boxDashboard.classList.toggle("sm:left-[73px]")
        boxDashboard.classList.toggle("md:left-[73px]")
        boxDashboard.classList.toggle("lg:left-[250px]")

        boxDashboard.classList.toggle("w-[calc(100%-250px)]")
        boxDashboard.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("md:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("lg:w-[calc(100%-250px)]")

        boxNav.classList.toggle("left-[250px]")
        boxNav.classList.toggle("not-sm:left-[73px]")
        boxNav.classList.toggle("sm:left-[73px]")
        boxNav.classList.toggle("md:left-[73px]")
        boxNav.classList.toggle("lg:left-[250px]")

        boxNav.classList.toggle("w-[calc(100%-250px)]")
        boxNav.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("md:w-[calc(100%-73px)]")
        boxNav.classList.toggle("lg:w-[calc(100%-250px)]")
        menuSides.forEach(span => {
            span.classList.toggle("opacity-100")
            span.classList.toggle("not-sm:opacity-0")
            span.classList.toggle("sm:opacity-0")
            span.classList.toggle("md:opacity-0")
            span.classList.toggle("lg:opacity-100")
            span.classList.toggle("pointer-events-none")
            span.classList.toggle("lg:pointer-events-auto")
        })
    } else if (lastBP == "sm") {
        console.log("klik sm => ", lastBP);
        sidebar.classList.toggle("w-[250px]")
        sidebar.classList.toggle("not-sm:w-[73px]")
        sidebar.classList.toggle("sm:w-[73px]")
        sidebar.classList.toggle("md:w-[73px]")
        sidebar.classList.toggle("lg:w-[250px]")
        logoName.classList.toggle("opacity-100")
        logoName.classList.toggle("not-sm:opacity-0")
        logoName.classList.toggle("sm:opacity-0")
        logoName.classList.toggle("md:opacity-0")
        logoName.classList.toggle("lg:opacity-100")

        boxDashboard.classList.toggle("left-[250px]")
        boxDashboard.classList.toggle("not-sm:left-[73px]")
        boxDashboard.classList.toggle("sm:left-[73px]")
        boxDashboard.classList.toggle("md:left-[73px]")
        boxDashboard.classList.toggle("lg:left-[250px]")

        boxDashboard.classList.toggle("w-[calc(100%-250px)]")
        boxDashboard.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("sm:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("md:w-[calc(100%-73px)]")
        boxDashboard.classList.toggle("lg:w-[calc(100%-250px)]")

        boxNav.classList.toggle("left-[250px]")
        boxNav.classList.toggle("not-sm:left-[73px]")
        boxNav.classList.toggle("sm:left-[73px]")
        boxNav.classList.toggle("md:left-[73px]")
        boxNav.classList.toggle("lg:left-[250px]")

        boxNav.classList.toggle("w-[calc(100%-250px)]")
        boxNav.classList.toggle("not-sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("sm:w-[calc(100%-73px)]")
        boxNav.classList.toggle("md:w-[calc(100%-73px)]")
        boxNav.classList.toggle("lg:w-[calc(100%-250px)]")
        menuSides.forEach(span => {
            span.classList.toggle("opacity-100")
            span.classList.toggle("not-sm:opacity-0")
            span.classList.toggle("sm:opacity-0")
            span.classList.toggle("md:opacity-0")
            span.classList.toggle("lg:opacity-100")
            span.classList.toggle("pointer-events-none")
            span.classList.toggle("lg:pointer-events-auto")
        })
    } else {
        console.log("klik xs => ", lastBP);
    }
})
checkBreakpoint();
window.addEventListener("resize", checkBreakpoint);

profile.addEventListener("click", () => {
    logout.classList.toggle("hidden")
})

// data table
const data = [
    { name: "Farhan", email: "farhan32@gmail.com", joined: "Aug 09, 2025", role: "Admin" },
    { name: "Aisyah", email: "aisyah21@gmail.com", joined: "Jul 18, 2025", role: "User" },
    { name: "Rizky", email: "rizky99@gmail.com", joined: "Jun 25, 2025", role: "Programmer" },
    { name: "Siti", email: "siti.rahma@gmail.com", joined: "May 10, 2025", role: "Moderator" },
    { name: "Budi", email: "budianto45@gmail.com", joined: "Apr 02, 2025", role: "User" },
    { name: "Nabila", email: "nabila88@gmail.com", joined: "Mar 14, 2025", role: "Admin" },
    { name: "Dika", email: "dika77@gmail.com", joined: "Feb 27, 2025", role: "Programmer" },
    { name: "Maya", email: "maya123@gmail.com", joined: "Jan 05, 2025", role: "User" },
    { name: "Rendra", email: "rendra44@gmail.com", joined: "Apr 14, 2024", role: "Moderator" },
    { name: "Putri", email: "putri12@gmail.com", joined: "Mar 19, 2024", role: "User" },
    { name: "Galih", email: "galih99@gmail.com", joined: "Feb 08, 2024", role: "Admin" },
    { name: "Andi", email: "andi77@gmail.com", joined: "Jan 20, 2024", role: "User" },
    { name: "Citra", email: "citra88@gmail.com", joined: "Dec 15, 2023", role: "Moderator" },
    { name: "Bayu", email: "bayu55@gmail.com", joined: "Nov 11, 2023", role: "Programmer" },
    { name: "Eka", email: "eka23@gmail.com", joined: "Oct 05, 2023", role: "Admin" },
    { name: "Fahri", email: "fahri12@gmail.com", joined: "Sep 28, 2023", role: "User" },
    { name: "Lina", email: "lina98@gmail.com", joined: "Aug 30, 2023", role: "User" },
    { name: "Reza", email: "reza88@gmail.com", joined: "Jul 21, 2023", role: "Moderator" },
    { name: "Wulan", email: "wulan76@gmail.com", joined: "Jun 18, 2023", role: "Admin" },
    { name: "Hendra", email: "hendra99@gmail.com", joined: "May 02, 2023", role: "User" },
    { name: "Nina", email: "nina45@gmail.com", joined: "Apr 14, 2023", role: "User" },
    { name: "Bagus", email: "bagus22@gmail.com", joined: "Mar 29, 2023", role: "Programmer" },
    { name: "Intan", email: "intan77@gmail.com", joined: "Feb 20, 2023", role: "Moderator" },
    { name: "Yoga", email: "yoga12@gmail.com", joined: "Jan 11, 2023", role: "Admin" },
    { name: "Tari", email: "tari23@gmail.com", joined: "Dec 05, 2022", role: "User" },
    { name: "Riko", email: "riko78@gmail.com", joined: "Nov 15, 2022", role: "User" },
    { name: "Salsa", email: "salsa44@gmail.com", joined: "Oct 09, 2022", role: "Programmer" },
    { name: "Dewi", email: "dewi33@gmail.com", joined: "Sep 01, 2022", role: "Moderator" },
    { name: "Ilham", email: "ilham56@gmail.com", joined: "Aug 12, 2022", role: "Admin" },
    { name: "Vina", email: "vina27@gmail.com", joined: "Jul 03, 2022", role: "User" },
    { name: "Rama", email: "rama11@gmail.com", joined: "Jun 15, 2022", role: "User" },
    { name: "Sylvia", email: "sylvia88@gmail.com", joined: "May 10, 2022", role: "Moderator" },
    { name: "Doni", email: "doni33@gmail.com", joined: "Apr 22, 2022", role: "Programmer" },
    { name: "Karina", email: "karina99@gmail.com", joined: "Mar 18, 2022", role: "Admin" },
    { name: "Zaki", email: "zaki77@gmail.com", joined: "Feb 25, 2022", role: "User" }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const rowsPerPageSelect = document.getElementById("rowsPerPage");
const paginationDiv = document.getElementById("pagination");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 1;
let rowsPerPage = parseInt(rowsPerPageSelect.value);
let filteredData = [...data];

function renderTable() {
    tableBody.innerHTML = "";
    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let pageData = filteredData.slice(start, end);
    pageData.forEach(row => {
        let tr = document.createElement("tr");
        tr.className = "border-b border-gray-400 opacity-70";
        tr.innerHTML = `
        <td class="text-xs md:text-base px-4 py-2">${row.name}</td>
        <td class="text-xs md:text-base px-4 py-2">${row.email}</td>
        <td class="text-xs md:text-base px-4 py-2">${row.joined}</td>
        <td class="text-xs md:text-base px-4 py-2">${row.role}</td>
      `;
        tableBody.appendChild(tr);
    });
    renderPagination();
}
function renderPagination() {
    paginationDiv.innerHTML = "";
    let totalPages = Math.ceil(filteredData.length / rowsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.textContent = i;
        btn.className = "px-3 py-1 border border-primary-1 rounded not-sm:text-[10px] text-sm " +
            (i === currentPage ? "bg-primary-1 not-sm:text-[10px] text-white" : "");
        btn.addEventListener("click", () => {
            currentPage = i;
            renderTable();
        });
        paginationDiv.appendChild(btn);
    }
}
searchInput.addEventListener("input", () => {
    let term = searchInput.value.toLowerCase();
    filteredData = data.filter(row =>
        row.name.toLowerCase().includes(term) ||
        row.email.toLowerCase().includes(term) ||
        row.joined.toLowerCase().includes(term) ||
        row.role.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderTable();
});
rowsPerPageSelect.addEventListener("change", () => {
    rowsPerPage = parseInt(rowsPerPageSelect.value);
    currentPage = 1;
    renderTable();
});
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});
nextBtn.addEventListener("click", () => {
    let totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
});
renderTable();