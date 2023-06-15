let initialState = {
    userList : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
}

const crudReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_USER' :
            let data = [...state.userList,action.payload];
            localStorage.setItem('user',JSON.stringify(data));
            return {
                ...state,
                userList : data
            }
        default : 
            return state;
    }
}

export default crudReducer;