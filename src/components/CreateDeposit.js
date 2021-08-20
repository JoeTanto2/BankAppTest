import React, { useState, useEffect } from "react";
import {deposit} from "../services/apis";
const Deposit = () => {
    const [id, setId] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const to_send = {id, amount};
        try {
            const response = await deposit(to_send);
            setMessage('Answer from the server: ' + response.data)
        }
        catch (error){
            console.log(error.error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' required name='id' value={id} onChange={(e) => setId(e.target.value)}/>
                <input type='text' required name='amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default Deposit;