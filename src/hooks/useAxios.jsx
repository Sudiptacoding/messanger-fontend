import React, { useContext, useEffect } from 'react';
import { UserProvider } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const useAxios = () => {
    const { logOut } = useContext(UserProvider)

    useEffect(() => {
        instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()

            }
        });
    }, [])
    return instance;
};

export default useAxios;