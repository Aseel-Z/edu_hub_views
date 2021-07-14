import axios from 'axios'
const baseURL = "https://edu-hub-jo.herokuapp.com/"
const token = "/api/token/"

export async function sign(username,password,email,signExt){
    const url = baseURL+signExt
    const response = axios.post(url,{
        username,
        password,
        email
    })
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



export async function get_member_data(){
    const dd={
        member_type : 'student',
        image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
        name:'Student',
        interest :'Math',
        city:'Amman',
        email:'tree@edu.com',
        mobile:'075692633',
        gender:'Male'
    }
    
    const dd2={
        member_type : 'educator',
        image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
        name:'Person teacher-2',
        specialization:'History',
        biography:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
        city:'Amman',
        email:'tree@udu.com',
        mobile:'075692633',
        hourly_tutoring_rate:'1-2 JD',
        gender:'Male'
    }
    
    const dd3={
        member_type : 'institute',
        image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
        name:'School',
        summary:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
        city:'Amman',
        email:'tree@udu.com',
        mobile:'075692633',
        gender:'Male'
    }
    
    const data = [dd,dd2,dd3,dd,dd,dd,dd,dd,dd,dd,dd]
    const res = {data:data}
    return res
}