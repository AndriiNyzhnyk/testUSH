const myState = Object.create(null);
myState.isLoading = false;
myState.allDataForTable = [];
myState.currentDataForTable = [];
myState.currentPageForTable = 1;
myState.curentEditItem = null;
myState.countPagesForPagination = 5;
myState.showEditForm = false;
myState.login = '';
myState.password = '';
myState.redirectToApp = false;
myState.temp = {
    empId: '',
    empName: '',
    empActive: '',
    empDepartment: ''
};


function reducer(state = myState, action) {
    switch (action.type) {
        case 'test':

            return state;


        case 'setAllDataForTable':
            console.log('reducer set data for table');
            return Object.assign(Object.create(null), state, {
                allDataForTable: action.data,
                isLoading: true
            });


        case 'setEditItem':
            console.log('reducer setEditItem');
            return Object.assign(Object.create(null), state, {
                currentEditItem: action.id,
                showEditForm: true,
                temp: Object.assign(Object.create(null), state.temp, {
                    empId: action.item.empId,
                    empName: action.item.empName,
                    empActive: action.item.empActive,
                    empDepartment: action.item.empDepartment
                })
            });


        case 'hideEditForm':
            return Object.assign(Object.create(null), state, {
                showEditForm: false,
                temp: {
                    empId: '',
                    empName: '',
                    empActive: '',
                    empDepartment: ''
                }
            });


        case 'setCurrentPageForTable':
            console.log('reducer setCurrentPageForTable');
            return Object.assign(Object.create(null), state, {
                currentPageForTable: action.item
            });


        case 'setCountPagesForPagination':
            console.log('reducer setCountPagesForPagination');
            return Object.assign(Object.create(null), state, {
                countPagesForPagination: action.count
            });


        case 'deleteItem':
            console.log('delete item');
            let index = +action.index;
            console.log(index + ' index in reducer');

            let newArr = [...state.allDataForTable];

            for(let i = 0; i < newArr.length; i++) {
                if(newArr[i].empId === index) {
                    newArr.splice(i, 1);
                    break;
                }
            }

            return Object.assign(Object.create(null), state, {
                allDataForTable: newArr
            });


        case 'changeName':
            return Object.assign(Object.create(null), state, {
                temp: Object.assign(Object.create(null), state.temp, {
                    empName: action.empName
                })
            });


        case 'changeActivity':
            return Object.assign(Object.create(null), state, {
                temp: Object.assign(Object.create(null), state.temp, {
                    empActive: action.empActive
                })
            });


        case 'changeDepartment':
            return Object.assign(Object.create(null), state, {
                temp: Object.assign(Object.create(null), state.temp, {
                    empDepartment: action.empDepartment
                })
            });


        case 'saveChangeUserData':
            return Object.assign(Object.create(null), state, {
                allDataForTable: state.allDataForTable.map( (item) => {
                    if(item.empId === state.temp.empId) {
                        return state.temp
                    }
                    return item;
                }),
                showEditForm: false
            });


        case 'setNewLogin':
            return Object.assign(Object.create(null), state, {
                login: action.value
            });


        case 'setNewPassword':
            return Object.assign(Object.create(null), state, {
                password: action.value
            });


        case 'redirectToApp':
            return Object.assign(Object.create(null), state, {
                redirectToApp: true
            });


        default:
            return state
    }
}

export default reducer;