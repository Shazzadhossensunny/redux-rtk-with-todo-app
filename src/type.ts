export type TTask = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  assignedTo: string | null;
};
export type TTaskLocal = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  assignedTo: string | null;
};

export type TFilter = "All" | "High" | "Medium" | "Low";

export type TUser = {
  id: string;
  name: string;
};
