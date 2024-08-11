// src/contexts/TaskContext.tsx

import React, { createContext, useEffect, useState } from 'react';
import { TaskDTO } from '../models/task.model';
import { getTasks } from '../services/task.service';

interface TaskContextType {
  tasks: TaskDTO[];
  error: string | null;
  refreshTasks: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
      setError(null);
    } catch (err) {
      setError('Falha ao carregar tarefas');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, error, refreshTasks: fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};