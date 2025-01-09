export type TTask = {
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
