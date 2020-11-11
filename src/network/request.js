import axios from "axios"
// 封装axios请求


export function request(config){
    const instance = axios.create({
        baseURL:"http://152.136.185.210:8000/api/w6",
    })

    // 请求拦截

    // instance.interceptors.request.use(config=>{
    //     return config 
    // }),err=>{
    //     console.log(err)
    // }

    // // 相应拦截

    instance.interceptors.response.use(res=>{
        return  res.data
    }),err=>{
        console.log(err)
    }


    // 发送网络请求

    return instance(config) 
}