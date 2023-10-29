import type { FetchOptions } from 'ofetch'
import type { UserInfo } from '~/types/user'

/**
 *
 * @param username
 * @param params
 */
export function getUserInfo(username: string, params?: FetchOptions) {
  return request<UserInfo>(`/github/users/${username}`, {
    method: 'get',
    params,
  })
}
