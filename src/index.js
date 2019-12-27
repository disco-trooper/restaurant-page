import { renderHomeTab } from "./homeTab"
import { renderMenuTab } from "./menuTab"
import { renderBookingTab } from "./bookingTab"

renderHomeTab();

document.addEventListener("click", (event) => {
    if (event.target.getAttribute("id") == "Home") renderHomeTab();
    if (event.target.getAttribute("id") == "Menu") renderMenuTab();
    if (event.target.getAttribute("id") == "Booking") renderBookingTab();
})

function createNavItem(item) {
    let list = document.querySelector(".navBar");
    let tab = document.createElement("li");
    tab.classList.add("item");
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("id", item);
    link.textContent = item;
    list.appendChild(tab);
    tab.appendChild(link);
}

function createNavBar() {
    let nav = document.createElement("nav");
    content.appendChild(nav);
    let list = document.createElement("ul");
    list.classList.add("navBar");
    nav.appendChild(list);
    createNavItem("Home");
    createNavItem("Menu");
    createNavItem("Booking")
}

export { createNavBar }