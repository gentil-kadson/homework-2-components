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

  const addTask = (title: string, description?: string) => {
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

  return (
    <main className="m-auto flex flex-col gap-[2.5rem] justify-center items-center w-[1000px]">
      <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <div className="flex w-full justify-between flex-wrap gap-y-4">
        {tasks.map((task) => (
          <TaskCard
            onConfirmDelete={() => handleTaskDeletion(task.id)}
            key={`${task.title}-${task.id}`}
            {...task}
          />
        ))}
      </div>
    </main>
  );
}
