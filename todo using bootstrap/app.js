
window.onload=()=> {
    console.log("Hello There!");

let addbtn = document.getElementById("add-btn");
addbtn.addEventListener("click", ADD);
let addtxt = document.getElementById("addtxt");
let tasks = localStorage.getItem("tasks");
};
function ADD(e) {
    e.preventDefault();

    if(tasks == null){
        tasksob = [];
    }
    else{
        tasksob = JSON.parse(tasks);
    }
    tasksob.push(addtxt.value);
    localStorage.setItem("tasks", JSON.stringify(tasksob));
    addtxt.value = "";
    console.log(tasksob);

}
