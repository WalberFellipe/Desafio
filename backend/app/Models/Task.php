<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'name',
        'description',
        'status',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($task) {
            if (empty($task->id)) {
                $task->id = (string) Str::uuid();
            }
        });
    }


    public function status()
    {
        return $this->belongsTo(TasksStatus::class, 'status', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
