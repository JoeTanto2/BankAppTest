import React, { useState, useEffect } from "react";
import {addUser} from "../services/apis";
const AddBalance = () => {
    const [fullName, setName] = useState('');
    const [balance, setBalance] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const to_send = { fullName, balance };
        try {
            const response = await addUser(to_send);
            console.log(response.data);
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' required name='name' placeholder='Your name' value={fullName} onChange={(e) => setName(e.target.value)}/>
                <input type='text' required name='balance' placeholder='Your balance' value={balance} onChange={(e) => setBalance(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default AddBalance;