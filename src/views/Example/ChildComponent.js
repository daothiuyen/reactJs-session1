import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = (status) => {

        this.setState({
            showJob: !this.state.showJob
        })

    }
    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (

            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title} - {item.salary}
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