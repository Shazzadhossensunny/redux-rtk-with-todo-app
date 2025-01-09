import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { TTask } from "@/type";
import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTaskComplete,
} from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import { userSelector } from "@/redux/features/user/userSlice";
import EditTaskModal from "./EditTaskModal";

export const TaskCard = ({ task }: { task: TTask }) => {
  const dispatch = useDispatch();
  const users = useAppSelector(userSelector);
  const assignUser = users.find((user) => user.id === task.assignedTo);
  const handleCheck = (id: string) => {
    dispatch(toggleTaskComplete(id));
  };
  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="border rounded-lg shadow-md p-4 flex items-start gap-4">
      <div className="flex flex-1 gap-2">
        {/* Priority Indicator */}

        <div
          className={cn(
            "size-3 rounded mt-2",
            task.priority === "High" && "bg-red-500",
            task.priority === "Medium" && "bg-yellow-500",
            task.priority === "Low" && "bg-green-500"
          )}
          title={`Priority: ${task.priority}`}
        ></div>

        {/* Task Details */}
        <div className="flex-1 space-y-2">
          <h3
            className={cn(
              "text-lg font-semibold",
              task.isCompleted === true && "line-through"
            )}
          >
            {task.title}
          </h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-600">
            Assign To - {assignUser ? assignUser.name : "No one"}
          </p>
          {/* <div className="mt-2 flex justify-between text-sm">
            <span>
              <strong>Status:</strong> {task.isCompleted}
            </span>
            <span>
              <strong>Due Date:</strong> {task.dueDate}
            </span>
          </div> */}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <EditTaskModal task={task} />
        <button
          onClick={() => handleDelete(task.id)}
          className="text-red-500 hover:text-red-700"
          title="Delete Task"
        >
          <Trash2 size={20} />
        </button>
        <Checkbox
          checked={task.isCompleted}
          onClick={() => handleCheck(task.id)}
        />
      </div>
    </div>
  );
};
