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

        case 'DeleteIte':
            console.log('delete item');
            let index = action.index;

            if(index >=0 && index < state.dataForTable.length) {
                let newArr = [...state.dataForTable];
                newArr.splice(index, 1);

                return Object.assign(Object.create(null), state, {
                    dataForTable: newArr
                });
            } else {
                return state;
            }


        default:
            return state
    }
}


export default reducer;