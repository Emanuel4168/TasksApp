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
        getTasks()
        return
    }
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    getTasks()
}

function getTasks(){
    if(localStorage.getItem('tasks') == null)
        return
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let taskasView = document.getElementById('txtTask')

    taskasView.innerHTML = ''


    tasks.forEach(task => {
        let title = task.title
        let body = task.body

        taskasView.innerHTML += `<div class="card">
                                    <div class="card-body">
                                        <p>${title} - ${body}</p>
                                        <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger"> Delete </a>
                                    </div> 
                                </div>`
    });
}

function deleteTask(title) {
    console.log(title)
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].title == title) {
        tasks.splice(i, 1)
        return
      }
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks))
    getTasks()
  }

getTasks()