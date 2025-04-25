import { SquarePenIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
}

export default function TaskCard({ title, description }: TaskCardProps) {
  return (
    <div className="w-[480px] h-[180px] flex flex-col p-5 gap-[1.5rem] border-1 border-gray-300 rounded-xl">
      <form action="POST" className="flex justify-between items-center">
        <fieldset className="flex items-center gap-[0.5rem]">
          <input type="checkbox" name="task-title" id="task-title" />
          <label htmlFor="task-title" className="font-semibold text-[1.2rem]">
            {title}
          </label>
        </fieldset>
        <div className="flex items-center gap-[2rem]">
          <button className="cursor-pointer">
            <SquarePenIcon color="#18181A" size={20} />
          </button>
          <button className="cursor-pointer">
            <Trash2Icon color="#18181A" size={20} />
          </button>
        </div>
      </form>
      {description && (
        <p className="text-gray-500 line-clamp-3">{description}</p>
      )}
    </div>
  );
}
