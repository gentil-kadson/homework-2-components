import { SquarePenIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import Modal, { ModalHandle } from "../modal";
import { useRef } from "react";
import TaskForm from "../task-form";
import { Task } from "@/app/page";

interface TaskCardProps {
  task: Task;
  onConfirmDelete: () => void;
  onConfirmEdit: (title: string, description?: string) => void;
}

export default function TaskCard({
  task,
  onConfirmDelete,
  onConfirmEdit,
}: TaskCardProps) {
  const deleteModal = useRef<ModalHandle>(null);
  const editModal = useRef<ModalHandle>(null);

  const deleteModalChildren = (
    <section className="flex flex-col gap-10 items-center">
      <p>
        Deseja mesmo <strong>excluir</strong> a tarefa{" "}
        <strong>"{task.title}"</strong>?
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

  const editModalChildren = (
    <TaskForm task={task} handleTaskSubmission={onConfirmEdit} />
  );

  return (
    <>
      <div className="w-[480px] h-[180px] flex flex-col p-5 gap-[1.5rem] border-1 border-gray-300 rounded-xl">
        <form className="flex justify-between items-center">
          <fieldset className="flex items-center gap-[0.5rem]">
            <input type="checkbox" name="task-title" id="task-title" />
            <label
              htmlFor="task-title"
              className="font-semibold line-clamp-1 text-[1.2rem]"
            >
              {task.title}
            </label>
          </fieldset>
          <div className="flex items-center gap-[2rem]">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => editModal.current?.open()}
            >
              <SquarePenIcon color="#18181A" size={20} />
            </button>
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => deleteModal.current?.open()}
            >
              <Trash2Icon color="#18181A" size={20} />
            </button>
          </div>
        </form>
        {task.description && (
          <p className="text-gray-500 line-clamp-3">{task.description}</p>
        )}
      </div>
      <Modal
        ref={deleteModal}
        title="Excluir Tarefa"
        children={deleteModalChildren}
      />
      <Modal
        ref={editModal}
        title={`Editar "${task.title}"`}
        children={editModalChildren}
      />
    </>
  );
}
