document.getElementById('taskForm').addEventListener('submit',saveTask)

function saveTask(evt){
    evt.preventDefault()
    const title = document.getElementById('txtCardTitle').value
    const body = document.getElementById('txtCardBody').value

    const task ={
        title,
        body
    }

    if(localStorage.getItem('tasks') == null){
        let tasks = [task]
        //tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        return
    }
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
}