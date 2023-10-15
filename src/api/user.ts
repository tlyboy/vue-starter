import type { AxiosRequestConfig } from 'axios'
import request from '~/utils/request'
import type { UserInfo } from '~/types/user'

/**
 *
 * @param username
 * @param params
 */
export function getUserInfo(username: string, params?: AxiosRequestConfig) {
  return request<any, UserInfo>({
    url: `/github/users/${username}`,
    method: 'get',
    params,
  })
}
