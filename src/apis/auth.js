import {request} from "../helpers/request";

const  URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GER_INFO: '/auth'
}

const  Auth = {
  register({username,password}) {
    return request(URL.REGISTER, 'POST', {username, password})
  },
  login({username,password}) {
    return request(URL.LOGIN, 'POST', {username, password})
  },
  logout() {
    return request(URL.LOGOUT, )
  },
  getInfo() {
    return request(URL.GER_INFO,)
  },
}

export { Auth }
