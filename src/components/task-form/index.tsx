import { PlusIcon, SquarePenIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Task } from "@/app/page";

interface TaskFormProps {
  handleTaskSubmission: (title: string, description?: string) => void;
  task?: Task;
}

export default function TaskForm({
  handleTaskSubmission,
  task,
}: TaskFormProps) {
  const { register, handleSubmit, reset } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = (data) => {
    handleTaskSubmission(data.title, data.description);
    if (!task) reset();
  };

  return (
    <form
      className={`p-[2rem] ${
        !task ? "border-1 border-gray-300" : undefined
      } w-full rounded-md`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-[1.5rem] text-[1rem]">
        {!task && (
          <legend className="font-bold text-[1.3rem] pb-[1.4rem] ">
            Nova Tarefa
          </legend>
        )}

        <input
          type="text"
          id="title"
          defaultValue={task && task.title}
          placeholder="Título da Tarefa"
          className="focus:outline-none rounded-md p-2 w-full border-1 border-gray-300"
          required
          {...register("title")}
        />

        <textarea
          id="description"
          defaultValue={task && task.description && task.description}
          placeholder="Descrição (opcional)"
          className="resize-none p-2 h-[100px] rounded-md focus:outline-none border-1 border-gray-300"
          {...register("description")}
        />
      </fieldset>
      <button className="flex justify-center rounded-md items-center gap-[1rem] mt-7 p-3 w-full bg-[#18181A] text-white font-bold cursor-pointer">
        {!task ? (
          <>
            <PlusIcon color="white" size={20} />
            Adicionar Tarefa
          </>
        ) : (
          <>
            <SquarePenIcon color="#FFF" size={20} />
            Editar Tarefa
          </>
        )}
      </button>
    </form>
  );
}
