import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import { TaskCard } from "@/module/tasks/TaskCard";
import { useGetTaskQuery } from "@/redux/api/baseApi";

import { taskSelector, updateFilter } from "@/redux/features/task/taskSlice";
import { useDispatch, useSelector } from "react-redux";

export const Tasks = () => {
  const { data: tasks, isLoading } = useGetTaskQuery([]);
  console.log(tasks);

  // const tasks = useSelector(taskSelector);
  const dispatch = useDispatch();
  // const filter = useSelector(filterSelector);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold mr-auto">Tasks</h2>
        <Tabs defaultValue="All">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("All"))}
              value="All"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Medium"))}
              value="Medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      {tasks && tasks.tasks.length > 0 ? (
        <div className="space-y-4">
          {tasks.tasks.map((task: any) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
        </div>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};
