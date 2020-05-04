import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/auth/oauth/token',
    method: 'get',
    headers: {
      Authorization: 'Basic cGlnOnBpZw=='
    },
    params
  })
}

/**
 * 用户登陆信息
 */
export function getInfo(token) {
  return request({
    url: '/admin/user/info',
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export function logout(token) {
  return request({
    url: '/auth/oauth/logout',
    method: 'delete',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
