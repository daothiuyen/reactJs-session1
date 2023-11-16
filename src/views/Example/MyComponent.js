import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName : '',
        lastName : '',
        arrJobs: [
            {
                id: 1,
                title: 'Tester'
            },
            {
                id: 2,
                title: 'Dev'
            },{
                id: 3,
                title: 'PM'
            }
        ]
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
            
                <form>
                    <label htmlFor="firstName">First name:</label><br/>
                    <input 
                        type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br/>
                    <label htmlFor="lastName">Last name:</label><br/>
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input type="submit" 
                        onClick={(event) => this.handleClick(event)}
                    value="Submit"/>
                </form> 
                <ChildComponent
                 name={this.state.firstName}
                 age={'26 tuổi'}
                 arrJobs={this.state.arrJobs}
                 />
            </>
            
        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/ 
export default MyComponent;