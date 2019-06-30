// COG-MENU TOGGLE "ACTIVE" CLASS ON CLICK   +   // SHOW COG-MENU ONCE TOGGLER GETS "ACTIVE" CLASS
const cogMenuToggler = document.querySelector(".cog-menu-toggler");
const cogMenuTogglerCog = document.querySelector(".cog-menu-toggler i");
const cogMenu = document.querySelector(".cog-menu");

cogMenuToggler.addEventListener("click", () => {
    cogMenuTogglerCog.classList.toggle("active");
    cogMenu.classList.toggle("active");
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
})

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