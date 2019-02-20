// import {setEditItem} from "../actions";

const myState = Object.create(null);
myState.isLoading = false;
myState.dataForTable = [];
myState.curentEditItem = null;


function reducer(state = myState, action) {
    switch (action.type) {
        case 'test':

            return state;

        case 'setDataForTable':
            console.log('reducer set data for table');
            return Object.assign(Object.create(null), state, {
                dataForTable: action.data,
                isLoading: true
            });

        case 'setEditItem':
            console.log('reducer setEditItem');
            return Object.assign(Object.create(null), state, {
                curentEditItem: action.item
            });

        case 'deleteItem':
            console.log('delete item');
            let index = +action.index;
            console.log(index + ' index in reducer');

            let newArr = [...state.dataForTable];

            for(let i = 0; i < newArr.length; i++) {
                if(newArr[i].empId === index) {
                    newArr.splice(i, 1);
                    break;
                }
            }

            return Object.assign(Object.create(null), state, {
                dataForTable: newArr
            });


        default:
            return state
    }
}


export default reducer;