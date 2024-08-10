<?php

namespace App\Http\Requests\Task;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|integer|exists:tasks_statuses,id',
        ];
    }
}
