// when we enter text in input filed & click add task, have to add it to task list

// li, span, input (edit), delete, edit & save button, checkbox

// li, span, checkbox, delete




var taskButton = document.getElementById("addbutton");
var addtaskButton = document.getElementById("addtask");


var incompletedTask = document.getElementById("incompletedtask");
var completedTask = document.getElementById("completedtask");

var obj = {

    addtask: function () {

        var checktask = document.createElement("input");
        var lists = document.createElement("li");
        var spanText = document.createElement("span");
        var editText = document.createElement("input");

        var saveButton = document.createElement("button");
        var delButton = document.createElement("button");

        editText.setAttribute("type", "text");
        editText.setAttribute("id", "edit");
        editText.setAttribute("value", "");
        checktask.setAttribute("type", "checkbox");

        saveButton.innerText = "edit";
        delButton.innerText = "Delete";

        lists.appendChild(checktask);
        lists.appendChild(spanText);
        lists.appendChild(editText);
        lists.appendChild(saveButton);
        lists.appendChild(delButton);


        var taskContent = document.getElementsByName('addtask')[0].value;

        spanText.innerText = taskContent;
        var final = document.getElementsByTagName("li");

        var arrlist = [];

        arrlist.push(final[0]);

        localStorage.setItem('todoList', JSON.stringify(arrlist));


        incompletedTask.appendChild(arrlist[0]);


        delButton.onclick = deletetask;



        saveButton.onclick = editnsave;

        function editnsave() {



            var editLi = lists.querySelector("input[type=text]");
            console.log(editLi.value);


            if (lists.className != "editmode") {
                editLi.value = spanText.innerText;
                lists.className = "editmode";

            } else if (lists.className == "editmode") {
                spanText.innerText = editLi.value;

                lists.className = "";
            }


        }

        var tasktext = document.getElementsByName('addtask')[0];
        tasktext.value = " ";


    }


}

taskButton.onclick = obj.addtask;

onkeydown = function (enterkey) {
    if (enterkey.keyCode == 13) {
        obj.addtask();
    }
}

function deletetask() {
    this.parentNode.remove();

}