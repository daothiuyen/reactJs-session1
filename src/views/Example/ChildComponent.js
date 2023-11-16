import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = (status) => {

        this.setState({
            showJob: !this.state.showJob
        })

    }

    handleDelete = (job) => {
        console.log('Delete', job);
        this.props.deleteJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (

            <>
                {showJob === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title} - {item.salary} <span onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </>

        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/

export default ChildComponent;