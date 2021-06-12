import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            input:""
        }
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
     * 新しいtodoを追加
     * @param void
     */
     handleClickTodo = (event) => {
        event.preventDefault();
        this.props.onClick(this.state.input);
        this.setState({
            input: ""
        });
    }
    /**
     * App.jsのerrarステートをfalseに変更
     * @param void
     */
    handleCancelError = () => {
        this.props.onCancel();
    }


    render(){
        let error
        if ( this.props.error !== false) {
            error = ( 
                <div class="alert alert-dismissible input-error" role="alert">
                    <button type="button" class="close" data-dismiss="alert" onClick={this.handleCancelError}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <p>{this.props.error.todoname}</p>
                </div>
            );
        }
        return(
            <div className="input-form">
                <div className="inner">
                    <form class="container" onSubmit={ (event) => {this.handleClickTodo(event)}}>
                        <input
                            type="text"
                            className="input"
                            value={this.state.input}
                            onChange={(event) => {this.handleChange(event)}}
                        />
                        <input type="submit" className="btn is-primary" value="追加"/>

                    </form>
                </div>
                {error}
            </div>
        );
    }
}

export default Form