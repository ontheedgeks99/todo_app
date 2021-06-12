<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodosRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // バリデーションルールをまとめる配列
        $rules = [];

        // has()で指定した項目の有無を確認し、あればルールを追加
        if ($this->has('todo_id')) {
            $rules['todo_id'] = 'required|numeric';
        }

        if ($this->has('todoname')) {
            $rules['todoname'] = 'required|max:100'; 
        }

        if ($this->has('status')) {
            $rules['status'] = 'regex:/^[01]+$/';
        }
        return $rules;
    }

    /**
     * エラーメッセージの設定
     *
     * @return array
     */
    public function messages()
    {
        return [
            'todo_id.required' => 'todo.idが存在しません。',
            'todo_id.numeric' => 'todo.idは数値を入力してください。',
            'todoname.required' => 'todoが入力されていません。',
            'todoname.max' => 'todoは100文字以内で入力してください。',
            'status.regex' => 'ステータスが不正です。',
        ];
    }
}
