import { ERROR, FETCHED_ALL_SURAHS, FETCHING } from "../constants"

const initialState = {
  surahs: [],
  isLoading: false
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isLoading: true
      }

    case FETCHED_ALL_SURAHS:
      return {
        ...state,
        surahs: payload,
        isLoading: false
      }
    case ERROR:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default userReducer
