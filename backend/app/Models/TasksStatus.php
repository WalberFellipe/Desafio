<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TasksStatus extends Model
{
    use HasFactory;

    protected $table = 'tasks_statuses';

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'key',
        'description',
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class, 'status');
    }
}
