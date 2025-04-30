"use client";

import TaskCard from "@/components/task-card";
import TaskForm from "@/components/task-form";
import { useState } from "react";

interface Task {
  title: string;
  description?: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description?: string) => {
    setTasks((prevTasks) => [...prevTasks, { title, description }]);
  };

  return (
    <main className="m-auto flex flex-col gap-[2.5rem] justify-center items-center w-[1000px]">
      <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <div className="flex w-full justify-between flex-wrap gap-y-4">
        <TaskCard
          title="Demitir a Pam"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam quae sapiente doloremque similique tempore facilis, officiis minima nostrum molestiae excepturi nihil corrupti eaque officia voluptatem cumque perspiciatis. Fugit, eligendi?"
        />
        <TaskCard
          title="Falar com a Ameinda"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam quae sapiente doloremque similique tempore facilis, officiis minima nostrum molestiae excepturi nihil corrupti eaque officia voluptatem cumque perspiciatis. Fugit, eligendi?"
        />
        {tasks.map((task, index) => (
          <TaskCard key={`${task.title}-${index}`} {...task} />
        ))}
      </div>
    </main>
  );
}
