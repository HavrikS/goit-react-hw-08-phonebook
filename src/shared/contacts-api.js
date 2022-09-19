import axios from "axios";


export const getContacts = async()=> {
    const {data} = await axios.get("/contacts");    
    return data;
}

export const addContact = async (data) => {
    console.log(data);
    const {data: result} = await axios.post("/contacts", data);
    return result;
}

export const removeContact = async (id) => {
    const {data: result} = await axios.delete(`/contacts/${id}`);
    return result;
}