// import {setEditItem} from "../actions";

const myState = Object.create(null);
myState.isLoading = false;
myState.allDataForTable = [];
myState.currentDataForTable = [];
myState.currentPageForTable = 1;
myState.curentEditItem = null;
myState.countPagesForPagination = 5;


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
                currentEditItem: action.item
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


        default:
            return state
    }
}


export default reducer;