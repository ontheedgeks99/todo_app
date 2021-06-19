<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TodosRequest;
use App\Models\Todos\Todo;

class TodosController extends Controller
{
    public function index()
    {
        return view('todos.index');
    }

    public function getTodo() {

        // 認証機能を利用してuser_idの取得
        $user_id = \Auth::user()->user_id;

        // user_idからtodoを取得
        return Todo::orderBy('todo_id', 'desc')->where('user_id', $user_id)->get()->toJson();

    }

    public function create(TodosRequest $request){

        // todoモデルを利用してからのtodoオブジェクトを作成
        $todo = new Todo;

        $user_id = \Auth::user()->user_id;
        
        // 認証機能を利用してuser_idの取得
        $todo->user_id = $user_id;

        // フォームから送られてきた値でtodonameを設定
        $todo->todoname = $request->todoname;

        // todosテーブルにINSERT
        $todo->save();

        return Todo::orderBy('todo_id', 'desc')->where('user_id', $user_id)->get()->toJson();
    }

    public function delete(TodosRequest $request){
        
        // todoモデルを利用して空のtodoオブジェクトを作成
        $todo = new Todo;

        // todo_idでSELECT
        $todo = Todo::find($request->todo_id);
        
        // DELETE処理
        $todo->delete();

        // 認証機能を利用してuser_idの取得
        $user_id = \Auth::user()->user_id;
        
        return Todo::orderBy('todo_id', 'desc')->where('user_id', $user_id)->get()->toJson();
    }

    public function status(TodosRequest $request){

        // todoモデルを利用して空のtodoオブジェクトを作成
        $todo = new Todo;
        
        // todo_idでSELECT
        $todo = Todo::find($request->todo_id);

        $status = $todo->status;
        
        if((int)$status === 0){
            $status = 1;
        } else {
            $status = 0;
        }

        // UPDATE処理
        $todo->status = $status;
        $todo->save();

        // 認証機能を利用してuser_idの取得
        $user_id = \Auth::user()->user_id;
        
        return Todo::orderBy('todo_id', 'desc')->where('user_id', $user_id)->get()->toJson();
    }

    public function edit(TodosRequest $request){

        // todoモデルを利用して空のtodoオブジェクトを作成
        $todo = new Todo;
        
        // todo_idでSELECT
        $todo = Todo::find($request->todo_id);

        // フォームから送られてきた値でtodonameを設定
        $todo->todoname = $request->todoname;

        $edit = $todo->edit;
        
        if((int)$edit === 0){
            $edit = 1;
        } else {
            $edit = 0;
        }

        $todo->edit = $edit;

        // UPDATE処理
        $todo->save();

        // 認証機能を利用してuser_idの取得
        $user_id = \Auth::user()->user_id;
        
        return Todo::orderBy('todo_id', 'desc')->where('user_id', $user_id)->get()->toJson();
    }
    
    public function update_edit(TodosRequest $request){

        // todoモデルを利用して空のtodoオブジェクトを作成
        $todo = new Todo;
        
        // todo_idでSELECT
        $todo = Todo::find($request->todo_id);

        $edit = $todo->edit;
        
        if((int)$edit === 0){
            $edit = 1;
        } else {
            $edit = 0;
        }

        $todo->edit = $edit;

        // UPDATE処理
        $todo->save();

        // 認証機能を利用してuser_idの取得
        $user_id = \Auth::user()->user_id;
        
        return Todo::orderBy('todo_id', 'desc')->where('user_id', $user_id)->get()->toJson();
    }

    public function __construct(){
        $this->middleware('auth');
    }
}
