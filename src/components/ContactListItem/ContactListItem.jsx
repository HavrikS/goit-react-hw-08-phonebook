import React from 'react'


const ContactList = ({data}) => (    
    <li >{data.name}: {data.number}</li>    
)

export default ContactList;