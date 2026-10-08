"use client";

import { useEffect, useState } from "react";

interface Task {
  id: number;
  task: string;
  description: string;
  status: string;
  progress: number;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] =
    useState("Pending");
  const [progress, setProgress] =
    useState(0);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/tasks"
      );

      const data = await response.json();

      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!taskName.trim()) return;

    await fetch(
      "http://localhost:8000/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          task: taskName,
          description,
          status,
          progress,
        }),
      }
    );

    setTaskName("");
    setDescription("");
    setStatus("Pending");
    setProgress(0);

    fetchTasks();
  };

  const completeTask = async (
    id: number
  ) => {
    await fetch(
      `http://localhost:8000/api/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          status: "Completed",
          progress: 100,
        }),
      }
    );

    fetchTasks();
  };

  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  const inProgress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  const pending = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  const overall =
    tasks.length > 0
      ? tasks.reduce(
          (sum, task) =>
            sum + task.progress,
          0
        ) / tasks.length
      : 0;

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
       <div className="text-center">
  <h1 className="text-4xl font-bold">
    Pipeline Progress
  </h1>

  <p className="text-gray-500 mt-2">
    Track your pipeline tasks
  </p>
</div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-xl font-semibold mb-4">
            Add New Task
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) =>
                setTaskName(
                  e.target.value
                )
              }
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="border rounded-lg p-3"
            />

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
              className="border rounded-lg p-3"
            >
              <option value="Pending">
                Pending
              </option>
              <option value="In Progress">
                In Progress
              </option>
              <option value="Completed">
                Completed
              </option>
            </select>

            <input
              type="number"
              min="0"
              max="100"
              value={progress}
              onChange={(e) =>
                setProgress(
                  Number(
                    e.target.value
                  )
                )
              }
              className="border rounded-lg p-3"
              placeholder="Progress"
            />

            <button
              onClick={addTask}
              className="bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card
            title="Total Tasks"
            value={tasks.length}
          />
          <Card
            title="Completed"
            value={completed}
          />
          <Card
            title="In Progress"
            value={inProgress}
          />
          <Card
            title="Pending"
            value={pending}
          />
        </div>

        <div className="bg-white p-6 rounded-xl border shadow">
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold">
              Overall Progress
            </h2>

            <span className="text-green-600 font-semibold">
              {Math.round(overall)}%
            </span>
          </div>

          <div className="h-4 bg-gray-200 rounded-full">
            <div
              className="h-4 bg-green-500 rounded-full"
              style={{
                width: `${overall}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-4">
                  Task
                </th>
                <th>Description</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-t"
                >
                  <td className="p-4 font-medium">
                    {task.task}
                  </td>

                  <td className="text-gray-500">
                    {task.description}
                  </td>

                  <td>
                    <Status
                      status={
                        task.status
                      }
                    />
                  </td>

                  <td className="w-72">
                    <div className="flex items-center gap-3">
                      <span>
                        {task.progress}%
                      </span>

                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-500 rounded-full"
                          style={{
                            width: `${task.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>

                  <td>
                    {task.status !==
                      "Completed" && (
                      <button
                        onClick={() =>
                          completeTask(
                            task.id
                          )
                        }
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow">
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

function Status({
  status,
}: {
  status: string;
}) {
  const styles: Record<
    string,
    string
  > = {
    Completed:
      "bg-green-100 text-green-700",
    "In Progress":
      "bg-blue-100 text-blue-700",
    Pending:
      "bg-orange-100 text-orange-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${
        styles[status] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}