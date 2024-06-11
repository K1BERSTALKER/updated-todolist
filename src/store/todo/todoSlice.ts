import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  proccess: boolean;
  type: {
    icon: string;
  }
}

// Define the type for the todoSlice state
interface TodoSliceState {
  todos: Todo[];
}

// Define the initial state using the defined interface
const initialState: TodoSliceState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleProcessTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.proccess = !todo.proccess;
      }
    },
    reorderTodos: (state, action: PayloadAction<{ startIndex: number; endIndex: number }>) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.todos.splice(startIndex, 1);
      state.todos.splice(endIndex, 0, removed);
    },
  }
});

export const {addTodo,removeTodo,toggleProcessTodo,reorderTodos} = todoSlice.actions

export default todoSlice.reducer;