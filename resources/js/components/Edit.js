import React from 'react';

class Edit extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            input: this.props.todoname,
        }
    }
    /**
     * ステータスの変更
     * @param todo_id 
     */
    handleChangeCompleted = (id) => {
        this.props.onChangeStatus(id);
    }

    /**
     * 入力値をステートで管理
     * @param event 
     */
     handleChange = (event) => {
        const inputValue = event.target.value;
        this.setState({
            input: inputValue
        });
    }
    /**
     * 入力値でデータベースを更新
     * @param event 
     */
    handleClickUpdate = (input) => {
        this.props.onChangeTodoname(input,this.props.todo_id);
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
                        onChange={() => {this.handleChangeCompleted(this.state.inputVallue)}}
                    />
                    <input 
                        className="checkbox-label form-control"
                        type="text"
                        value={this.state.input}
                        onChange={(event) => {this.handleChange(event)}}
                     />
                </label>
                <button className="btn is-update bg-info" onClick={() => {this.handleClickUpdate(this.state.input)}}>更新</button>
                <button className="btn is-delete" onClick={ () => {this.handleChangeEdit(this.props.todo_id)}} >ｷｬﾝｾﾙ</button>
            </div>
        );
    }
}

export default Edit