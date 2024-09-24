import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actions";

interface Task {
  id: string;
  content: string;
  completed: boolean;
}

const Todos = async () => {
    const tasks: Task[] = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">no tasks to show...</h2>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? "line-through" : null
            }`}
          >
            {task.content}
          </h2>
          <div className="flex gap-6 items-center">
            <Link href={`/todo-list/${task.id}`} className="btn btn-accent btn-xs">
              edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
