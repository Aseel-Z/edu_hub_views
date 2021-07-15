import axios from 'axios'
const baseURL = "https://edu-hub-jo.herokuapp.com/"
const token = "api/token/"

// ,username,password,email,full_name,city,member,specialization,interests,biography,hourly_tutoring_rate,mobile_number,image_url,gender
export async function sign(signExt,data){
    const url = baseURL+signExt
    const response = axios.post(url,data)
    // username password email first_name  city member 
    //  specialization  interests  biography  hourly_tutoring_rate  mobile_number  organization_summary  gender=M/F
    return response
}

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

export async function getMsg(apiExt){

    const url = baseURL+apiExt
    // const response = axios.post(url,{
    //     username,
    //     password
    // })
    // const config = {
    //     headers:{
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    return axios.get(url)
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

export async function get_member_data(apiExt){
    const url = baseURL+apiExt
    return axios.get(url)
}