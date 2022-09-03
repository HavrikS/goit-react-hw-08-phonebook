import { ADD_CONTACTS, DELETE_CONTACTS, ADD_FILTER } from "./types"


export const addContact = newContact => {
    return {
        type: ADD_CONTACTS,
        payload: newContact,
    }
}


export const deleteStoreContact = Id => {
    return {
        type: DELETE_CONTACTS,
        payload: Id,
    }
}

export const addFilter = value => {
    return {
        type: ADD_FILTER,
        payload: value,
    }
}