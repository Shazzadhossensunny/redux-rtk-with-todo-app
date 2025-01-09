import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { TUser } from "@/type";
import { DialogTitle } from "@radix-ui/react-dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function AddUserModal() {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as TUser));
    form.reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 px-4 py-2 rounded">
          <PlusCircle size={20} />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form to add user
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button className="mt-4" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
