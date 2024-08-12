<?php

namespace App\Http\Controllers;

use App\Http\Requests\Task\StoreTaskRequest;
use App\Http\Requests\Task\UpdateTaskRequest;
use App\Services\TaskService;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    protected $taskService;

    public function __construct(TaskService $taskService)
    {
        $this->taskService = $taskService;
    }

    /**
     * Display a paginated list of tasks.
     */
    public function index(Request $request)
    {
        
        $page = $request->input('page', 1);
        $perPage = 5;

        $tasks = Task::with('status')
            ->orderBy('created_at', 'desc')
            ->paginate($perPage, ['*'], 'page', $page);

        return response()->json($tasks);
    }

    public function store(StoreTaskRequest $request)
    {
        \Log::info('Store method called with data: ', $request->all());

        $task = $this->taskService->createTask($request->validated());

        \Log::info('Task created: ', $task->toArray());
        
        return response()->json($task, 201);
    }

    public function show(Task $task)
    {
        return response()->json($task);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task = $this->taskService->updateTask($task, $request->validated());
        return response()->json($task);
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully.']);
    }
}
