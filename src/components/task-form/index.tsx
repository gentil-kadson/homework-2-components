import { PlusIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Task } from "@/app/page";

interface TaskFormProps {
  addTask: (title: string, description?: string) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
  const { register, handleSubmit, reset } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = (data) => {
    addTask(data.title, data.description);
    reset();
  };

  return (
    <form
      className="border-1 p-[2rem] border-gray-300 w-full rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-[1.5rem] text-[1rem]">
        <legend className="font-bold text-[1.3rem] pb-[1.4rem] ">
          Nova Tarefa
        </legend>

        <input
          type="text"
          id="title"
          placeholder="Título da Tarefa"
          className="focus:outline-none rounded-md p-2 w-full border-1 border-gray-300"
          required
          {...register("title")}
        />

        <textarea
          id="description"
          placeholder="Descrição (opcional)"
          className="resize-none p-2 h-[100px] rounded-md focus:outline-none border-1 border-gray-300"
          {...register("description")}
        />
      </fieldset>
      <button className="flex justify-center rounded-md items-center gap-[1rem] mt-7 p-3 w-full bg-[#18181A] text-white font-bold cursor-pointer">
        <PlusIcon color="white" size={20} />
        Adicionar Tarefa
      </button>
    </form>
  );
}
