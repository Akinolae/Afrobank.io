import Axios from '../index'
import { extractApiError } from '../../utils/error'
// import { updateTransactionHistory } from '../appstore/actions/actions'
import { userToken, pollUser, getUserProfile } from '../authentication'
import { updateTransactionHistory } from '../appstore/reducers/reducer'
import { appStore } from '../appstore'

const store = appStore

const transfer = async (payload, pin) => {
  const { recipient, amount } = payload
  const { accountNumber } = getUserProfile().payLoad
  const token = !!userToken() && userToken()

  const body = {
    recipient: recipient.toString(),
    amount,
    sender: accountNumber.toString(),
    pin,
  }
  try {
    const response = await Axios.post('/transfer', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    await pollUser()
    return response.data.message
  } catch (error) {
    throw extractApiError(error)
  }
}

const transactionHistory = async () => {
  const token = userToken()
  try {
    const resp = await Axios.get(`/history/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    store.dispatch(updateTransactionHistory(resp.data.message))
  } catch (error) {
    throw extractApiError(error)
  }
}

const getBalance = async (accountNumber) => {
  try {
    const resp = await Axios.get(`/balance/${accountNumber}`)
    return resp.data.message
  } catch (error) {
    throw extractApiError(error)
  }
}

export { transactionHistory, transfer, getBalance }
