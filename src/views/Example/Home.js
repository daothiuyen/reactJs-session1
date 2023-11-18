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
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log('>>> check data Redux', this.props);
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>Hello world</div>
                <img src={logo} />
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div>
                                    {index + 1} - {item.name}
                                    <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button type="button" onClick={() => this.handleCreateUser()}>Add</button>
                </div>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}
//HOC: higher order component -> tạo ra 1 component mới với đầy đủ thuộc tính của thằng bên ngoài + của thằng bạn đang có
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));