import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import Combobox from "./Combobox";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todo/todoSlice";

export default function AddToList() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleAddTodo = () => {
    if (title.trim() === "") {
      alert("Title cannot be empty");
      return;
    }

    const newTodo = {
      id: Date.now(), // Generating a unique id for demonstration
      title,
      completed: false,
      proccess: false,
      type: {
        icon: value, // Replace with your actual icon component
      },
    };

    dispatch(addTodo(newTodo));

    // Clear inputs after dispatching the action
    setTitle("");
    setValue("");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary px-2 py-1 rounded-sm">
        Add
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-between">
            <AlertDialogTitle>New Event</AlertDialogTitle>
            <AlertDialogCancel className="px-1 py-0 h-auto border-none ">
              <X className="text-white" />
            </AlertDialogCancel>
          </div>
          <AlertDialogDescription className="flex gap-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type..."
              className="bg-transparent text-white border border-white rounded-sm py-1 px-3"
            />
            <Combobox value={value} setValue={setValue} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleAddTodo}>Add</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
