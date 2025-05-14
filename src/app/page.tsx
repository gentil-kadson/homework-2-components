"use client";

import TaskCard from "@/components/task-card";
import TaskForm from "@/components/task-form";

import { useEffect, useState } from "react";

export interface Task {
  id: string;
  title: string;
  description?: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title: string, description?: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), title, description },
    ]);
  };

  const handleTaskDeletion = (taskId: string) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const handleEditTask = (
    taskId: string,
    title: string,
    description?: string
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title, description } : task
      )
    );
  };

  return (
    <main className="m-auto flex flex-col gap-[2.5rem] justify-center items-center w-[1000px]">
      <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
      <TaskForm handleTaskSubmission={handleAddTask} />
      <div className="flex w-full justify-between flex-wrap gap-y-4">
        {tasks.map((task) => (
          <TaskCard
            onConfirmDelete={() => handleTaskDeletion(task.id)}
            onConfirmEdit={(title: string, description?: string) =>
              handleEditTask(task.id, title, description)
            }
            key={`${task.title}-${task.id}`}
            task={task}
          />
        ))}
      </div>
    </main>
  );
}
