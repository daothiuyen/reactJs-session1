import React from "react";

class MyComponent extends React.Component {

    state = {
        'name' : '',
        'age' : '26 tuổi'
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click me')
    }

    render() {

        // let name = 'Uyên';
        // let age = '25 tuổi';

        return (
            <>
            
                <div className="first">
                    <input type="text" value={this.state.name} onChange={(event) => this.handleChangeName(event)}/>
                    <br/>
                    Hello!! My name {this.state.name}
                </div>
                <div className="second">
                    {this.state.age}
                </div>
                <div className="third">
                    <button type="button" onClick={() => this.handleClickButton()}>Click me</button>
                </div>
                <br/>
                
            </>
            
        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/ 
export default MyComponent;