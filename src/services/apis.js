import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
});

export const addUser = async (info) => {
    var url = 'http://localhost:8080/create/';
    return await api.post(url, info)
}

export const deposit = async (info) => {
    var url = 'http://localhost:8080/deposit/';
    return await api.post(url, info)
}
