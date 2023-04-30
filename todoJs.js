document.querySelector("form").addEventListener("submit", todoFun);

function todoFun() {
    event.preventDefault();
    var task = document.getElementById("task").value;
    var prior = document.getElementById("priority").value;

    console.log(task, prior);

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = task;
    var td2 = document.createElement("td");
    td2.innerText = prior;

    if(prior == "High"){
        td2.style.backgroundColor = "red";
    }
    else {
        td2.style.backgroundColor = "lightgreen";
    }
    var td3 = document.createElement("td");
    td3.innerText = "Delete";
    td3.addEventListener("click", delTodo);

    tr.append(td1, td2, td3);
    document.querySelector("table").append(tr);

    function delTodo(){
        event.target.parentNode.remove()
    }

}