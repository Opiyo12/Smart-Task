import React, { useContext, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TaskContext } from '../context/TaskContext';
import Modal from './ui/Modal';

const TaskItemList = () => {
  const { tasks, setTask, deleteTask } = useContext(TaskContext);
  const { filteredStatus } = useContext(TaskContext);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Open Edit Modal
  const openEditModal = (task) => {
    setSelectedTask(task);
    setIsEditOpen(true);
  };

  // Close Edit Modal
  const closeEditModal = () => {
    setIsEditOpen(false);
    setSelectedTask(null);
  };

  // Open Delete Modal
  const openDeleteModal = (task) => {
    setSelectedTask(task);
    setIsDeleteOpen(true);
  };

  // Close Delete Modal
  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
    setSelectedTask(null);
  };

  // Save edited task
  const saveEditedTask = () => {
    if (!selectedTask.text.trim()) return;
    setTask((prev) =>
      prev.map((task) =>
        task.id === selectedTask.id ? selectedTask : task
      )
    );
    closeEditModal();
  };

  // Toggle completed
  const toggleCompleted = (id) => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filteredStatus === 'completed') return task.completed;
    if (filteredStatus === 'pending') return !task.completed;
    return true;
  });

  const pendingCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-blue-800 dark:text-gray-100">
          Task item list
        </h2>
        <div className="flex gap-5">
          <div className="flex gap-1 items-center">
            <span className="text-orange-500 font-semibold">Pending:</span>
            <span className="text-orange-500 font-bold">{pendingCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-green-500 font-semibold">Completed:</span>
            <span className="text-green-500 font-bold">{completedCount}</span>
          </div>
        </div>
      </div>

      {/* Task List */}
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center justify-between gap-3 mb-2"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
              className="w-5 h-5"
            />
            <div>
              <h3
                className={`text-gray-700 dark:text-gray-200 font-medium ${
                  task.completed
                    ? 'line-through text-gray-500 font-bold'
                    : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                {task.text}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => openEditModal(task)}
              className="flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white rounded-lg text-sm"
            >
              <MdEdit />
              Edit
            </button>
            <button
              onClick={() => openDeleteModal(task)}
              className="flex items-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 active:bg-red-600 text-white rounded-lg text-sm"
            >
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Edit Modal */}
      {isEditOpen && selectedTask && (
        <Modal isOpen={isEditOpen} onClose={closeEditModal}>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <FaEdit size={18} className="text-blue-500" />
              <h2 className="text-md font-semibold text-blue-600">Edit Task</h2>
            </div>
            <input
              type="text"
              value={selectedTask.text}
              onChange={(e) =>
                setSelectedTask({ ...selectedTask, text: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveEditedTask();
              }}
              className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={closeEditModal}
                className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={saveEditedTask}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Modal */}
      {isDeleteOpen && selectedTask && (
        <Modal isOpen={isDeleteOpen} onClose={closeDeleteModal}>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-red-500">
              <MdDelete size={18} />
              <h2 className="text-md font-semibold text-red-600">Delete Task</h2>
            </div>
            <p>Are you sure you want to delete this task?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeDeleteModal}
                className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteTask(selectedTask.id);
                  closeDeleteModal();
                }}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TaskItemList;