const myState = Object.create(null);
myState.isLoading = false;
myState.dataForTable = [];


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



        default:
            return state
    }
}


export default reducer;