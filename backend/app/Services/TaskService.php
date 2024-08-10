<?php

namespace App\Services;

use App\Models\Task;
use Illuminate\Support\Str;

class TaskService
{
    public function createTask(array $data): Task
    {
        $data['id'] = Str::uuid();
        return Task::create($data);
    }

    public function updateTask(Task $task, array $data): Task
    {
        $task->update($data);
        return $task;
    }
}
