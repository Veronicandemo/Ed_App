import { apiResponse, axiosRequest } from "../api.util"

export const RequestTalentRequests = {
  makeRequest: async (formData, setLoading) => {
    try {
      const req = await axiosRequest(setLoading).post('/requests', formData)
      return apiResponse(true, 'Request submitted successful', req.data)
    } catch (error) {
      return apiResponse(false, error.response.data.message || error.message, error.response.data)
    }
  },
}