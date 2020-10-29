// OK input para introducir las tareas - html
// OK detrás del input - botón de añadir tareas - html
// OK que aparezcan las tareas que se añaden más abajo - js
// OK detrás de la tarea añadida - botón de suprimir tareas  
// OK checkbox delante de la tarea añadida - botón de tarea completada, icono se pone en verde

// crear una función que recoja lo introducido en el input y lo meta en un contenedor más abajo
// Compruebe si se ha escrito algo en el campo de tarea - si está vacío ALERT
// Si validación OK --> función que añada lo del input más abajo
// función que suprima la casilla (hide o remove) si le damos a la papelera
   

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

    console.log(taskAdded);
  
    document.querySelector(".tasks-list").innerHTML = htmlToAdd;
    console.log('HTML a añadir', htmlToAdd);

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
