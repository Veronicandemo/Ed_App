import { apiResponse, axiosRequest } from "../api.util"

const countryData = 'https://grito-backend.onrender.com/countries.json'

export const MiscRequests = {
  getCountries: async (setLoading) => {
    try {
      // const res = await fetch(countryData)
      const req = await axiosRequest(setLoading).get(countryData)
      const countryOptions = req.data.map((country) => ({
        value: country.callingCodes,
        label: country.name,
      }))
      return apiResponse(true, 'Countries fetched successful', countryOptions)
    } catch (error) {
      console.error('Error fetching data:', error)
      return apiResponse(false, error.response.data.message || error.message, error.response.data)
    }
  }
}