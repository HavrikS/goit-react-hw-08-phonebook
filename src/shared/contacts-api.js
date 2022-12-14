import instance from "./auth-api"


export const getContacts = async()=> {
    const {data} = await instance.get("/contacts");    
    return data;
}

export const addContact = async (data) => {
    const {data: result} = await instance.post("/contacts", data);
    return result;
}

export const removeContact = async (id) => {
    const {data: result} = await instance.delete(`/contacts/${id}`);
    return result;
}

export const patchContact = async ({id, newContact}) => {
    const {data: result} = await instance.patch(`/contacts/${id}`, newContact);
    return result;
}