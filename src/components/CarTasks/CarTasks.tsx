import { useState, useEffect } from "react";

type Task = {
  id: number;
  carId: number;
  text: string;
  done: boolean;
};

type Props = {
  carId: number;
};


export function CarTasks({ carId }: Props) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
});

const [newTask, setNewTask] = useState("");

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

const carTasks = tasks.filter((t) => t.carId === carId);

const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

const addTask = () => {
    if (!newTask.trim()) return;
    const newEntry: Task = {
      id: Date.now(),
      carId,
      text: newTask.trim(),
      done: false,
    };
    setTasks((prev) => [...prev, newEntry]);
    setNewTask("");
  };  

const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div
      className="relative w-full bg-white text-gray-800 p-4 rounded-lg shadow-lg mt-6
                border border-gray-200
                before:content-[''] 
                before:absolute 
                before:-top-2 
                before:left-4 
                before:w-3 
                before:h-3 
                before:rounded-full 
                before:bg-orangeAccent"
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Zadania</h2>
      </div>

      {/*  Pole do dodania nowego zadania */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Dodaj nowe zadanie..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
        >
          Dodaj
        </button>
      </div>

      {/*  Lista zadań */}
      <ul className="space-y-2">
        {carTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
          >
            <label className="flex items-center gap-3 cursor-pointer w-full">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 accent-blue-600"
              />
              <span
                className={`flex-1 ${
                  task.done ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
            </label>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 hover:text-red-700 text-sm ml-2"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {/*  Gdy brak zadań */}
      {carTasks.length === 0 && (
        <p className="text-gray-400 text-sm text-center">
          Brak zadań dla tego pojazdu.
        </p>
      )}
    </div>
  );
}
