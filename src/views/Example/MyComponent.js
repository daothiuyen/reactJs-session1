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
            //tạo ra 1 mảng mới, ...this.state.arrJobs copy lại arrJobs ban đầu, thêm phần tử vào
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>>> run didupdate:', 'prev state state: ', prevState, 'current state: ', this.state)
    }

    componentDidMount() {
        console.log('>>>> run component did mount')
    }

    render() {
        console.log('>>>  call render: ', this.state)
        return (
            <>

                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>

        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/
export default MyComponent;