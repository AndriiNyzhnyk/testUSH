export const setDataForTable = (data) => {
    return {
        type: 'setDataForTable',
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
