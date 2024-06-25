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
