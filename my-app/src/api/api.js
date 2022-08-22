import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers:
        {'API-KEY': 'cdcccbe8-d2bc-4133-b175-ca5bd74e04a7'},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(respons=>{
        return respons.data;
    })

};
export const getUnfollowApi = (userId) => {
    return instance.delete(`follow/${userId}`)
};
export const getFollowApi = (userId) => {
    return instance.post(`follow/${userId}`)
};

export const getProfileApi =(userId)=>{
    return instance.get(`profile/`+userId);

}
export const getStatusApi =(userId)=>{
    return instance.get(`profile/status/`+userId);

}
export const updateStatusApi =(status)=>{
    return instance.put(`profile/status/`,{status:status})
}

export const authMeApi=()=>{
    return instance.get(`auth/me`)
}