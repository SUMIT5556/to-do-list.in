const box = document.getElementById("box");
const work = document.getElementById("work");

function addText() {
    if (box.value === '') {
        alert("YOU MUST WRITE SOMETHING")
    } else {
        let li = document.createElement("li");
        li.innerHTML = box.value;
        work.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    box.value = "";
    saveData();
}

work.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("t1");
        saveData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data",work.innerHTML)
}

function displayData(){
    work.innerHTML = localStorage.getItem("data")
}
displayData();