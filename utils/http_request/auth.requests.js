import { apiResponse, axiosRequest } from '../api.util'

export const AuthenticationRequests = {
  login: async (username, password, setLoading) => {
    try {
      const formData = {
        param: username,
        password,
      }
      const req = await axiosRequest(setLoading).post('/auth/login', formData)
      return apiResponse(true, 'Logged in successful', req.data)
    } catch (error) {
      return apiResponse(
        false,
        error.response?.data?.message || error.message,
        error.response?.data,
      )
    }
  },

  register: async (formData, setLoading) => {
    try {
      const req = await axiosRequest(setLoading).post(
        '/auth/register',
        formData,
      )
      return apiResponse(true, 'signed up successful', req.data)
    } catch (error) {
      return apiResponse(
        false,
        error.response.data.message || error.message,
        error.response.data,
      )
    }
  },
}
