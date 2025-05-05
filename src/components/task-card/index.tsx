import { SquarePenIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import Modal, { ModalHandle } from "../modal";
import { useRef } from "react";

interface TaskCardProps {
  title: string;
  description?: string;
  onConfirmDelete: () => void;
}

export default function TaskCard({
  title,
  description,
  onConfirmDelete,
}: TaskCardProps) {
  const deleteModal = useRef<ModalHandle>(null);

  const deleteModalChildren = (
    <section className="flex flex-col gap-10 items-center">
      <p>
        Deseja mesmo <strong>excluir</strong> a tarefa{" "}
        <strong>"{title}"</strong>?
      </p>
      <div className="flex justify-between w-full">
        <button
          onClick={onConfirmDelete}
          className="p-2 cursor-pointer w-[100px] rounded bg-[#18181A] text-white"
        >
          Sim
        </button>
        <button
          onClick={() => deleteModal.current?.close()}
          className="p-2 cursor-pointer w-[100px] rounded border-1 border-gray-300"
        >
          Não
        </button>
      </div>
    </section>
  );

  return (
    <>
      <div className="w-[480px] h-[180px] flex flex-col p-5 gap-[1.5rem] border-1 border-gray-300 rounded-xl">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-between items-center"
        >
          <fieldset className="flex items-center gap-[0.5rem]">
            <input type="checkbox" name="task-title" id="task-title" />
            <label
              htmlFor="task-title"
              className="font-semibold line-clamp-1 text-[1.2rem]"
            >
              {title}
            </label>
          </fieldset>
          <div className="flex items-center gap-[2rem]">
            <button className="cursor-pointer">
              <SquarePenIcon color="#18181A" size={20} />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => deleteModal.current?.open()}
            >
              <Trash2Icon color="#18181A" size={20} />
            </button>
          </div>
        </form>
        {description && (
          <p className="text-gray-500 line-clamp-3">{description}</p>
        )}
      </div>
      <Modal
        ref={deleteModal}
        title="Excluir Tarefa"
        children={deleteModalChildren}
      />
    </>
  );
}
