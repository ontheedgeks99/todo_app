import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Todo from './Todo';
import Edit from './Edit';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todo:[],
            error:false,
        };
        this.getTodo();
    }

    getTodo(){           
        axios
          .get('/gettodo')
          .then(results => {
            const data = results.data;
            this.setState({
              todo: data
            });
          });
    }

    /**
     * クエリを実行し、todoを追加
     * @param todoname 
     */
    addTodo = (todoname) => {
            
        axios
          .post('/todos_create',{
            todoname: todoname
            }).then(results => {
              const data = results.data;
              this.setState({
                todo: data
              });
            })
          .catch(e => this.setState({error:e.response.data.errors}));

    }
    /**
     * クエリを実行しstatus情報の変更
     * @param todo_id 
     */
     UpdateStatus = (id) => {

        axios
        .post('/todos_status',{
            todo_id: id
          })
          .then(results => {
            const data = results.data;
            this.setState({
              todo: data
            });
          });
    }
    /**
     * クエリを実行しtodoの削除
     * @param todo_id 
     */
     Delete = (id) => {

        axios
        .post('/todos_delete',{
            todo_id: id
          })
          .then(results => {
            const data = results.data;
            this.setState({
              todo: data
            });
          });

    }
    /**
     * errorステートを変更
     * @param void
     */
    Cancelerror = () => {
        this.setState({error: false});
    }

    /**
     * todonameの更新
     * @param todoname
     */
     UpdateTodoname = (todoname,todo_id) => {
      axios
        .post('/todoname_edit',{
            todo_id: todo_id,
            todoname: todoname,
          })
          .then(results => {
            const data = results.data;
            this.setState({
              todo: data
            });
          });
    }
    /**
     * editのステータスを変更
     * @param todo_id
     */
    UpdateEdit = (todo_id) => {
      axios
        .post('/update_edit',{
            todo_id: todo_id,
          })
          .then(results => {
            const data = results.data;
            this.setState({
              todo: data
            });
          });
    }

    render(){
        return(
            <div>
                <Form 
                    onClick={this.addTodo}
                    error={this.state.error}
                    onCancel={this.Cancelerror}
                />
                
                <div className="inner">
                    <ul className="task-list">
                        {this.state.todo.map((value) => (
                            <li key={value.todo_id}>

                                { value.edit ? (
                                    <Edit
                                    todo_id={value.todo_id} 
                                    todoname={value.todoname}
                                    status={value.status}
                                    onChangeStatus={this.UpdateStatus} 
                                    onChangeTodoname={this.UpdateTodoname}
                                    onChangeEdit={this.UpdateEdit}
                                    />

                                ):(
                                    <Todo
                                    todo_id={value.todo_id} 
                                    todoname={value.todoname}
                                    status={value.status}
                                    onChangeStatus={this.UpdateStatus} 
                                    onClick={this.Delete}
                                    onChangeEdit={this.UpdateEdit}
                                    />
                                )}
                                
                            </li>
                        ))}
                    </ul>
                </div> 
            </div>
        );
    }
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}