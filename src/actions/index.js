export const setAllDataForTable = (data) => {
    return {
        type: 'setAllDataForTable',
        data
    }
};

export const setEditItem = (item) => {
    return {
        type: 'setEditItem',
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


export const changeName = (name) => {
    return {
        type: 'changeName',
        name
    }
};

export const changeActivity = (activity) => {
    return {
        type: 'changeActivity',
        activity
    }
};

export const changeDepartment = (department) => {
    return {
        type: 'changeDepartment',
        department
    }
};

export const saveChangeUserData = () => {
    return {
        type: 'changeDepartament'
    }
};


