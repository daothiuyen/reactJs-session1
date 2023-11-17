import React from "react";
import axios from 'axios';

class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    // async bất đồng bộ của Js
    async componentDidMount() {
        /*Cách 1 thì k cần async*/
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log(res.data.data);
        //     })

        /*Cách 2*/
        //tạo và hứng kết quả
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    List User
                </div>
                <div className="list-user-content">
                    {
                        listUsers && listUsers.length > 0 ?
                            listUsers.map((item, index) => {
                                return (
                                    <div className="child" key={item.id}>
                                        {index + 1} - {item.first_name} {item.last_name}
                                    </div>
                                )

                            })
                            :
                            <div>
                                Chưa có dữ liệu
                            </div>
                    }

                </div>
            </div>
        )
    }
}

export default ListUser;