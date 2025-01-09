import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { TUser } from "@/type";
import { Trash2 } from "lucide-react";

export default function UserCard({ user }: { user: TUser }) {
  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-lg shadow-md p-4 flex items-start gap-4">
      <div className="flex flex-1 gap-2">
        {/* user name */}
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-semibold">{user?.name}</h3>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="text-red-500 hover:text-red-700" title="Delete User">
          <Trash2 onClick={() => dispatch(deleteUser(user.id))} size={20} />
        </button>
      </div>
    </div>
  );
}
