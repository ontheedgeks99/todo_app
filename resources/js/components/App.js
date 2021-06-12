import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Todo from './Todo';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todo:[],
            error:false,
        };
    }

    componentDidlMount(){
            
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
              .post('/api/todos_create',{
                  todoname: todoname
                })
                .catch(e => this.setState({error:e.response.data.errors}));
    
                getTodo()

    }
    /**
     * クエリを実行しstatus情報の変更
     * @param todo_id 
     */
     UpdateStatus = (id) => {

        axios
        .post('/api/todos_status',{
            todo_id: id
          })
          getTodo()
    }
    /**
     * クエリを実行しtodoの削除
     * @param todo_id 
     */
     Delete = (id) => {

        axios
        .post('/api/todos_delete',{
            todo_id: id
          })
          getTodo()

    }
    /**
     * errorステートを変更
     * @param void
     */
    Cancelerror = () => {
        this.setState({error: false});
    }

    render(){
        return(
            <div>
                <Form 
                    onClick={this.addTodo}
                    error={this.state.error}
                    onCancel={this.Cancelerror}
                />
                
                <Todo 
                    todo={this.state.todo}
                    onChangeStatus={this.UpdateStatus} 
                    onClick={this.Delete}
                />
            </div>
        );
    }
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}