import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { AddToList } from ".";
import { Trash, Play } from "lucide-react";
import { RootState } from "@/store";

import { Book, Cart, Code, Dumbbell, Folder } from "@/icons";
import { removeTodo, toggleProcessTodo } from "@/store/todo/todoSlice";
import { Skeleton } from "@/components/ui/skeleton";

export default function TodoList() {
  const [removedCount, setRemovedCount] = React.useState(0);
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: number) => {
    setRemovedCount(removedCount + 1);
    dispatch(removeTodo(id));
  };

  const handleProcessTodo = (id: number) => {
    dispatch(toggleProcessTodo(id));
  };

  return (
    <div className="h-[80vh] px-4">
      <div className="flex items-center flex-col gap-4">
        {todos.length > 0
          ? todos.map((item, index) => (
              <div
                key={index}
                className="h-auto border border-white rounded-md py-2 w-1/2 flex justify-between px-4 items-center relative"
              >
                {item.proccess && (
                  <Skeleton className="w-full h-full absolute left-0 -z-10" />
                )}
                <div>
                  <h3>{item.title}</h3>
                </div>
                <div className="flex gap-2">
                  {item.type.icon === "Shopping" && <Cart />}
                  {item.type.icon === "New Project" && <Folder />}
                  {item.type.icon === "Gym" && <Dumbbell />}
                  {item.type.icon === "Reading" && <Book />}
                  {item.type.icon === "New Technology" && <Code />}
                  <Play
                    className="text-yellow-500"
                    onClick={() => handleProcessTodo(item.id)}
                  />
                  <Trash
                    className="text-green-500"
                    onClick={() => handleRemoveTodo(item.id)}
                  />
                </div>
              </div>
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <div
                className="border border-white rounded-md py-2 w-1/2 h-10 relative"
                key={index}
              >
                <Skeleton className="w-full h-full absolute left-0 -z-10 top-0" />
              </div>
            ))}
        <div className="h-auto border border-white rounded-md py-2 w-1/2 flex justify-between px-4 items-center">
          <div className="flex gap-4">
            <p className="text-blue-500">Total:{todos.length}</p>
            <p className="text-red-500">
              New:{todos.length - todos.filter((item) => item.proccess).length}
            </p>
            <p className="text-yellow-500">
              Proccess:{todos.filter((item) => item.proccess).length}
            </p>
            <p className="text-green-500">End:{removedCount}</p>
          </div>
          <div>
            <AddToList />
          </div>
        </div>
      </div>
    </div>
  );
}
