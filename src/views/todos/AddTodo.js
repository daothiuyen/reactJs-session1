import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClick = () => {
        //validate
        if (!this.state.title) {
            toast.error("Missing!")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 100000),
            title: this.state.title
        }
        //gọi hàm addNewTodo từ thằng cha truyền sang -> truyền todo vào
        this.props.addNewTodo(todo)
        //sau khi click thêm sẽ reset giá trị của ô input
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleChangeTitle(event)}
                />
                <button onClick={() => this.handleClick()} className="add">Add</button>
            </div>
        )
    }
}
export default AddTodo;