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

    render(){
        return(
            <div className="inner">
                <ul className="task-list">
                    {this.props.todo.map((value) => (
                        <li key={value.todo_id}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    class="checkbox-input" 
                                    checked={
                                        value.status ? (
                                            true
                                        ):(
                                            false
                                        )
                                    }
                                    onChange={() => {this.handleChangeCompleted(value.todo_id)}}
                                />
                                <span className="checkbox-label">{value.todoname}</span>
                            </label>
                            <button className="btn is-delete" onClick={ () => {this.handleClickDelete(value.todo_id)}} >削除</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo