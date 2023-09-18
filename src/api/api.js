import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "eefed9fb-3791-454b-a398-f212a92c2e09"
    }
});


export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },

    getFriends(){
        return instance.get(`users?friend=true`)
            .then(response => {
                return response.data
            })
    }

};

export const followAPI = {
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    follow(id){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
};

export const profileAPI = {
    getProfile(userID){
        return instance.get(`profile/${userID}`, {
            withCredentials: true
        })
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    authMe(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe, captcha){
        return instance.post( '/auth/login', {email:email, password:password, rememberMe:rememberMe, captcha: captcha})
    },
    logout(){
        return instance.delete( '/auth/login')
    }
};