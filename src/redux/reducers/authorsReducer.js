const initalState = {
    authors: []
}

export default (state = initalState, action) => {
    switch(action.type) {
        case 'SET_AUTHOR':
            let dataSet = [...state.authors]
            let newItemSet = new Object()

            newItemSet.key = String(Math.random())
            newItemSet.name = action.payload.name.trim()

            dataSet.push(newItemSet)
            
        return {...state, authors: dataSet}

        case 'DELETE_AUTHOR':
            let keyReferenceDelete = action.payload.key
            let dataDelete = [...state.authors]

            dataDelete.splice(dataDelete.findIndex(({key}) => key == keyReferenceDelete), 1)
            
        return {...state, authors: dataDelete}
    }

    return state
}