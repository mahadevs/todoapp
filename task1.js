// when we enter text in input filed & click add task, have to add it to task list

// li, span, input (edit), delete, edit & save button, checkbox

// li, span, checkbox, delete



//var final = lists


var taskButton = document.getElementById("addbutton");
var addtaskButton = document.getElementById("addtask");


var incompletedTask = document.getElementById("incompletedtask");
var completedTask = document.getElementById("completedtask");


var lists, spanText, editText, delButton, checktask, saveButton, taskContent;





function addtask() {
    taskContent = document.getElementsByName('addtask')[0].value;
    lists = document.createElement("li");
    spanText = document.createElement("span");
    editText = document.createElement("input");
    checktask = document.createElement("input");
    saveButton = document.createElement("button");
    delButton = document.createElement("button");

    editText.setAttribute("type", "text");
    //editText.setAttribute("id", "edit");
    checktask.setAttribute("type", "checkbox");

    saveButton.innerText = "edit";
    delButton.innerText = "Delete";

    lists.appendChild(checktask);
    lists.appendChild(spanText);
    lists.appendChild(editText);
    editText.style.display = "none";
    lists.appendChild(saveButton);
    lists.appendChild(delButton);

    if (typeof (Storage) !== "undefined") {
        console.log("local storage supported");
       incompletedTask.appendChild(lists);

    } else {
        console.log("local storage not supported")
    }

    if (taskContent !== "") {
        incompletedTask.appendChild(lists);
    }

    spanText.innerText = taskContent;
    saveButton.onclick = editnsave;
    checktask.onchange = moveto;
    delButton.onclick = deletelist;


}
taskButton.onclick = addtask;

addtaskButton.onkeydown = function (enterkey) {
    if (enterkey.keyCode == 13) {
        addtask();
    }
}

function editnsave() {

    if (saveButton.innerText == "edit") {

        spanText.style.display = "none";
        editText.style.display = "inline";
        editText.value = spanText.innerText;
        saveButton.innerText = "save";


    } else if (saveButton.innerText == "save") {

        spanText.style.display = "inline";
        editText.style.display = "none";
        spanText.innerText = editText.value;
        saveButton.innerText = "edit";

    }
}



function deletelist() {
    this.parentNode.remove();
}


function moveto() {
    var ulid = this.parentNode.parentNode.id;
    taskList = this.parentNode;
    if (ulid == "incompletedtask") {
        completedtask.appendChild(taskList);
    } else if (ulid == "completedtask") {
        incompletedTask.appendChild(taskList);
    }
}