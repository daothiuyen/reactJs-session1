import React from "react";

class ChildComponent extends React.Component {

    state = {
        'firstName' : '',
        'lastName' : ''
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleClick = (event) => {
        event.preventDefault()
        console.log('Check data input', this.state);
    }

    render() {

        return (
            <>
            
                <div>Child Component {this.props.name}</div>
                
            </>
            
        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/ 
export default ChildComponent;