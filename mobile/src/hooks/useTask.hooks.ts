// src/hooks/useTasks.ts

import { useEffect, useState } from 'react';
import { TaskDTO } from '../models/task.model';
import { getTasks } from '../services/task.service';

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (err) {
        setError('Failed to load tasks');
      }
    };

    fetchTasks();
  }, []);

  return { tasks, error };
};
