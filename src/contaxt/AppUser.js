

export default (state, action) => {
    switch (action.type) {
        case ("delete"):
            return {
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.by)
            }
        case ("Add"):
            return {
                ...state,
                // transactions: [action.by, ...state.transactions],
            }
        default:
            return state;
    }
}