let initialState = {
    userList : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
    singleUser : {}
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
        break;

        case 'DELETE_USER' : 
            let ans = state.userList.filter((val)=>{
                return val.id != action.payload
            })
            localStorage.setItem('user',JSON.stringify(ans));
            return {
                ...state,
                userList : ans
            }
        break;

        case 'FETCH_USER' :
            let user = state.userList.filter((val)=>{
                return val.id == action.payload
            })
            return {
                ...state,
                singleUser : user[0]
            }
        break;

        case 'UPDATE_USER' : 
            let updateUser = state.userList.map((val)=>{
                if(val.id == action.payload.id){
                    return {
                        ...val,
                        name : action.payload.name,
                        email : action.payload.email,
                        password : action.payload.password,
                    }
                }
                return val;
            })
            localStorage.setItem('user',JSON.stringify(updateUser));
            return {
                ...state,
                userList : updateUser
            }
        break;
            

        default : 
            return state;
    }
}

export default crudReducer;