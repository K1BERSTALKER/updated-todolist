import { Footer, Navbar, TodoList } from "./layout";

function App() {
  return (
    <div className="max-w-7xl mx-auto  h-full">
      <Navbar />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
