//state:  trạng thái ứng dụng của redux, nơi lưu trữ data của redux
const initState = {
    users: [
        { id: 1, name: 'Uyên' },
        { id: 2, name: 'Bắc' },
        { id: 3, name: 'Hehe' },
    ]
}
const rootReducer = (state = initState, action) => {

    return state;
}

export default rootReducer;