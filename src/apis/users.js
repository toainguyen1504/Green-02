import axios from "axios"

export const getUsers = () => {
    return axios.get('https://62ff5d7a34344b6431f7b988.mockapi.io/Users/')
}

export const getUser = (id) => {
    return axios.get(`https://62ff5d7a34344b6431f7b988.mockapi.io/Users/${id}`)
}

export const createUser = (formData) => {
    return axios.post(`https://62ff5d7a34344b6431f7b988.mockapi.io/Users/`, formData)
}

export const editUser = (id, formData) => {
    return axios.put(`https://62ff5d7a34344b6431f7b988.mockapi.io/Users/${id}`, formData)
}

export const deleteUser = (id) => {
    return axios.delete(`https://62ff5d7a34344b6431f7b988.mockapi.io/Users/${id}`)
}
