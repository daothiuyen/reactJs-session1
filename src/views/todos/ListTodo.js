import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            {
                id: 1, title: "Giáo viên"
            },
            {
                id: 2, title: "Bác sĩ"
            },
            {
                id: 3, title: "Dev"
            },
            {
                id: 4, title: "Tester"
            }
        ],
        editTodo: {}
    }

    addNewTodo = (item) => {
        this.setState({
            listTodos: [...this.state.listTodos, item]
        })
        toast.success("Wow so easy!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //case save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            //copy lại mảng listTodos
            let listTodoCopy = [...listTodos];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update success");
            return;
        }

        // case edit
        this.setState({
            editTodo: todo
        })
    }

    handleDeleteTodo = (todo) => {
        let currentListTodo = this.state.listTodos;
        currentListTodo = currentListTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentListTodo
        })
        toast.success("Delete success!")
    }

    handleOnChangeTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>
                    Hello world !!!
                </p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div key={item.id} className="todo-child">
                                        {isEmptyObj === true ?
                                            <span className="text-left">{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {
                                                    editTodo.id === item.id ?
                                                        <span className="text-left">
                                                            {index + 1} - <input onChange={(event) => this.handleOnChangeTodo(event)} value={editTodo.title} />
                                                        </span>
                                                        :
                                                        <span className="text-left">{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <div className="btn-right">
                                            <button
                                                onClick={() => this.handleEditTodo(item)}
                                                className="edit">
                                                {isEmptyObj === false && editTodo.id === item.id ?
                                                    'Save'
                                                    : 'Edit'
                                                }
                                            </button>
                                            <button
                                                onClick={() => this.handleDeleteTodo(item)}
                                                className="delete">Delete</button>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;