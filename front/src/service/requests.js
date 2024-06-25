import axios from "axios";
import {BaseUrl} from "./api";

export const getAllData = async (Endpoint) => {
    const res = await axios.get(BaseUrl + Endpoint);
    const data = res.data;
    return data;
};

export const getDataById = async (Endpoint, id) => {
    const res = await axios.get(`${BaseUrl + Endpoint}/${id}`);
    const data = res.data;
    return data;
};

export const putData = async (Endpoint, id, obj) => {
    const res = await axios.put(`${BaseUrl + Endpoint}/${id}`, obj);
    const data = res.data;
    return data;
};

export const deleteDataById = async (Endpoint, id) => {
    const res = await axios.delete(`${BaseUrl + Endpoint}/${id}`);
    const data = res.data;
    return data;
};

export const postData = async (Endpoint, obj) => {
    const res = await axios.post(BaseUrl + Endpoint, obj);
    const data = res.data;
    return data;
};

export const patchData = async (Endpoint, id, obj) => {
    const res = await axios.patch(`${BaseUrl + Endpoint}/${id}`, obj);
    const data = res.data;
    return data;
};





export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BaseUrl}/login`, { email, password });
        const token = response.data;
        return token;
    } catch (error) {
        console.error('Login failed:', error);
        return null;
    }
};

export const registerUser = async ({ username, name, lastname, email, password }) => {
    try {
        const response = await axios.post(`${BaseUrl}/register`, { username, firstName: name, lastName: lastname, email, password });
        const token = response.data;
        return token;
    } catch (error) {
        console.error('Registration failed:', error);
        return null;
    }
};