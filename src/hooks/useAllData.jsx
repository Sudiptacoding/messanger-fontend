import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAllData = () => {
    const axiosData = useAxios();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['alluser'],
        queryFn: () =>
            axiosData.get('/user')
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, data, refetch }
};

export default useAllData;