import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/logo.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render() {
        console.log('>>> check data Redux', this.props);
        return (
            <>
                <div>Hello world</div>
                <img src={logo} />
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
//HOC: higher order component -> tạo ra 1 component mới với đầy đủ thuộc tính của thằng bên ngoài + của thằng bạn đang có
export default connect(mapStateToProps)(Color(Home));