import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        console.log('Check data input', this.state);
        if (!this.state.title || !this.state.salary) {
            alert('Vui lòng nhập dữ liệu')
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="title">Title Job:</label><br />
                <input
                    type="text" value={this.state.title}
                    onChange={(event) => this.handleChangeTitle(event)}
                /><br />
                <label htmlFor="lastName">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                /><br /><br />
                <input type="submit"
                    onClick={(event) => this.handleClick(event)}
                    value="Submit" />
            </form>
        )
    }


}

export default AddComponent;