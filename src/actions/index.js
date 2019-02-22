export const setAllDataForTable = (data) => {
    return {
        type: 'setAllDataForTable',
        data
    }
};

export const setEditItem = (id, item) => {
    return {
        type: 'setEditItem',
        id,
        item
    }
};

export const hideEditForm = () => {
    return {
        type: 'hideEditForm',
    }
};

export const deleteItemWithArr = (index) => {
    return {
        type: 'deleteItem',
        index
    }
};

export const setCurentPage = (item) => {
    return {
        type: 'setCurrentPageForTable',
        item
    }
};

export const setCountPages = (count) => {
    return {
        type: 'setCountPagesForPagination',
        count
    }
};


export const changeName = (empName) => {
    return {
        type: 'changeName',
        empName
    }
};

export const changeActivity = (empActive) => {
    return {
        type: 'changeActivity',
        empActive
    }
};

export const changeDepartment = (empDepartment) => {
    return {
        type: 'changeDepartment',
        empDepartment
    }
};

export const saveChangeUserData = () => {
    return {
        type: 'saveChangeUserData'
    }
};

export const setNewLogin = (value) => {
    return {
        type: 'setNewLogin',
        value
    }
};

export const setNewPassword = (value) => {
    return {
        type: 'setNewPassword',
        value
    }
};

export const redirectToApp = () => {
    return {
        type: 'redirectToApp',

    }
};
