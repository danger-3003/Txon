var new_task = document.querySelector('.new-task-input');
var task_add = document.querySelector('.Add');
var tasks_list = document.querySelector('.tasks');

new_task.addEventListener('keyup',() => 
{
    if(new_task.value.trim() != 0)
    {
        task_add.classList.add('active');
    }
    else
    {
        task_add.classList.remove('active');
    }
}
)
task_add.addEventListener('click',() => 
{
    if(new_task.value.trim() !=0 )
    {
        let newitem = document.createElement('div');
        newitem.classList.add('item');
        newitem.innerHTML = `
                <p>${new_task.value}</p>
                <div class="item-btn">
                    <i class="fa-solid fa-xmark delete"></i>
                    <i class="fa-regular fa-pen-to-square edit"></i>
                </div>
        `
        tasks_list.appendChild(newitem);
        new_task.value="";
    }
    else
    {
        alert("Enter a Task...");
    }
}
)
tasks_list.addEventListener('click',(e) => {
    if(e.target.classList.contains('fa-xmark'))
    {
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.classList.contains('fa-pen-to-square'))
    {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
}
)