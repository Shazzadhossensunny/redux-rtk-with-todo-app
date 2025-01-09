import AddUserModal from "@/module/users/AddUserModal";
import UserCard from "@/module/users/UserCard";
import { userSelector } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export const Users = () => {
  const users = useAppSelector(userSelector);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold mr-auto">Users</h2>

        {/* user model */}
        <AddUserModal />
      </div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
