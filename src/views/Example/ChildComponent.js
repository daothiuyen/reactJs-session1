import React from "react";

// class ChildComponent extends React.Component {


//     render() {
//         console.log('Data', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;

//         let {name, age, arrJobs} = this.props; //khi và chỉ khi tên biến trùng với key được truyền từ props bên Component cha
//         return (
            
//             <>
                
//                 <div>Child Component name: {name}, tuổi: {age}</div>
//                 <div className="job-list">
//                     {
//                         arrJobs.map((item, index) => {
//                                 return (
//                                     <div key={item.id}>
//                                         {item.id} - {item.title}
//                                     </div>
//                                 )
//                             }
//                         )
//                     }
//                 </div>
                
//             </>
            
//         )
//     }
// }
/*Nếu muốn export nhiều sẽ dùng {}. Ví dụ { MyComponent1, MyComponent2 }. Cần dùng ở đâu thì sẽ import vào cũng dùng {}*/ 

const ChildComponent = (props) => {
    console.log("Data", props);
    let {name, age, arrJobs} = props;
    return (
            
                    <>
                        
                        <div>Child Component name: {name}, tuổi: {age}</div>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.id} - {item.title}
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        
                    </>
                    
                )
}
export default ChildComponent;