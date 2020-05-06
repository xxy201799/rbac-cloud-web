import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin/user/page',
    method: 'get',
    params
  })
}
