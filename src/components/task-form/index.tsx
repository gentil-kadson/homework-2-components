import { PlusIcon } from "lucide-react";

export default function TaskForm() {
  return (
    <form
      action="POST"
      className="border-1 p-[2rem] border-gray-300 rounded-md w-fit"
    >
      <fieldset className="flex flex-col gap-[1.5rem] text-[1rem]">
        <legend className="font-bold text-[1.3rem] pb-[1.4rem] ">
          Nova Tarefa
        </legend>

        <input
          type="text"
          name="title"
          id="title"
          placeholder="Título da Tarefa"
          className="focus:outline-none rounded-md p-2 w-[600px] border-1 border-gray-300"
        />

        <textarea
          name="description"
          id="description"
          placeholder="Descrição (opcional)"
          className="resize-none p-2 h-[100px] rounded-md focus:outline-none border-1 border-gray-300"
        />
      </fieldset>
      <button className="flex justify-center rounded-md items-center gap-[1rem] mt-7 p-3 w-full bg-[#18181A] text-white font-bold cursor-pointer">
        <PlusIcon color="white" size={20} />
        Adicionar Tarefa
      </button>
    </form>
  );
}
