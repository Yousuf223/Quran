import axios from 'axios'


export const getApi = async (url, data, token) => {
  console.log("url", url + data)
  try {
    let response = await axios.get(url, {
      headers: {
        "Accept": "application/json",
        'Authorization': `Bearer ${token}`, 
      }
    })
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    console.log("error getApi", e)
    return Promise.reject(e)
  }
}

export const postApi = async (url, data, auth) => {
  console.log(url, data)
  try {
    let response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${auth}`, 
      }
    })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}

module.exports = {
  postApi,
  getApi
}
