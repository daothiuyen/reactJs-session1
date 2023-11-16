import React from "react";

class ChildComponent extends React.Component {


    render() {
        console.log('Data', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let {name, age} = this.props; //khi và chỉ khi tên biến trùng với key được truyền từ props bên Component cha
        return (
            
            <>
                
                <div>Child Component name: {name}, tuổi: {age}</div>
                
            </>
            
        )
    }
}
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/ 
export default ChildComponent;