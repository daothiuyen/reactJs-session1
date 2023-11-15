import React from "react";

class MyComponent extends React.Component {

    state = {
        'name' : 'Uyên',
        'age' : '26 tuổi'
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        // let name = 'Uyên';
        // let age = '25 tuổi';

        return (
            <>
                <div className="first">
                    <input type="text" value={this.state.name} onChange={(event) => this.handleChangeName(event)}/>
                    Hello!! My name {this.state.name}
                </div>
                <div className="second">
                    {this.state.age}
                </div>
            </>
            
        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/ 
export default MyComponent;