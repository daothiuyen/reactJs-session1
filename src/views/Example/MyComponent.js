import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {
                id: 1,
                title: 'Tester',
                salary: 400
            },
            {
                id: 2,
                title: 'Dev',
                salary: 500
            }, {
                id: 3,
                title: 'PM',
                salary: 800
            }
        ]
    }

    addNewJob = (job) => {
        console.log('check data', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {

        return (
            <>

                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>

        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/
export default MyComponent;