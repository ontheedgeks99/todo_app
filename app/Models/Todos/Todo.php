<?php

namespace App\Models\Todos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    /**
     * モデルと関連しているテーブル
     *
     * @var string
     */
    protected $table = 'todos';

    /**
     * テーブルの主キー
     *
     * @var string
     */
    protected $primaryKey = 'todo_id';

    // 可変項目
    protected $fillable =
    [
        'todoname',
        'limit'
    ];
}
