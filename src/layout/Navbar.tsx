import { Logo } from ".";
import { ListTodo } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <Logo href="/" />
      <div className="flex gap-4">
        <p>To-Do List</p>
        <ListTodo className="cursor-pointer text-primary" />
      </div>
    </div>
  );
}
