export const AddUser = (data) => {
    return {
        type : 'ADD_USER',
        payload : data
    }
}

export const DeleteUser = (data) => {
    return {
        type : 'DELETE_USER',
        payload : data
    }
}

export const FetchUser = (data) => {
    return {
        type : 'FETCH_USER',
        payload : data
    }
}

export const UpdateUser = (data) => {
    return {
        type : 'UPDATE_USER',
        payload : data
    }
}