import TaskCard from "@/components/task-card";
import TaskForm from "@/components/task-form";

export default function Home() {
  return (
    <main className="m-auto flex flex-col gap-[2.5rem] justify-center items-center w-[1000px]">
      <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
      <TaskForm />
      <div className="flex w-full justify-between">
        <TaskCard
          title="Demitir a Pam"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam quae sapiente doloremque similique tempore facilis, officiis minima nostrum molestiae excepturi nihil corrupti eaque officia voluptatem cumque perspiciatis. Fugit, eligendi?"
        />
        <TaskCard
          title="Falar com a Ameinda"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam quae sapiente doloremque similique tempore facilis, officiis minima nostrum molestiae excepturi nihil corrupti eaque officia voluptatem cumque perspiciatis. Fugit, eligendi?"
        />
      </div>
    </main>
  );
}
