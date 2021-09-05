// delete task
const deleteTask = (id: number, e?: React.MouseEvent<HTMLButtonElement>,) => {
    // console.log('delete', id);
    // e?.preventDefault()
    // setTasks(tasks.filter((task) => task.id !== id))
  }
// toggle reminder
  const toggleReminder = (id: number, e?: React.MouseEvent<HTMLButtonElement>,) => {
    console.log('toggle', id);
    e?.preventDefault()
  }

export { deleteTask, toggleReminder}