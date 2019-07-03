// TOGGLE SIDE-NAV ON MENU-TOGGLER CLICK
const menuToggler = document.querySelector(".menu-toggler");

menuToggler.addEventListener("click", () => {
    navSide.classList.toggle("show");
});

// COG-MENU TOGGLE "ACTIVE" CLASS ON CLICK   +   // SHOW COG-MENU ONCE TOGGLER GETS "ACTIVE" CLASS
const cogMenuToggler = document.querySelector(".cog-menu-toggler");
const cogMenuTogglerCog = document.querySelector(".cog-menu-toggler i");
const cogMenu = document.querySelector(".cog-menu");

cogMenuToggler.addEventListener("click", () => {
    cogMenuTogglerCog.classList.toggle("active");
    cogMenu.classList.toggle("active");
});

// CHANGE NAV-SIDE'S BACKGROUND COLOR ON DIFFERENT "COLOR" BTN CLICK
const navSide = document.querySelector(".nav-side");
const colorBtns = document.querySelectorAll(".color");

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("default")) {
            navSide.style.background = "linear-gradient(45deg, #39986a 0%,#42b883 100%)";
        } else if (btn.classList.contains("pink")) {
            navSide.style.background = "linear-gradient(45deg, #bf53f0 0%,#e04ecb 100%)";
        } else if (btn.classList.contains("blue")) {
            navSide.style.background = "linear-gradient(45deg, #305ef4 0%,#1d8cf8 100%)";
        } else if (btn.classList.contains("orange")) {
            navSide.style.background = "linear-gradient(45deg, #ff698d 0%,#ff8c73 100%)";
        } else if (btn.classList.contains("red")) {
            navSide.style.background = "linear-gradient(45deg, #fd5c91 0%,#ee2b1c 100%)";
        }
    });
});

// BIG-CHART BUTTON "ACTIVE" CLASS SWITCH ON DIFFERENT BUTTON CLICK
const bigChartBtns = document.querySelectorAll(".big-chart button");

bigChartBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        bigChartBtns.forEach(btn => btn.classList.remove("active"));
        btn.classList.add("active");
    });
});

// UPDATE CHECK-COUNT IN MANAGEMENT SECTION AFTER CHECKING/UNCHECKING THE CHECKOBOX
let checkCount = document.querySelector(".check-count");
const checkboxInputs = document.querySelectorAll(".check");

let counter = 0;
checkCount.innerHTML = "0";

checkboxInputs.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            counter++;
            checkCount.innerHTML = counter;
        } else {
            counter--;
            checkCount.innerHTML = counter;
        }
    });
});

// MAKE CONTENT EDITABLE ON PEN CLICK IN MANAGEMENT TASKS SECTION + // EDITABLE-CONTENT-MODAL POPUP ON PEN CLICK
const pens = document.querySelectorAll(".fa-pencil-alt");
const editableContentModal = document.querySelector(".editable-content-modal");

pens.forEach(pen => {
    pen.addEventListener("click", e => {

        pens.forEach(pen => {
            pen.parentElement.previousElementSibling.children[0].contentEditable = "false";
            pen.parentElement.previousElementSibling.children[1].contentEditable = "false";
        });

        editableContentModal.classList.add("show");
        setTimeout(() => {
            editableContentModal.classList.remove("show");
        }, 1000);

        e.target.parentElement.previousElementSibling.children[0].contentEditable = "true";
        e.target.parentElement.previousElementSibling.children[1].contentEditable = "true";

    });
});

// ON ENTER, TASK HEADING AND TASK PARAGRAPH SHOULDNT BE EDITABLE ANYMORE
const tasksH = document.querySelectorAll(".task h5");
const tasksP = document.querySelectorAll(".task p");

tasksH.forEach(h => {
    h.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.target.contentEditable = "false";
            e.target.nextElementSibling.contentEditable = "false";
        }
    });
});

tasksP.forEach(p => {
    p.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.target.contentEditable = "false";
            e.target.previousElementSibling.contentEditable = "false";
        }
    });
});

// ONLOAD UNCHECK ALL CHECKBOXES
const uncheckAll = () => {
    for (let i = 0; i < checkboxInputs.length; i++) {
        if (checkboxInputs[i].type === 'checkbox') {
            checkboxInputs[i].checked = false;
        }
    }
}
document.addEventListener("load", uncheckAll());

// ADD WIDTHS OF EACH (.SALARY .PROGRESS-VALUE) DEPENDING ON WHATS INSIDE OF THE (.SALARY SPAN) IN MANAGEMENT SECTION
const salarys = document.querySelectorAll(".salary span");
const progressValues = document.querySelectorAll(".salary .progress-value");

const values = [];

salarys.forEach(el => {
    values.push(parseInt(el.innerHTML));
});

progressValues.forEach((el, index) => {
    el.style.width = values[index] + "%";
});

// REMOVE TARGETED TR ON "X" CLICK IN MANAGEMENT SECTION
const managementRight = document.querySelector(".management .right");

managementRight.addEventListener("click", e => {
    if (e.target.classList.contains("fa-times")) {
        e.target.parentNode.parentNode.style.opacity = "0.1";
    }
});