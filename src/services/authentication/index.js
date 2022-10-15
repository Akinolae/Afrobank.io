import Axios from '../index'
import { extractApiError } from '../../utils/error'
import { transactionHistory } from '../transactions'
import {
  login,
  updateUser,
  updateToken,
  updateUsers,
  updateSignIn,
} from '../appstore/reducers/reducer'
import { appStore } from '../appstore'
import { Auth } from 'afrobank-sdk/dist'

const newAuth = new Auth()

console.log(new Auth())
const store = appStore

const getUserProfile = () => {
  return store.getState().user
}

const isUserSignedIn = () => {
  const { isSignedIn } = getUserProfile()
  return isSignedIn
}
const userHasPin = () => {
  const { pin } = getUserProfile().payLoad
  return !!pin
}

const userToken = () => {
  return getUserProfile().token
}

const registerUser = async (payload) => {
  try {
    await Axios.post('/register', payload)
  } catch (error) {
    throw extractApiError(error)
  }
}

const pollUser = async () => {
  const token = userToken()
  const accountNumber = store.getState().user.payLoad.accountNumber.toString()
  try {
    const res = await Axios.get(`/user/${accountNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    await transactionHistory()
    store.dispatch(updateUser(res.data.message, true))
  } catch (error) {
    throw extractApiError(error)
  }
}

const userLogin = async (payLoad) => {
  try {
    const resp = await newAuth.login(payLoad)
    const { token } = resp
    await getProfile(token)
    store.dispatch(updateToken(token))
    store.dispatch(updateSignIn(true))

    return resp
  } catch (error) {
    throw extractApiError(error)
  }
}

const resetPin = async (pin) => {
  const body = {
    pin,
    accountNumber: getUserProfile().payLoad.accountNumber.toString(),
  }

  try {
    await Axios.post('/pinreset', body)
  } catch (error) {
    throw error
  }
}

const signOut = () => {
  try {
    localStorage.clear()
    store.dispatch(login({}))
    store.dispatch(updateSignIn(false))
  } catch (error) {
    throw error
  }
}

const createPin = async (pin) => {
  const payLoad = {
    accountNumber: getUserProfile().payLoad.accountNumber.toString(),
    pin,
  }
  try {
    await Axios.patch('/createpin', payLoad)
    await pollUser()
  } catch (error) {
    throw extractApiError(error)
  }
}

const fetchUser = async () => {
  let accountNumber = store.getState().user.payLoad.accountNumber.toString()
  try {
    await Axios.get('/user/' + accountNumber)
  } catch (error) {
    throw extractApiError(error)
  }
}

const getAllUsers = async () => {
  const token = userToken()
  const { email } = store.getState().user.payLoad
  try {
    const resp = await Axios.get(`/getAllUsers/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    store.dispatch(updateUsers(resp.data.message))
  } catch (error) {
    console.log(error)
  }
}

const getProfile = async (token) => {
  try {
    const res = await Axios.get(`/getProfile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    store.dispatch(login(res.data.message.message))
  } catch (error) {
    throw extractApiError(error)
  }
}

const activateUser = async (payload) => {
  const { email } = store.getState().user.payLoad
  const token = userToken()

  try {
    const res = await Axios.patch(`/acivate/${email}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    await getAllUsers()
    console.log(res)
  } catch (error) {
    throw extractApiError(error)
  }
}

const deactivateUser = async (payload) => {
  const { email } = store.getState().user.payLoad
  const token = userToken()

  try {
    const res = await Axios.patch(`/deactivate/${email}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    await getAllUsers()

    console.log(res)
  } catch (error) {
    throw extractApiError(error)
  }
}

export {
  signOut,
  pollUser,
  resetPin,
  fetchUser,
  createPin,
  userToken,
  userLogin,
  userHasPin,
  getProfile,
  getAllUsers,
  registerUser,
  activateUser,
  getUserProfile,
  isUserSignedIn,
  deactivateUser,
}
