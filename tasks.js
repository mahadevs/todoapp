// when we enter text in input filed & click add task, have to add it to task list

// li, span, input (edit), delete, edit & save button, checkbox

// li, span, checkbox, delete




var taskButton = document.getElementById("addbutton");
var addtaskButton = document.getElementById("addtask");


var incompletedTask = document.getElementById("incompletedtask");
var completedTask = document.getElementById("completedtask");

var lists, editText, spanText, taskContent, saveButton, delButton;
var obj = {

    addtask: function () {

        var checktask = document.createElement("input");
        lists = document.createElement("li");
        spanText = document.createElement("span");
        editText = document.createElement("input");

        saveButton = document.createElement("button");
        delButton = document.createElement("button");



        //var final = lists

        editText.setAttribute("type", "text");
        editText.setAttribute("id", "edit");
        editText.setAttribute("value", "");
        checktask.setAttribute("type", "checkbox");

        saveButton.innerText = "edit";
        delButton.innerText = "Delete";

        incompletedTask.appendChild(lists);
        lists.appendChild(checktask);
        lists.appendChild(spanText);

        lists.appendChild(saveButton);
        lists.appendChild(delButton);


        taskContent = document.getElementsByName('addtask')[0].value;

        spanText.innerHTML = taskContent;
        var final = document.getElementsByTagName("li");
        
        var arrlist = JSON.parse(localStorage.getItem("arrlist"));
        var arrlist = [];

        arrlist.push(final[0]);
        
        localStorage.setItem("arrlist", JSON.stringify(arrlist));

        
        incompletedTask.appendChild(arrlist[0]);
        var arrlist = JSON.parse(localStorage.getItem("arrlist"));

        
        
        delButton.onclick = deletetask;

        var inputFiled = document.getElementsByName('addtask')[0].value = "";

        saveButton.onclick = editnsave;

    }
}

taskButton.onclick = obj.addtask;

addtaskButton.onkeydown = function (enterkey) {
    if (enterkey.keyCode == 13) {
        obj.addtask();
    }
}

function deletetask() {
    this.parentNode.remove();

}

function editnsave() {

    if (saveButton.innerText == "save") {


        var editedtext = document.getElementById("edit").value;

        spanText.innerText = editedtext;

        saveButton.innerText = "edit";
    } else if (saveButton.innerText == "edit") {
        var editval = spanText.appendChild(editText);
        editval.value = taskContent;
        saveButton.innerText = "save";

    }

}