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

