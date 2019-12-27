import { createNavBar } from "./index"

function renderHomeTab() {
    renderPage();
    let p = document.createElement("p");
    p.textContent = "The mission is simple: serve delicious, affordable food that guests will want to return to week after week.";
    content.appendChild(p);
    let links = document.querySelectorAll("a");
    links.forEach(link => link.backgroundColor = "#FFFFFF");
    let link = document.querySelector("#Home")
    link.style.backgroundColor = "#F6A000";
}

function renderPage() {
    removeAllChildren("content");
    let content = document.querySelector("#content");
    createNavBar();
}

function removeAllChildren(nodeSelector) {
    const myNode = document.getElementById(nodeSelector);
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
}

export {renderHomeTab, renderPage}