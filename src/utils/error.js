const extractApiError = (error) => {
  console.log(error)
  if (typeof error === 'object') {
    if (error.message === 'Network Error') {
      return error.message
    } else {
      return error.response.data.message
    }
  } else {
    return error
  }
}
export { extractApiError }
