const initalState = {
    news: []
}

export default (state = initalState, action) => {
    switch(action.type) {
        case 'SET_NEWS':
            let dataSet = [...state.news]
            let newItemSet = new Object()

            newItemSet.key = String(Math.random())
            newItemSet.label = action.payload.label.trim()
            newItemSet.description = action.payload.description.trim()
            newItemSet.keyAuthor = action.payload.keyAuthor
            newItemSet.nameAuthor = action.payload.nameAuthor.trim()

            dataSet.push(newItemSet)

        return {...state, news: dataSet}

        case 'UPDATE_NEWS':
            let dataUpdate = [...state.news]
            let keyReferenceUpdate = action.payload.key
            let newItemUpdate = new Object()

            newItemUpdate.key = keyReferenceUpdate
            newItemUpdate.label = action.payload.label.trim()
            newItemUpdate.description = action.payload.description.trim()
            newItemUpdate.keyAuthor = action.payload.keyAuthor.trim()
            newItemUpdate.nameAuthor = action.payload.nameAuthor.trim()

            let foundItem = dataUpdate.findIndex(({key}) => key === keyReferenceUpdate)
            dataUpdate[foundItem] = newItemUpdate
            
        return {...state, news: dataUpdate}
        
        case 'DELETE_NEWS':
            let keyReferenceDelete = action.payload.key
            let dataDelete = [...state.news]

            dataDelete.splice(dataDelete.findIndex(({key}) => key == keyReferenceDelete), 1)
            
        return {...state, news: dataDelete}    
    }

    return state
}