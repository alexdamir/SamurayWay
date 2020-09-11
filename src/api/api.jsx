import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cf3a380c-1ab0-40cd-8f94-932a8da251e8"
    }    
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
        });
    }
} 

export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
        });
    }
} 

export const followAPI = {
    follow: (id) => {
        return instance.post('follow/' + id)
            .then(response => {
                return response.data;
        });
    },
    unfollow: (id) => {
        return instance.delete('follow/' + id)
            .then(response => {
                return response.data;
        });

    }
} 



