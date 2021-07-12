import axios from 'axios'
const baseURL = "url"
const token = "/token-ext/"

export async function getToken(username,password){
    const url = baseURL+token
    const response = axios.post(url,{
        username,
        password
    })
    return response
}

export async function getData(username,password,apiExt){
    const response = await getToken(username,password)
    const {access:token,refresh} = response.data
    const url = baseURL+apiExt
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get(url,config)
}

export async function create_data(username,password,apiExt,data){
    const response = await getToken(username,password)
    const {access:token,refresh} = response.data
    const url = baseURL+apiExt
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    axios.post(url,data,config)
}

export async function delete_data(username,password,apiExt,id){
    const response = await getToken(username,password)
    const {access:token,refresh} = response.data
    const url = baseURL+apiExt+id
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    return axios.delete(url,config)
}