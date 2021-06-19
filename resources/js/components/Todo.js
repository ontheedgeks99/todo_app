import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    /**
     * ステータスの変更
     * @param todo_id 
     */
    handleChangeCompleted = (id) => {
        this.props.onChangeStatus(id);
    }
    /**
     * todoの削除
     * @param todo_id 
     */
    handleClickDelete = (id) => {
        if(window.confirm('本当に削除しますか?')){
            this.props.onClick(id);
        }
    }

    handleChangeEdit = (id) => {
        this.props.onChangeEdit(id);
    }

    render(){
        return(
            <div className="todo-content">
                <label>
                    <input 
                        type="checkbox" 
                        className="checkbox-input" 
                        checked={
                        this.props.status ? (
                            true
                        ):(
                            false
                        )
                        }
                        onChange={() => {this.handleChangeCompleted(this.props.todo_id)}}
                    />
                    <span className="checkbox-label">{this.props.todoname}</span>
                </label>
                <button className="btn is-edit bg-secondary" onClick={ () => {this.handleChangeEdit(this.props.todo_id)}}>編集</button>
                <button className="btn is-delete" onClick={ () => {this.handleClickDelete(this.props.todo_id)}} >削除</button>
            </div>
        );
    }
}

export default Todo