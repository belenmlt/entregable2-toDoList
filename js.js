
function getTask(){
    let htmlToAdd = document.querySelector(".tasks-list").innerHTML;
    let taskAdded = document.querySelector(".task-to-add").value;
    
    if (taskAdded === "") {
        alert("Introduce una tarea pendiente...");

    } else { 

        htmlToAdd += `<div class="each-task-container">`;
        htmlToAdd += `<li class="each-task"><input class="checkbox" type="checkbox">${taskAdded}</li>`;
        htmlToAdd += `<button class="delete-button"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></button>`;
        htmlToAdd += `</div>`;
    
    }
  
    document.querySelector(".tasks-list").innerHTML = htmlToAdd;

}

function removeFromView(){
    let allDeleteButtons = document.getElementsByClassName("delete-button");

    for (let i = 0; i < allDeleteButtons.length; i++) {
        allDeleteButtons[i].onclick = function() {
            let liEachTask = this.previousElementSibling;
            let divEachTaskContainer = liEachTask.parentNode;
    
            divEachTaskContainer.remove();
            
        }
    }
}

document.querySelector(".add-button").addEventListener("click", () => {

    getTask();

    removeFromView();

    document.querySelector(".task-to-add").value = '';

})
