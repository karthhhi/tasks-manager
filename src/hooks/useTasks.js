import React, { useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  function handleTask(task) {
    const { taskId, taskName, project, comments } = task;
    if (!taskId) {
        setTasks((prev) =>(
            [
                ...prev,
                {taskId: Date.now(), taskName, project, comments}
            ]
        ));
    } else {
        const updatedTasks = tasks.splice(tasks.findIndex((t) => t.taskId === task.taskId), 1, task);
        setTasks(updatedTasks);
    }
  }
  return [tasks, handleTask];
}
