function addToList(){
    var taskname=document.getElementById('taskname').value;
    var todolist=document.getElementById('mytodo');
    var newTask=document.createElement('div');
     var todoname=document.createElement('li');
     todoname.innerHTML=taskname;
     var deleteBtn=document.createElement('i');
     deleteBtn.classList.add('far');
     deleteBtn.classList.add('fa-trash-alt');
     newTask.appendChild(todoname);
     newTask.appendChild(deleteBtn);
     todolist.appendChild(newTask);
}

var tododiv=document.getElementById('mytodo')
tododiv.addEventListener('click',deleteitem)


function deleteitem(e){
    const element=e.target;

    if(element.classList[0]=='far')
        {
            element.parentElement.remove()
        }
}