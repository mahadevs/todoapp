// when we enter text in input filed & click add task, have to add it to task list

// li, span, input (edit), delete, edit & save button, checkbox

// li, span, checkbox, delete



//var final = lists


var taskButton = document.getElementById("addbutton");

var incompletedTask = document.getElementById("incompletedtask");
var completedTask = document.getElementById("completedtask");



function addtask() {

    var taskContent = document.getElementsByName('addtask')[0].value;
    var lists = document.createElement("li");
    var spanText = document.createElement("span");
    var editText = document.createElement("input");
    var checktask = document.createElement("input");
    var saveButton = document.createElement("button");
    var delButton = document.createElement("button");

    editText.setAttribute("type", "text");
    editText.setAttribute("value", "");
    checktask.setAttribute("type", "checkbox");

    saveButton.innerText = "Edit";
    delButton.innerText = "Delete";

    lists.appendChild(checktask);
    lists.appendChild(spanText);
    lists.appendChild(editText);

    lists.appendChild(saveButton);
    lists.appendChild(delButton);
    if (taskContent !== "") {
        incompletedTask.appendChild(lists);
    }



    // if (typeof (Storage) !== "undefined") {
    //     console.log("local storage supported");
    //     incompletedTask.appendChild(lists);

    //     var todolists= [];
    //     localStorage.setItem('todolists', JSON.stringify(todolists));

    // } else {
    //     console.log("local storage not supported")
    // }


    spanText.innerText = taskContent;
    saveButton.onclick = editnsave;
    checktask.onchange = moveto;
    delButton.onclick = deletelist;

    function editnsave() {


        var editLi = lists.querySelector("input[type=text]");
        console.log(editLi.value);


        if (lists.className != "editmode") {
            editLi.value = spanText.innerText;
            lists.className = "editmode";
            saveButton.innerText = "Save";

        } else if (lists.className == "editmode") {
            spanText.innerText = editLi.value;
            saveButton.innerText = "Edit";
            lists.className = "";


        }
    }

    document.getElementsByName('addtask')[0].value = "";

}
taskButton.onclick = addtask;

document.onkeydown = function (enterkey) {
    if (enterkey.keyCode == 13) {
        addtask();
        editnsave();
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