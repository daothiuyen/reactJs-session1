import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render() {
        return (
            <div>Hello world</div>
        )
    }
}
//HOC: higher order component -> tạo ra 1 component mới với đầy đủ thuộc tính của thằng bên ngoài + của thằng bạn đang có
export default Color(Home);