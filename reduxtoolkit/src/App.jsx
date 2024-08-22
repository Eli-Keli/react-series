/* eslint-disable no-unused-vars */

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="h-screen bg-slate-600 flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold pt-3">Redux ToolKit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
