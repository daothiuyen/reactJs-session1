import React from "react";
//viết kiểu function component vì sẽ nhận nhiều props
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

//truyền 1 componnent
const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    //props chính là component mà mình muốn bọc bên component đó.
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;