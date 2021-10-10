import { getUser } from '../../api/fakeApiUser'
import { getApi } from '../../api/fakeApiUser'
import { ERROR, FETCHED_ALL_SURAHS, FETCHING } from '../constants'
import {BASE_URL} from '../api'

export const getAllSurahs = () => {
  return async dispatch => {
    dispatch({type: FETCHING})

    const { data } = await getApi(BASE_URL+'/surah',"")
    console.log("data getAllSurahs", data)
    if (data.code == 200) {
        dispatch({type: FETCHED_ALL_SURAHS, payload: data.data})
    }else {
      dispatch({type: ERROR})
    }

  }
}